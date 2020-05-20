import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title } from './styles';
import Background from '~/components/Background';

function Profile() {
  return (
    <Background>
      <Container>
        <Title>Meu perfil</Title>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};

export default Profile;
