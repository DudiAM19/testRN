import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions} from 'react-native';
import Courses from '../../scenes/Courses';
import Profile from '../../scenes/Profile';
import Settings from '../../scenes/Settings';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';

const {width} = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const TabStackScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Courses') {
            return (
              <FontAwesome5
                name="book"
                size={RFValue(20)}
                color={focused ? '#E3562A' : '#BEBAB3'}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <Ionicons
                name="person"
                size={RFValue(20)}
                color={focused ? '#E3562A' : '#BEBAB3'}
              />
            );
          } else if (route.name === 'Settings') {
            return (
              <Ionicons
                name="settings"
                size={RFValue(20)}
                color={focused ? '#E3562A' : '#BEBAB3'}
              />
            );
          }
        },
        tabBarActiveTintColor: '#E3562A',
        headerShown: false,
        tabBarStyle: {
          height: width * 0.15,
          borderTopEndRadius: width * 0.08,
          borderTopStartRadius: width * 0.08,
        },
        tabBarLabelStyle: {
          marginBottom: width * 0.01,
        },
      })}>
      <Tab.Screen name="Courses" component={Courses} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabStackScreen;
