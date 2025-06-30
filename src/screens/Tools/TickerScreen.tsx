import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useResponsive } from 'react-native-responsive-hook';
import Header from '../../components/Header';
import Modal from 'react-native-modal';
import { BlurView } from '@react-native-community/blur';

const categories = ['Forex', 'Indices', 'Crypto', 'Commodities', 'Custom'];
const mockData = {
  Symbol: 'EURUSD',
  Bid: '1,14182',
  Ask: '1,14182',
  Spread: '0.00002',
  Commissions: '3.0',
};

const TickerScreen: React.FC = () => {
  const navigation = useNavigation();
  const { wp, hp } = useResponsive();
  const styles = getStyles(wp, hp);
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState('Forex');
  const [isModalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredSymbols, setFilteredSymbols] = useState<string[]>([]);

  const allSymbols = ['AAPL', 'ADAUSD', 'AIRF', 'AMZN', 'AUDCAD', 'AUDCHF'];

  const openModal = () => {
    setSearch('');
    setFilteredSymbols(allSymbols);
    setModalVisible(!isModalVisible);
  };

  const filterSymbols = (text: string) => {
    setSearch(text);
    setFilteredSymbols(
      allSymbols.filter(sym => sym.toLowerCase().includes(text.toLowerCase())),
    );
  };

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <Header
        title="Ticker"
        customIcon={require('../../../assets/icon/backarrow.png')}
        onIconPress={() => console.log('Back')}
      />

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {categories.map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
            onPress={() => handleTabPress(tab)}
          >
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal */}
      <Modal
        isVisible={isModalVisible}
        backdropOpacity={1}
        animationIn="fadeIn"
        animationOut="fadeOut"
        customBackdrop={
          <View style={StyleSheet.absoluteFill}>
            {Platform.OS === 'ios' ? (
              <BlurView
                style={StyleSheet.absoluteFill}
                blurType="light"
                blurAmount={10}
              />
            ) : (
              <View style={{ flex: 1, backgroundColor: '#00000066' }} />
            )}
          </View>
        }
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.modalCard}>
          <Text style={styles.label}>Choose Symbol</Text>
          <TextInput
            value={search}
            onChangeText={filterSymbols}
            placeholder="Search"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
          {filteredSymbols.map((symbol, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.symbolItem}
              onPress={() => {
                setSelectedSymbol(symbol); // Set selected symbol
                setModalVisible(false); // Close modal
              }}
            >
              <Text style={styles.symbolText}>{symbol}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>

      {/* Tab content */}
      {activeTab === 'Custom' ? (
        <View style={styles.customCardContainer}>
          <TouchableOpacity style={styles.customCard} onPress={openModal}>
            <Text style={styles.label}>Choose Symbol</Text>
            <Text style={styles.addIcon}>＋</Text>
          </TouchableOpacity>

          {selectedSymbol && (
            <View style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.title}>Symbol</Text>
                <Text style={styles.value}>{selectedSymbol}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Bid Price</Text>
                <Text style={[styles.value, { color: 'green' }]}>
                  1.14182 ▲
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Ask Price</Text>
                <Text style={[styles.value, { color: 'green' }]}>
                  1.14182 ▲
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Spread</Text>
                <Text style={[styles.value, { color: 'red' }]}>0.00002 ▼</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Commissions</Text>
                <Text style={styles.value}>3.0</Text>
              </View>
              {/* <TouchableOpacity
                style={styles.removeButton}
                onPress={() => setSelectedSymbol(null)}
              >
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity> */}
            </View>
          )}
        </View>
      ) : (
        <FlatList
          data={[mockData, mockData]}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={styles.cardList}
          renderItem={() => (
            <View style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.title}>Symbol</Text>
                <Text style={styles.value}>EURUSD</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Bid Price</Text>
                <Text style={[styles.value, { color: 'green' }]}>
                  1,14182 ▲
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Ask Price</Text>
                <Text style={[styles.value, { color: 'green' }]}>
                  1,14182 ▲
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Spread</Text>
                <Text style={[styles.value, { color: 'red' }]}>0.00002 ▼</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>Commissions</Text>
                <Text style={styles.value}>3.0</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default TickerScreen;
const getStyles = (
  wp: { (widthPercent: number | string): number; (arg0: number): any },
  hp: { (heightPercent: number | string): number; (arg0: number): number },
) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    tabContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: wp(4),
      margin: wp(4),
    },
    tabButton: {
      paddingVertical: hp(1.2),
      paddingHorizontal: wp(13),
      borderRadius: wp(2),
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: -hp(1),
    },
    activeTab: {
      backgroundColor: '#74FFD3',
      borderColor: '#74FFD3',
    },
    tabText: {
      fontSize: wp(3.8),
      fontWeight: '500',
    },
    customCardContainer: {
      paddingHorizontal: wp(4),
      marginTop: hp(1),
    },
    customCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: wp(4),
      borderRadius: wp(3),
      borderWidth: 1,
      borderColor: '#eee',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 3,
    },
    label: {
      fontSize: wp(4),
      fontWeight: '500',
      color: '#000',
    },
    addIcon: {
      fontSize: wp(6),
      color: '#000',
    },
    cardList: {
      paddingHorizontal: wp(4),
      paddingTop: hp(1),
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      padding: wp(4),
      marginVertical: hp(1),
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      elevation: 3,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: hp(0.8),
    },
    title: {
      fontSize: wp(3.8),
      color: '#333',
    },
    value: {
      fontSize: wp(3.8),
      fontWeight: '600',
      color: '#000',
    },
    modalCard: {
      backgroundColor: '#fff',
      borderRadius: wp(4),
      padding: wp(5),
      maxHeight: hp(70),
      borderWidth: wp(0.5),
      borderColor: '#fff',
    },
    searchInput: {
      borderWidth: wp(0.3),
      borderColor: '#ddd',
      borderRadius: wp(3),
      paddingVertical: hp(2),
      paddingHorizontal: wp(4),
      marginVertical: hp(1),
      fontSize: wp(4),
      color: '#000',
    },
    symbolItem: {
      paddingVertical: hp(1.3),
    },
    symbolText: {
      fontSize: wp(4.2),
      fontWeight: '700',
      color: '#000',
    },
  });
