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
import Header from '../../components/Header';

const data = [
  {
    id: '1',
    rank: 1,
    name: 'Jackthecat',
    country: 'CA',
    currency: 'USD',
    profit: '$147,825',
    equity: '$547,825',
    account: '$400,000',
    gain: '36%',
  },
  {
    id: '2',
    rank: 2,
    name: 'Jackthecat',
    country: 'CA',
    currency: 'USD',
    profit: '$147,825',
    equity: '$547,825',
    account: '$400,000',
    gain: '36%',
  },
];

const LeaderboardScreen = () => {
  const { wp, hp } = useResponsive();

  return (
    <View style={styles(wp, hp).container}>
      <Header title="Leaderboard" />

      <ScrollView contentContainerStyle={{ paddingBottom: hp(10) }}>
        {/* Filter Buttons */}
        <View style={styles(wp, hp).filterContainer}>
          {['All', '10K', '25K', '50K', '100K', '200K'].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles(wp, hp).filterButton,
                item === 'All' && styles(wp, hp).filterButtonActive,
              ]}
            >
              <Text
                style={[
                  styles(wp, hp).filterText,
                  item === 'All' && styles(wp, hp).filterTextActive,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Date */}
        <Text style={styles(wp, hp).dateText}>07 Jun 2025</Text>

        {/* Leaderboard Cards */}
        {data.map(item => (
          <View
            key={item.id}
            style={[
              styles(wp, hp).card,
              item.rank === 1 && styles(wp, hp).firstRankBorder,
            ]}
          >
            {/* Header with Trophy, Rank & Country */}
            <View style={styles(wp, hp).cardHeader}>
              <View style={styles(wp, hp).headerLeft}>
                <Image
                  source={require('../../../assets/icon/trophy.png')}
                  style={styles(wp, hp).trophyIcon}
                />
                <Text style={styles(wp, hp).rankText}>Rank #{item.rank}</Text>
              </View>
            </View>

            {/* Name */}
            <View style={styles(wp, hp).headerRight}>
              <Text style={styles(wp, hp).nameText}>{item.name}</Text>
              <View style={styles(wp, hp).headerRightIcon}>
                <Text style={styles(wp, hp).countryText}>{item.country}</Text>
                <Image
                  source={require('../../../assets/icon/canada.png')}
                  style={styles(wp, hp).flagIcon}
                />
              </View>
            </View>

    
            <View style={styles(wp, hp).statsRow}>
              <Text style={styles(wp, hp).statText}>
                Currency: {item.currency}
              </Text>
              <Text style={styles(wp, hp).statText}>Profit: {item.profit}</Text>
              <Text style={styles(wp, hp).statText}>Equity: {item.equity}</Text>
            </View>

            <View style={styles(wp, hp).statsRow2}>
              <Text style={styles(wp, hp).statText}>
                Account: {item.account}
              </Text>
              <Text style={styles(wp, hp).statText}>Gain %: {item.gain}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default LeaderboardScreen;
const styles = (
  wp: {
    (widthPercent: number | string): number;

    (arg0: number): any;
  },
  hp: {
    (heightPercent: number | string): number;

    (arg0: number): any;
  },
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    filterContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: wp(1.5),
      paddingVertical: hp(2),
    },
    filterButton: {
      paddingHorizontal: wp(8),
      paddingVertical: hp(1),
      backgroundColor: '#f1f1f1',
      borderRadius: wp(5),
      margin: wp(1.5),
    },
    filterButtonActive: {
      backgroundColor: '#68FFD0',
    },
    filterText: {
      fontSize: wp(3.5),
      color: '#333',
    },
    filterTextActive: {
      fontWeight: 'bold',
      color: '#000',
    },
    dateText: {
      fontSize: wp(4),
      fontWeight: '600',
      marginLeft: wp(5),
      marginVertical: hp(1),
    },
    card: {
      borderWidth: 1,
      borderColor: '#D7D7D7',
      borderRadius: wp(3),
      padding: wp(4),
      marginHorizontal: wp(5),
      marginVertical: hp(1.5),
      backgroundColor: '#fff',
    },
    firstRankBorder: {
      borderColor: '#E0B72E',
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
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: '#D7D7D7',
      paddingBottom: 10,
    },
    headerRightIcon: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    countryText: {
      fontSize: wp(3.7),
      color: '#000',
      marginRight: wp(1),
    },
    flagIcon: {
      width: wp(5),
      height: wp(5),
      resizeMode: 'contain',
    },
    nameText: {
      fontSize: wp(4),
      fontWeight: '600',
      color: '#000',
      marginVertical: hp(1),
    },
    statsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: hp(1.8),
    },
    statsRow2: {
      flexDirection: 'row',
      gap: 15,
 
    },
    statText: {
      fontSize: wp(3.5),
      color: '#000',
      fontWeight: '500',
    },
    statTextvalue: {
      fontSize: wp(3),
      color: '#000',

    },
  });
