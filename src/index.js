// import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

// import {View} from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
