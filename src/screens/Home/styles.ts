import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: wp(4.5),
    paddingTop: hp(5),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
     paddingHorizontal: wp(4.5),
     paddingTop: hp(3),
  },
  title: {
    fontSize: wp(6),
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
  highlight: {
    color: '#00C566',
  },
  logo:{
    resizeMode:'contain'
},
  avatar: {
    borderRadius: wp(5),
  },
  subtitle: {
    fontSize: wp(5),
    fontFamily: 'Poppins-SemiBold',
    marginTop: hp(2.5),
    marginBottom: hp(2),
    color: '#000000',
  },
  card: {
    width: 'auto',
    height: hp(25),
     paddingRight: wp(11.8),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: wp(3.5),
    fontFamily: 'Poppins-Regular',
    color: '#000',
    marginBottom: hp(0.5),
  },
  value: {
    fontSize: wp(6),
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
  },
  bottom: {},
  small: {
    fontSize: wp(3),
    fontFamily: 'Poppins-Regular',
  },
  portfolioTitle: {
    fontSize: wp(4.5),
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    marginTop: hp(0),
  },
  viewMore: {
    left: wp(0),
    marginTop: hp(0), // Adjust based on layout
    fontSize: wp(4),
    fontFamily: 'Poppins-Regular',
    color: '#1B6BC0',
  },
  portfolioItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    borderRadius: wp(2),
    backgroundColor: '#fff',
    marginTop: hp(1),
    borderWidth:0,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  coinIcon: {
    width: wp(10),
    height: wp(10),
    resizeMode: 'contain',
  },
  coinName: {
    fontSize: wp(4),
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  coinSymbol: {
    fontSize: wp(3.2),
    fontFamily: 'Poppins-Regular',
    color: '#767676',
    fontWeight: '400',
  },
  coinPrice: {
    fontSize: wp(3.8),
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  coinChange: {
    fontSize: wp(3.4),
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
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
