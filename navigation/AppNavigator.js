import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
<Tab.Navigator>
    <Tab.Screen 
  name="Login" 
  component={LoginScreen}
  options={{
    tabBarButton: () => null,  // Jika tidak ingin login tampil di tab bawah
    headerShown: false
  }}
/>
</Tab.Navigator>
  );
};

export default AppNavigator;
