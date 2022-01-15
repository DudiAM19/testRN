import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from './app';

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="app" component={App} />
    </RootStack.Navigator>
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
