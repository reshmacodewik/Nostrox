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
import ProfileScreen from '../screens/MenuScreen/Profile';
import BillingInfo from '../screens/MenuScreen/BillingInfo';
import NostroxIdentity from '../screens/MenuScreen/NostroxIdentity';
import CustomerSupportScreen from '../screens/MenuScreen/CustomerSupport/CustomerSupportScreen';
import NewTicketScreen from '../screens/MenuScreen/CustomerSupport/NewTicketScreen';
import PartnershipDealsScreen from '../screens/MenuScreen/PartnershipDealsScreen';
import CertificatesScreen from '../screens/MenuScreen/Certificates';
import LeaderboardScreen from '../screens/MenuScreen/Leaderboard';
import SettingsScreen from '../screens/MenuScreen/Settings/SettingsScreen';
import TermsScreen from '../screens/MenuScreen/Settings/TermsScreen';
import PrivacyScreen from '../screens/MenuScreen/Settings/PrivacyScreen';
import ContractsScreen from '../screens/MenuScreen/ContractsScreen ';

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
  CalendarScreen: undefined;
  Menu: undefined;
  ProfileScreen: undefined;
  BillingInfo: undefined;
  NostroxIdentity: undefined;
  CustomerSupportScreen: undefined;
  NewTicketScreen: undefined;
  PartnershipDealsScreen: undefined;
  CertificatesScreen: undefined;
  LeaderboardScreen: undefined;
  SettingsScreen: undefined;
  TermsScreen: undefined;
  PrivacyScreen: undefined;
  ContractsScreen: undefined;
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
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="BillingInfo" component={BillingInfo} />
      <Stack.Screen name="NostroxIdentity" component={NostroxIdentity} />
      <Stack.Screen
        name="CustomerSupportScreen"
        component={CustomerSupportScreen}
      />
      <Stack.Screen name="NewTicketScreen" component={NewTicketScreen} />
      <Stack.Screen
        name="PartnershipDealsScreen"
        component={PartnershipDealsScreen}
      />
      <Stack.Screen name="CertificatesScreen" component={CertificatesScreen} />
      <Stack.Screen name="LeaderboardScreen" component={LeaderboardScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
       <Stack.Screen name="TermsScreen" component={TermsScreen}/>
       <Stack.Screen name="PrivacyScreen" component={PrivacyScreen}/>
        <Stack.Screen name="ContractsScreen" component={ContractsScreen}/>
    </Stack.Navigator>
  );
};

export default MyStack;
