import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabStackScreen from '../tab';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="root">
      <Stack.Screen name="Root" component={TabStackScreen} />
    </Stack.Navigator>
  );
};

export default App;
