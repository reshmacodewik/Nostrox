import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';

import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import Header from '../../../components/Header';

type RootStackParamList = {
  Reminders: undefined;
  AddReminder: undefined;
  // add other routes here if needed
};

const data = [
  {
    id: '1',
    desp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
  },
  {
    id: '2',
    desp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
  },
  {
    id: '3',
    desp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.',
  },
];

const ReminderScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles(wp, hp).container}>
      <Header
        title="Reminders"
        customIcon={require('../../../../assets/icon/backarrow.png')}
        onIconPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={{ paddingBottom: hp(10) }}>
        {data.map((item, index) => (
          <View key={item.id} style={{ marginBottom: hp(3) }}>
            {index === data.length - 1 && (
              <TouchableOpacity
                style={styles(wp, hp).plusButton}
                onPress={() => navigation.navigate('AddReminder')}
              >
                <Image
                  source={require('../../../../assets/icon/plus.png')}
                  style={styles(wp, hp).plusIcon}
                />
              </TouchableOpacity>
            )}

            <View style={styles(wp, hp).card}>
              <View style={styles(wp, hp).cardHeader}>
                <View style={styles(wp, hp).headerLeft}>
                  <Image
                    source={require('../../../../assets/icon/bell.png')}
                    style={styles(wp, hp).trophyIcon}
                  />
                  <View style={styles(wp, hp).textContainer}>
                    <Text style={styles(wp, hp).rankText}>Abcd #2</Text>
                    <Text style={styles(wp, hp).textDay}>in 2 days</Text>
                  </View>
                </View>
              </View>
              <Text style={styles(wp, hp).textDesp}>{item.desp}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ReminderScreen;

const styles = (
  wp: (widthPercent: number) => number,
  hp: (heightPercent: number) => number,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    card: {
      borderWidth: 1,
      borderColor: '#D7D7D7',
      borderRadius: wp(3),
      padding: wp(4),
      marginHorizontal: wp(5),
      backgroundColor: '#fff',
      marginTop: wp(6),
      marginBottom: -wp(9),
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp(1),
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(2),
    },
    trophyIcon: {
      width: wp(8),
      height: wp(8),
      resizeMode: 'contain',
      marginRight: wp(2),
    },
    rankText: {
      fontSize: wp(4),
      fontWeight: 'bold',
      color: '#000',
    },
    textDay: {
      color: '#000',
      fontWeight: '500',
      fontSize: wp(3.2),
    },
    textContainer: {
      flexDirection: 'column',
    },
    textDesp: {
      fontSize: wp(3.2),
      lineHeight: wp(5),
      color: '#333',
    },
    plusButton: {
      position: 'absolute',
      bottom: -hp(8),
      right: wp(7),
      width: wp(12),
      height: wp(12),
      backgroundColor: '#78FFD5',
      borderRadius: wp(9),
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
      padding: hp(3.5),
    },
    plusIcon: {
      width: wp(8),
      height: wp(8),
      resizeMode: 'contain',
    },
  });
