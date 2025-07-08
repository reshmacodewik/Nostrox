/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
type PortfolioItem = (typeof portfolioData)[0];

type RootStackParamList = {
  HomeScreen: undefined;
  TradingScreen: { item: PortfolioItem };
  // add other screens as needed
};

const portfolioData = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$1,270.10',
    change: '+2.76%',
    changeColor: '#00C566',
    icon: require('../../../assets/icon/bitcoin.png'),
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$270.10',
    change: '-1.02%',
    changeColor: '#FF3D00',
    icon: require('../../../assets/icon/eth.png'),
  },
  {
    name: 'Cosmos',
    symbol: 'ATOM',
    price: '$961.75',
    change: '+2.05%',
    changeColor: '#00C566',
    icon: require('../../../assets/icon/cosmos.png'),
  },
  {
    name: 'Cronos',
    symbol: 'CRO',
    price: '$190.23',
    change: '+2.38%',
    changeColor: '#00C566',
    icon: require('../../../assets/icon/cro.png'),
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    price: '$68.05',
    change: '-1.24%',
    changeColor: '#FF3D00',
    icon: require('../../../assets/icon/ado.png'),
  },
];

const HomeScreen: React.FC = () => {
  const { wp, hp } = useResponsive();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleCardPress = (item: (typeof portfolioData)[0]) => {
    navigation.navigate('TradingScreen', { item });
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Sticky Header */}
      <View style={styles.header}>
        <Image
          source={require('../../../assets/image/logo.png')}
          style={[
            styles.logo,
            { width: wp(38), height: wp(18), marginTop: wp(-3.5) },
          ]}
        />
        <Image
          source={require('../../../assets/icon/profile.png')}
          style={[
            styles.avatar,
            { width: wp(10), height: wp(10), marginTop: wp(-3.5) },
          ]}
        />
      </View>

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: wp(4),
          paddingBottom: hp(4),
        }}
      >
        <Text style={styles.subtitle}>Your Dashboard</Text>

        {/* Card */}
        <ImageBackground
          source={require('../../../assets/image/card-bg.png')}
          resizeMode="cover"
          style={[
            styles.card,
            { padding: wp(5), borderRadius: wp(4), overflow: 'hidden' },
          ]}
          imageStyle={{ borderRadius: wp(4) }}
        >
          {/* Top Row */}
          <View style={styles.row}>
            <View style={styles.bottom}>
              <Text style={styles.label}>Portfolio Balance</Text>
              <Text style={styles.value}>
                14,054.<Text style={styles.small}>51</Text>
              </Text>
            </View>
            <View>
              <Text style={styles.label}>Transfer</Text>
              <Text style={styles.value}>$890.56</Text>
            </View>
          </View>

          {/* Bottom Row */}
          <View style={[styles.row, { marginTop: hp(2) }]}>
            <View>
              <Text style={styles.label}>Net Profit</Text>
              <Text style={styles.value}>9.077%</Text>
            </View>
            <View>
              <Text style={styles.label}>Unrealized P&L</Text>
              <Text style={styles.value}>
                14,054.<Text style={styles.small}>51</Text>
              </Text>
            </View>
          </View>
        </ImageBackground>

        {/* Portfolio Title */}
        <View style={[styles.row, { marginTop: hp(3), marginBottom: hp(1) }]}>
          <Text style={styles.portfolioTitle}>Portfolio</Text>
          <Text style={styles.viewMore}>View More</Text>
        </View>

        {/* Portfolio Items */}
        {portfolioData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.portfolioItem}
            activeOpacity={0.7}
            onPress={() => handleCardPress(item)}
          >
            <View style={styles.row}>
              <Image source={item.icon} style={styles.coinIcon} />
              <View style={{ marginLeft: wp(3) }}>
                <Text style={styles.coinName}>{item.name}</Text>
                <Text style={styles.coinSymbol}>{item.symbol}</Text>
              </View>
            </View>

            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.coinPrice}>{item.price}</Text>
              <Text style={[styles.coinChange, { color: item.changeColor }]}>
                {item.change}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
