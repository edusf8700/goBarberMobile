import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Infor, Name, Time } from './styles';

function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar source={{ uri: 'https://api.adorable.io/avatar/50/Edu.png' }} />
        <Infor>
          <Name>Eduardo</Name>
          <Time>há 3 horas</Time>
        </Infor>
      </Left>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}

export default Appointment;
