import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ToolsScreen from '../screens/Tools';
import CalendarScreen from '../screens/CalendarScreen';
import MenuScreen from '../screens/MenuScreen';
import AccountScreen from '../screens/AccountScreen';
import HomeScreen from '../screens/Home/HomeScreen';

export type BottomTabParamList = {
  Home: undefined;
  Accounts: undefined;
  Tools: undefined;
  Calendar: undefined;
  Menu: undefined;
  NotificationsScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: '#A7FDE0', height: 60 },
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          const iconColor = focused ? '#000' : '#999';
          switch (route.name) {
            case 'Home':
              return <Ionicons name="home-outline" size={size} color={iconColor} />;
            case 'Accounts':
              return <MaterialIcons name="stacked-line-chart" size={size} color={iconColor} />;
            case 'Tools':
              return <Ionicons name="construct" size={size} color={iconColor} />;
            case 'Calendar':
              return <Ionicons name="calendar-outline" size={size} color={iconColor} />;
            case 'Menu':
              return <MaterialIcons name="grid-view" size={size} color={iconColor} />;
          }
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: { fontSize: 12 },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Accounts" component={AccountScreen} />
      <Tab.Screen name="Tools" component={ToolsScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
