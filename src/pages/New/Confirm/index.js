import React, { useMemo, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Avatar, Name, Time, ConfirmButton } from './styles';
import Background from '~/components/Background';
import api from '~/services/api';

function Confirm({ navigation }) {
  const provider = navigation.getParam('provider');
  const time = navigation.getParam('time');

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(time), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [time]);

  async function handleSubmit() {
    await api.post(`appointments`, {
      provider_id: provider.id,
      date: time,
    });

    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? `http://192.168.10.24:3333/files/${provider.avatar.path}`
              : `https://api.adorable.io/avatar/50/${provider.name}.png`,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{dateParsed}</Time>
        <ConfirmButton onPress={handleSubmit}>
          Confirmar agendamento
        </ConfirmButton>
      </Container>
    </Background>
  );
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar agendamento',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
  ),
});

export default Confirm;
