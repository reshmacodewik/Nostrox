import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Switch,
  Image,
  SafeAreaView,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation } from '@react-navigation/native';

type TabName =
  | 'Challenge'
  | 'Verification'
  | 'Nostrox Account'
  | 'Free Trial'
  | 'Modifications Requests';

const tabs: TabName[] = [
  'Challenge',
  'Verification',
  'Nostrox Account',
  'Free Trial',
  'Modifications Requests',
];

type AccountData = {
  id: string;
  login: string;
  balance: string;
  equity: string;
  end: string;
  result?: string;
};

const dummyData: Record<TabName, AccountData[]> = {
  Challenge: [
    { id: '1', login: '474848955', balance: '$225,500.00', equity: '$225,500.00', end: '07 Feb 2021' },
    { id: '2', login: '123456789', balance: '$125,000.00', equity: '$125,000.00', end: '10 Mar 2021' },
    { id: '3', login: '998877665', balance: '$300,000.00', equity: '$300,000.00', end: '05 Apr 2021' },
  ],
  Verification: [
    { id: '3', login: '998877665', balance: '$300,000.00', equity: '$300,000.00', end: '05 Apr 2021' },
    { id: '4', login: '474848955', balance: '$225,500.00', equity: '$225,500.00', end: '07 Feb 2021' },
    { id: '5', login: '474848955', balance: '$225,500.00', equity: '$225,500.00', end: '07 Feb 2021' },
  ],
  'Nostrox Account': [
    { id: '3', login: '998877665', balance: '$300,000.00', equity: '$300,000.00', end: '05 Apr 2021' },
    { id: '4', login: '474848955', balance: '$225,500.00', equity: '$225,500.00', end: '07 Feb 2021' },
    { id: '5', login: '474848955', balance: '$225,500.00', equity: '$225,500.00', end: '07 Feb 2021' },
  ],
  'Free Trial': [
    { id: '3', login: '998877665', balance: '$300,000.00', equity: '$300,000.00', end: '05 Apr 2021' },
    { id: '4', login: '474848955', balance: '$225,500.00', equity: '$225,500.00', end: '07 Feb 2021' },
    { id: '5', login: '474848955', balance: '$225,500.00', equity: '$225,500.00', end: '07 Feb 2021' },
  ],
  'Modifications Requests': [],
};

const HomeScreen: React.FC = () => {
  const { wp, hp } = useResponsive();
  const [activeTab, setActiveTab] = useState<TabName>('Challenge');
  const [showOnlyVisible, setShowOnlyVisible] = useState<boolean>(false);
  const navigation = useNavigation<any>();

  const styles = getStyles(wp, hp);

  const renderCard = ({ item }: { item: any }) => {
    const result = item.result || 'Passed';

    return (
      <View style={styles.card}>
        <View style={styles.cardTopRow}>
          <View>
            <Text style={styles.loginLabel}>Login</Text>
            <Text style={styles.loginValue}>{item.login}</Text>
            <Text>
              Result:
              <Text
                style={{
                  color:
                    result === 'Passed'
                      ? 'green'
                      : result === 'Ongoing'
                      ? 'blue'
                      : 'black',
                }}
              >
                {' '}
                {result}
              </Text>
            </Text>
          </View>
          <Image
            source={require('../../assets/icon/stock.png')}
            style={styles.stockIcon}
          />
        </View>
        <View style={styles.cardRow}>
          <View>
            <Text>Balance</Text>
            <Text style={styles.boldText}>{item.balance}</Text>
          </View>
          <View>
            <Text>Equity</Text>
            <Text style={styles.boldText}>{item.equity}</Text>
          </View>
          <View>
            <Text>End</Text>
            <Text style={styles.boldText}>{item.end}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Accounts</Text>
          <TouchableOpacity onPress={() => navigation.navigate('NotificationsScreen')}>
            <Image source={require('../../assets/icon/bell.png')} style={styles.profileIcon} />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabScroll}
        >
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                activeTab === tab && styles.activeTab,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[
                styles.tabText,
                activeTab === tab && { color: '#000' },
              ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.toggleRow}>
        <Text style={styles.toggleText}>Show only visible</Text>
        <Switch value={showOnlyVisible} onValueChange={setShowOnlyVisible} />
      </View>

      <FlatList
        data={dummyData[activeTab]}
        keyExtractor={item => item.id}
        renderItem={renderCard}
        contentContainerStyle={styles.listContainer}
      />

      {activeTab === 'Challenge' && (
        <TouchableOpacity style={styles.challengeBtn}>
          <Text style={styles.challengeText}>Apply for on Nostrox Challenge</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const getStyles = (wp: (val: number) => number, hp: (val: number) => number) =>
  StyleSheet.create({
    header: {
      backgroundColor: '#A7FDE0',
      paddingHorizontal: wp(4),
      paddingTop: hp(2),
      borderBottomWidth: 1,
      borderColor: '#ddd',
      height: hp(15),
    },
    headerTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: hp(1),
    },
    headerTitle: {
      fontSize: wp(5),
      fontWeight: 'bold',
    },
    profileIcon: {
      width: wp(8),
      height: wp(8),
      borderRadius: wp(4),
    },
    tabScroll: {
      marginTop: hp(1),
    },
    tabButton: {
      paddingVertical: hp(0.5),
      paddingHorizontal: wp(4),
      marginHorizontal: wp(1),
      borderRadius: wp(10),
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeTab: {
      backgroundColor: '#fff',
      borderRadius: wp(10),
      paddingBottom: hp(0.8),
      marginTop: hp(1.5),
      marginBottom: hp(1.5),
    },
    tabText: {
      color: '#555',
      fontSize: wp(3.5),
    },
    toggleRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin: wp(4),
    },
    toggleText: {
      marginRight: wp(2),
      fontSize: wp(3.5),
    },
    card: {
      backgroundColor: '#fff',
      margin: wp(3),
      padding: wp(4),
      borderRadius: wp(2),
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    cardTopRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    loginLabel: {
      fontWeight: 'bold',
      fontSize: wp(3.5),
    },
    loginValue: {
      fontSize: wp(4),
      marginBottom: hp(0.5),
    },
    stockIcon: {
      width: wp(10),
      height: wp(10),
      resizeMode: 'contain',
    },
    cardRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: hp(3),
    },
    boldText: {
      fontWeight: 'bold',
      fontSize: wp(4),
    },
    listContainer: {
      paddingBottom: hp(10),
    },
    challengeBtn: {
      backgroundColor: '#74FACD',
      padding: wp(4),
      marginHorizontal: wp(12),
      borderRadius: wp(6),
      alignItems: 'center',
      marginBottom: hp(2.5),
    },
    challengeText: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: wp(4),
    },
  });
