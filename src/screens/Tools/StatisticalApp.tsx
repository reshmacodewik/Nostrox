import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Header from '../../components/Header';

const StatisticalApp = () => {
  const [activeTab, setActiveTab] = useState('Market');
  const [activeChart, setActiveChart] = useState('Table');

  return (
    <View style={styles.container}>
      <Header
        title="Traders Analysis"
        customIcon={require('../../../assets/icon/backarrow.png')}
        onIconPress={() => console.log('Back pressed')}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.innercontainer}>
          {/* Tabs */}
          <View style={styles.tabContainer}>
            {['Market', 'Symbol', 'Tutorial'].map(tab => (
              <TouchableOpacity
                key={tab}
                style={[styles.tabBtn, activeTab === tab && styles.activeTab]}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab} Analysis</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Weekly Stats */}
          <Text style={styles.weeklyTitle}>Weekly Stats</Text>
          <Text style={styles.subText}>Most popular symbols</Text>
          {renderChartSwitcher(activeChart, setActiveChart)}
          {renderContent(activeChart)}

          {/* Trending Symbols */}
          <Text style={styles.trendingTitle}>Trending symbols</Text>
          {renderChartSwitcher(activeChart, setActiveChart)}
          {renderContent(activeChart)}

          {/* Highest Symbols */}
          <View style={styles.subSectionTitleContainer}>
            <Text style={styles.HighestTitle}>Highest symbols</Text>
          </View>
          {renderChartSwitcher(activeChart, setActiveChart)}
          {renderContent(activeChart)}

        </View>
      </ScrollView>
    </View>
  );
};

const renderChartSwitcher = (activeChart, setActiveChart) => (
  <View style={styles.switchContainer}>
    {['Table', 'Bar'].map(type => (
      <TouchableOpacity
        key={type}
        style={[styles.switchBtn, activeChart === type && styles.activeSwitch]}
        onPress={() => setActiveChart(type)}
      >
        <Text style={[styles.switchText, activeChart === type && styles.activeSwitchText]}>{type === 'Bar' ? 'Bar Chart' : 'Table'}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const renderContent = (activeChart) => (
  activeChart === 'Table' ? (
    <View style={styles.tableCard}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Symbol</Text>
        <Text style={styles.tableHeaderText}>Popularity</Text>
      </View>
      {data.map((item, index) => (
        <View key={index} style={[styles.tableRow, index === data.length - 1 && { borderBottomWidth: 0 }]}>
          <Text style={styles.symbolText}>{item.symbol}</Text>
          <Text style={styles.popularityText}>{item.popularity}</Text>
        </View>
      ))}
    </View>
  ) : (
    <BarChart
      data={{
        labels: data.map(item => item.symbol),
        datasets: [{ data: data.map(item => parseFloat(item.popularity)) }]
      }}
      width={width - wp(4)}
      height={220}
      fromZero
      yAxisSuffix="%"
      chartConfig={{
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(34, 202, 84, ${opacity})`,
        labelColor: () => "#333",
      }}
      style={{ borderRadius: 16, marginBottom: hp(3) }}
    />
  )
);

const data = [
  { symbol: 'XAUUSD', popularity: '48.57' },
  { symbol: 'EURUSD', popularity: '11.0' },
  { symbol: 'US100.cash', popularity: '9.09' },
  { symbol: 'US30.cash', popularity: '5.31' },
  { symbol: 'BTCUSD', popularity: '4.13' },
];

export default StatisticalApp;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { paddingBottom: hp(5) },
  innercontainer: { marginHorizontal: hp(2), marginTop: hp(0.5) },
  tabContainer: { flexDirection: 'row', marginTop: hp(2) },
  tabBtn: { backgroundColor: '#eee', paddingVertical: hp(1), paddingHorizontal: wp(3.8), borderRadius: hp(5), marginRight: wp(2) },
  activeTab: { backgroundColor: '#8affd1' },
  tabText: { fontSize: hp(1.6), color: '#333' },
  activeTabText: { fontWeight: 'bold', color: '#000' },
  weeklyTitle: { fontSize: hp(2), fontWeight: 'bold', marginTop: hp(3) },
  trendingTitle: { fontSize: hp(1.5), fontWeight: 'bold', marginTop: hp(0) },
  HighestTitle: { fontSize: hp(1.5), fontWeight: 'bold', marginTop: hp(3) },
  switchContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: hp(1.5), marginBottom: hp(2) },
  switchBtn: { backgroundColor: '#eee', paddingVertical: hp(1), paddingHorizontal: wp(10), borderRadius: hp(5), marginRight: wp(3) },
  activeSwitch: { backgroundColor: '#8affd1' },
  switchText: { fontSize: hp(1.8), color: '#333' },
  activeSwitchText: { fontWeight: 'bold', color: '#000' },
  tableCard: { backgroundColor: '#fff', padding: hp(2), paddingVertical: hp(4), borderRadius: hp(1.5), shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2, marginBottom: hp(3) },
  tableHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: hp(1), borderBottomWidth: 1, borderBottomColor: '#ddd', marginBottom: hp(1) },
  tableHeaderText: { fontWeight: 'bold', fontSize: hp(1.8) },
  tableRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: hp(1), borderBottomWidth: 1, borderBottomColor: '#ddd' },
  symbolText: { fontSize: hp(1.7), color: '#333' },
  subText: { color: '#555', marginBottom: hp(0), marginTop: hp(1.5), fontSize: hp(1.4), fontWeight: '500' },
  popularityText: { fontWeight: 'bold', fontSize: hp(1.7) },
  subSectionTitleContainer: { marginTop: hp(3) },
});

function wp(percentage: number) { return (width * percentage) / 100; }
function hp(percentage: number) { return (height * percentage) / 100; }