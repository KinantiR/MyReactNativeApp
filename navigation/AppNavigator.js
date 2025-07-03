import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import FinanceScreen from '../screens/FinanceScreen';
import AddScreen from '../screens/AddScreen';
import TransactionScreen from '../screens/TransactionScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/* Login screen hidden from tab bar */}
      <Tab.Screen 
        name="Login" 
        component={LoginScreen}
        options={{
          tabBarButton: () => null,
          headerShown: false,
        }}
      />
      
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Keuangan"
        component={FinanceScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="money" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle-outline" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Transaksi"
        component={TransactionScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="assignment" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Saya"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
