import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import CandleChart from '../../../components/components/CandleChart';
import styles from './style';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Table, Row, Rows } from 'react-native-table-component';

const TradingScreen = () => {
  const timeFilters = ['1Hour', '1Day', '1Month', '1Year'];
  const tradePairs = ['BTC/USD', 'ETH/USD', 'LTC/USD', 'XRP/USD', 'EOS/USD'];


  const orderBookData = [
    { price: '30,113.84', amount: '1,76676', time: '09:41:13', type: 'sell' },
    { price: '30,114.84', amount: '9,29631', time: '09:41:13', type: 'sell' },
    { price: '30,112.16', amount: '2,18599', time: '09:41:10', type: 'buy' },
    { price: '30,113.81', amount: '6,33200', time: '09:41:07', type: 'buy' },
    { price: '30,114.81', amount: '3,00018', time: '09:41:07', type: 'sell' },
    { price: '30,113.45', amount: '4,49994', time: '09:41:01', type: 'buy' },
    { price: '30,113.89', amount: '1,16627', time: '09:40:58', type: 'sell' },
    { price: '30,113.66', amount: '1,93398', time: '09:40:56', type: 'buy' },
    { price: '30,113.80', amount: '9,43359', time: '09:40:34', type: 'buy' },
    { price: '30,113.88', amount: '1,18708', time: '09:40:23', type: 'sell' },
  ];
  return (
    <View style={styles.container}>
      {/* Sticky Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.headerRow}>
          <TouchableOpacity>
            <SimpleLineIcons name="arrow-left" size={25} />
          </TouchableOpacity>
          <Text style={styles.heading}>Trading</Text>
          <TouchableOpacity>
            <Image
              source={require('../../../../assets/icon/clipboard.png')}
              style={styles.clipboardIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Time Filters */}
        <View style={styles.tabContainer}>
          {timeFilters.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.tab, index === 0 && styles.activeTab]}
            >
              <Text
                style={[styles.tabText, index === 0 && styles.activeTabText]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Chart Card */}
        <View style={styles.chartCard}>
          {/* Header Section */}
          <View style={styles.chartHeader}>
            <View style={styles.row}>
              <Image
                source={require('../../../../assets/icon/bitcoin.png')}
                style={styles.coinIcon}
              />
              <View>
                <Text style={styles.coinName}>Bitcoin</Text>
                <Text style={styles.coinSymbol}>BTC</Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.coinPrice}>$30,113.80</Text>
              <Text style={styles.coinChange}>+12.13%</Text>
            </View>
          </View>

          {/* Chart */}
          <View style={styles.chartWrapper}>
            <CandleChart />
          </View>
        </View>

        {/* Popular Trades */}
        <Text style={styles.popularTrade}>Popular Trade</Text>
        <View style={styles.tradePairRow}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.tradePairRow}
          >
            {tradePairs.map((pair, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.tradePair, index === 0 && styles.activePair]}
              >
                <Text
                  style={[
                    styles.tradePairText,
                    index === 0 && styles.activePairText,
                  ]}
                >
                  {pair}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
       <View style={styles.tableHeader}>
        <Text style={[styles.headerCell, { flex: 2 }]}>Price</Text>
        <Text style={[styles.headerCell, { flex: 2 }]}>Amount</Text>
        <Text style={[styles.headerCell, { flex: 1 }]}>Time</Text>
      </View>

      {/* Table Rows */}
      <ScrollView style={styles.tableBody}>
        {orderBookData.map((item, index) => (
          <View style={styles.tableRow} key={index}>
            <Text
              style={[
                styles.cell,
                { flex: 2 },
                item.type === 'sell' ? styles.priceSell : styles.priceBuy,
              ]}
            >
              {item.price}
            </Text>
            <Text
              style={[
                styles.cell,
                styles.amountCell,
                { flex: 2 },
                item.type === 'sell' ? styles.amountSell : styles.amountBuy,
              ]}
            >
              {item.amount}
            </Text>
            <Text style={[styles.cell, styles.timeCell, { flex: 1 }]}>
              {item.time}
            </Text>
          </View>
        ))}
      </ScrollView>
<View style={styles.buttoncontainer}>
      {/* Buy and Sell Buttons */}
         <TouchableOpacity style={styles.sellButton}>
        <Image
          source={require('../../../../assets/icon/recieve.png')} // add your sell arrow image here
          style={styles.icon}
        />
        <Text style={styles.sellButtonText}>SELL</Text>
      </TouchableOpacity>

      {/* Buy Button */}
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>BUY</Text>
        <Image
          source={require('../../../../assets/icon/send.png')} // add your buy arrow image here
          style={styles.iconWhite}
        />
      </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

export default TradingScreen;
