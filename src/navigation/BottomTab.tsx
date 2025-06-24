import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ToolsScreen from '../screens/Tools';
import CalendarScreen from '../screens/CalendarScreen';
import MenuScreen from '../screens/MenuScreen';


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
      // initialRouteName='Accounts'
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: '#A7FDE0', height: 60 },
        headerShown: false,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Home':
              return <Ionicons name="home-outline" size={size} color={color} />;
            case 'Accounts':
              return (
                <MaterialIcons
                  name="stacked-line-chart"
                  size={size}
                  color={color}
                />
              );
            case 'Tools':
              return <Ionicons name="construct" size={size} color={color} />;
            case 'Calendar':
              return (
                <Ionicons name="calendar-outline" size={size} color={color} />
              );
            case 'Menu':
              return (
                <MaterialIcons name="grid-view" size={size} color={color} />
              );
          }
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#333',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Accounts" component={HomeScreen} />
      <Tab.Screen name="Tools" component={ToolsScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
  
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
