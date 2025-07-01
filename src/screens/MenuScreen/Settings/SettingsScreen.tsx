import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useResponsive } from 'react-native-responsive-hook';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';

interface Tool {
  label: string;
  hasSwitch?: boolean;
  screen?: string;
}

const tools: Tool[] = [
  { label: 'Notifications', hasSwitch: true },
  { label: 'Biomertric Authorisation', hasSwitch: true },
  { label: 'Terms & Conditions', screen: 'TermsScreen' },
  { label: 'Privacy Policy', screen: 'PrivacyScreen' },
];

const SettingsScreen: React.FC = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation();

  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        title="Settings"
        customIcon={require('../../../../assets/icon/backarrow.png')}
        onIconPress={() => navigation.goBack()}
      />

      <View
        style={[
          styles.cardContainer,
          { paddingVertical: hp(2), paddingHorizontal: wp(5) },
        ]}
      >
        {tools.map(tool => (
          <TouchableOpacity
            key={tool.label}
            style={[
              styles.toolCard,
              {
                padding: wp(4),
                borderRadius: wp(2),
                marginBottom: hp(1.5),
              },
            ]}
            activeOpacity={tool.screen ? 0.7 : 1}
            onPress={() => {
              if (tool.screen) {
                navigation.navigate(tool.screen as never);
              }
            }}
          >
            <View style={styles.iconRow}>
              <Text style={[styles.toolText, { fontSize: wp(4) }]}>
                {tool.label}
              </Text>
            </View>

            {tool.hasSwitch ? (
              <Switch
                value={
                  tool.label === 'Notifications' ? notificationsEnabled : biometricEnabled
                }
                onValueChange={(value) => {
                  if (tool.label === 'Notifications') {
                    setNotificationsEnabled(value);
                  } else {
                    setBiometricEnabled(value);
                  }
                }}
              />
            ) : (
              <Ionicons name="chevron-forward" size={wp(5)} color="#333" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardContainer: {},
  toolCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D7D7D7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toolText: {
    fontWeight: 'bold',
    color: '#333',
  },
});
