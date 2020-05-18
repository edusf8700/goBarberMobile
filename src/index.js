import React from 'react';
import { StatusBar } from 'react-native';

import 'react-native-gesture-handler';

import Routes from './routes';

// import { Container } from './styles';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
export default App;
