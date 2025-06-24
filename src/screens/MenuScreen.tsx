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

const menuItems = [
  { label: 'Premium', icon: 'star' },
  { label: 'Leaderboard', icon: 'leaderboard' },
  { label: 'Reminders', icon: 'notifications-outline' },
  { label: 'Certificates', icon: 'verified' },
  { label: 'Partnership Deals', icon: 'handshake' },
  { label: 'Social Media', icon: 'share-social-outline' },
  { label: 'Billing Info', icon: 'receipt' },
  { label: 'Contracts', icon: 'document-text-outline' },
  { label: 'Nostrox Identity', icon: 'person' },
  { label: 'Customer Support', icon: 'headset' },
  { label: 'Settings', icon: 'settings' },
  { label: 'Log Out', icon: 'log-out-outline' },
];

const MenuScreen = () => {
  const { wp } = useResponsive();

  return (
    <View style={styles.container}>
      <Header title="Menu" />

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

      <FlatList
        data={menuItems}
        keyExtractor={item => item.label}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.menuItem,
              index === 0 && { borderTopWidth: 1, borderTopColor: '#eee' }, // Top border above Premium
              index === menuItems.length - 1 && styles.lastItem,
            ]}
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
