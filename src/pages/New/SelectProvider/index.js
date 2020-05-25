import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import { Container, ProviderList, Provider, Avatar, Name } from './styles';
import api from '~/services/api';

function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');

      setProviders(response.data);
    }

    loadProviders();
  }, []);

  return (
    <Background>
      <Container>
        <ProviderList
          data={providers}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Provider
              onPress={() => {
                navigation.navigate('SelectDateTime', { provider: item });
              }}
            >
              <Avatar
                source={{
                  uri: item.avatar
                    ? `http://192.168.10.19:3333/files/${item.avatar.path}`
                    : `https://api.adorable.io/avatar/50/${item.name}.png`,
                }}
              />
              <Name>{item.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}

SelectProvider.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}
    >
      <Icon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
  ),
});

export default SelectProvider;
