import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabStackScreen from '../tab';
import DetailCourses from '../../scenes/Courses/DetailCourses';

const Stack = createNativeStackNavigator();
const App = () => {
  const {Navigator, Screen} = Stack;
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="root">
      <Screen name="Root" component={TabStackScreen} />
      <Screen name="DetailCourses" component={DetailCourses} />
    </Navigator>
  );
};

export default App;
