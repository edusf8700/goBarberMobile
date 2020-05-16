import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';
import Input from '~/components/Input';

// import { Container } from './styles';

function SignIn() {
  return (
    <Background>
      <Text>Edu</Text>
      <Input
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="Digite seu nome"
      />
    </Background>
  );
}

export default SignIn;
