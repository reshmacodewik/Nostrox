import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import { useResponsive } from 'react-native-responsive-hook';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const menuItems = [
  { label: 'Premium', icon: 'star', screen: 'PremiumScreen' },
  { label: 'Leaderboard', icon: 'leaderboard', screen: 'LeaderboardScreen' },
  {
    label: 'Reminders',
    icon: 'notifications-outline',
    screen: 'ReminderScreen',
  },
  { label: 'Certificates', icon: 'verified', screen: 'CertificatesScreen' },
  {
    label: 'Partnership Deals',
    icon: 'handshake',
    screen: 'PartnershipDealsScreen',
  },
  {
    label: 'Social Media',
    icon: 'share-social-outline',
    screen: 'SocialMediaScreen',
  },
  { label: 'Billing Info', icon: 'receipt', screen: 'BillingInfo' },
  {
    label: 'Contracts',
    icon: 'document-text-outline',
    screen: 'ContractsScreen',
  },
  { label: 'Nostrox Identity', icon: 'person', screen: 'NostroxIdentity' },
  { label: 'Customer Support', icon: 'headset', screen: 'CustomerSupportScreen' },
  { label: 'Settings', icon: 'settings', screen: 'SettingsScreen' },
  { label: 'Log Out', icon: 'log-out-outline', screen: null }, // Handle logout separately
];

const MenuScreen = () => {
  const { wp } = useResponsive();
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Header title="Menu" />
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        <View style={styles.profileRow}>
          <Image
            source={require('../../assets/icon/profile.png')}
            style={[
              styles.avatar,
              { width: wp(12), height: wp(12), borderRadius: wp(6) },
            ]}
          />
          <Text style={[styles.profileName, { fontSize: wp(4) }]}>
            John Marker
          </Text>
        </View>
      </TouchableOpacity>
      <FlatList
        data={menuItems}
        keyExtractor={item => item.label}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.menuItem,
              index === 0 && { borderTopWidth: 1, borderTopColor: '#eee' },
              index === menuItems.length - 1 && styles.lastItem,
            ]}
            onPress={() => {
              if (item.screen) {
                navigation.navigate(item.screen);
              } else if (item.label === 'Log Out') {
                // Example logout logic
                console.log('Logging out...');
                // Add your logout code here
              }
            }}
          >
            {item.icon === 'notifications-outline' ||
            item.icon === 'share-social-outline' ||
            item.icon === 'document-text-outline' ||
            item.icon === 'log-out-outline' ? (
              <Ionicons
                name={item.icon}
                size={wp(5)}
                color="#333"
                style={{ marginRight: wp(3) }}
              />
            ) : (
              <MaterialIcons
                name={item.icon}
                size={wp(5)}
                color="#333"
                style={{ marginRight: wp(3) }}
              />
            )}
            <Text style={[styles.menuText, { fontSize: wp(4) }]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 16,
    paddingBottom: 10,
  },
  avatar: {
    backgroundColor: '#eee',
  },
  profileName: {
    marginLeft: 12,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  menuText: {
    fontWeight: '600',
  },
});
