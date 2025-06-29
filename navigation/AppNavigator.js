import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require('../assets/icons/home.png')} style={{ width: 24, height: 24 }} />
          )
        }}
      />
      <Tab.Screen 
        name="Stats" 
        component={DashboardScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require('../assets/icons/stats.png')} style={{ width: 24, height: 24 }} />
          )
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={DashboardScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require('../assets/icons/settings.png')} style={{ width: 24, height: 24 }} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
