import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(3.5),
    backgroundColor: '#fff',
  },
  headerWrapper: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 16,
    marginTop: hp(3),
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  clipboardIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  scrollContent: {
    paddingHorizontal: 1,
    paddingBottom: 30,
  },

  heading: {
    fontSize: wp(6),
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    marginBottom: hp(0),
    textAlign: 'center',
  },
  tabContainer: {
    width: wp(92),
    marginLeft: hp(-1.5),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: hp(0),
    backgroundColor: '#f1f1f1',
    borderRadius: wp(2),
  },
  tab: {
    paddingVertical: hp(0.7),
    paddingHorizontal: wp(7),
    borderRadius: wp(2),
  },
  tabText: {
    fontSize: wp(3.5),
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  activeTab: {
    backgroundColor: '#fff',
    elevation: 2,
  },
  activeTabText: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
  chartCard: {
    backgroundColor: '#fff',
    borderRadius: wp(4), // was 16
    padding: wp(4), // was 16
    marginTop: hp(2.5), // was 20
    elevation: 4,
    marginBottom: hp(2.5), // was 20
  },

  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2), // was 16
    borderWidth: 1,
    borderRadius: wp(3), // already responsive
    padding: wp(1.7), // already responsive
    borderColor: '#E9E9E9',
    backgroundColor: '#F9F9FAE3',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinIcon: {
    width: wp(10),
    height: wp(10),
    marginRight: wp(2.5),
  },

  coinName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },

  coinSymbol: {
    fontSize: 12,
    color: '#888',
  },

  coinPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#202020',
  },

  coinChange: {
    fontSize: 12,
    color: '#12B76A',
  },

  chartWrapper: {
    height: 250,
  },

  chartToolbar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 16,
  },

  toolbarIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  popularTrade: {
    fontSize: wp(4.5),
    fontFamily: 'Poppins-SemiBold',
    marginBottom: hp(1.5),
    color: '#000',
  },
  tradePairRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 'auto',
  },
  tradePair: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
    backgroundColor: '#fff',
    borderRadius: wp(2),
    marginBottom: hp(1),
    elevation: 3,
    marginHorizontal: hp(0.6),
  },
  tradePairText: {
    fontSize: wp(3.5),
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },

  activePair: {
    backgroundColor: '#00C566',
  },
  activePairText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },
  tableContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  headText: {
    margin: 6,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    margin: 6,
    textAlign: 'center',
  },

  orderBookWrapper: {
    marginTop: 15,
    borderRadius: 0,
    padding: 0,
  },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 8,
  },

  sellAmount: {
    backgroundColor: '#f8d7da', // light red
    color: '#c0392b',
    fontFamily:"Poppins-Medium"
  },
  buyAmount: {
    backgroundColor: '#d4edda', // light green
    color: '#27ae60',
  },
  timeCell: {
    color: '#767676', // blue for time
  },

  headerCell: {
    fontWeight: '600',
    color: '#000',
    fontSize: 14,
  },
  tableBody: {
    backgroundColor: '#fff',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  cell: {
    fontSize: 13,
    color: '#333',
  },
  priceSell: {
    color: '#e74c3c', // Red for sell
  },
  priceBuy: {
    color: '#2ecc71', // Green for buy
  },
  amountCell: {
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 4,
    overflow: 'hidden',
  },
  amountSell: {
    // backgroundColor: '#f8d7da', // Light red background
    color: '#000',
  },
  amountBuy: {
    // backgroundColor: '#d4edda', // Light green background
    color: '#000',
  },
 buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
    sellButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#27ae60',
    backgroundColor: '#fff',
    paddingVertical: 12,
    marginRight: 8,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButton: {
    flex: 1,
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    marginLeft: 8,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sellButtonText: {
    color: '#27ae60',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 6,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginRight: 6,
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  iconWhite: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    tintColor: '#fff', // make sure buy icon stays white
  },
});
export default styles;
function wp(percentage: number): number {
  const { width } = Dimensions.get('window');
  return (width * percentage) / 100;
}
function hp(percentage: number): number {
  const { height } = Dimensions.get('window');
  return (height * percentage) / 100;
}
