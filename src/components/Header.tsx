import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

import type { ParamListBase } from '@react-navigation/native';

interface RootStackParamList extends ParamListBase {
  NotificationsScreen: undefined;
  // add other screens here if needed
}

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={[styles.container, { height: hp(10) }]}>
      <View style={styles.topRow}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NotificationsScreen')}>
          <Image
            source={require('../../assets/icon/bell.png')}
            style={{ width: wp(7), height: wp(7), resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A7FDE0',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
