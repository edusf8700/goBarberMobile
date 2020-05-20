import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './config/reactotronConfig';
import App from './App';
import { store, persistor } from './store/index';

function Index() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
          <App />
        </PersistGate>
      </Provider>
    </>
  );
}
export default Index;
