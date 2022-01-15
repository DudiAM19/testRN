import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from './app';

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => {
  const {Navigator, Screen} = RootStack;
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="app" component={App} />
    </Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default RootNavigator;
