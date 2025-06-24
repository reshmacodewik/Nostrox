import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/Loginscreen';
import ForgotPassword from '../screens/ForgotPassword';
import VerificationCode from '../screens/VerificationCode';
import ResetPassword from '../screens/ResetPassword';

import BottomTabNavigator from './BottomTab';
import NotificationsScreen from '../screens/NotificationsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import MenuScreen from '../screens/MenuScreen';

// Define navigation param types
export type RootStackParamList = {
  WelcomeScreen: undefined;
  OnboardingScreen: undefined;
  LoginScreen: undefined;
  ForgotPassword: undefined;
  VerificationCode: undefined;
  ResetPassword: undefined;
  HomeScreen: undefined;
  NotificationsScreen: undefined;
  CalendarScreen:undefined;
  Menu: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MyStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="HomeScreen" component={BottomTabNavigator} />
      <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
