import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
 
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import Header from '../../components/Header';

const deals = [
  {
    id: '1',
    partner: 'Partner',
    offer: '10%',
    programme: 'abcd',
    service: 'abcd',
    image: require('../../../assets/icon/avatar.png'),
  },
  {
    id: '2',
    partner: 'Partner',
    offer: '10%',
    programme: 'abcd',
    service: 'abcd',
    image: require('../../../assets/icon/avatar.png'),
  },
];

const PartnershipDealsScreen = () => {
  const { wp, hp } = useResponsive();

  return (
    <View style={styles.container}>
      <Header
        title="Partnership Deals"
        customIcon={require('../../../assets/icon/backarrow.png')}
        onIconPress={() => console.log('Back pressed')}
      />
      <View style={styles.innerContainer}>
        <Text style={[styles.description, { fontSize: wp(3.8) }]}>
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has been the industry's standard dummy text.
          {'\n\n'}
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has been the industry's standard dummy text.
          {'\n\n'}
        </Text>

        <FlatList
          data={deals}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: hp(5) }}
          renderItem={({ item }) => (
            <View style={[styles.card, { borderRadius: wp(3), paddingBottom: hp(2) }]}>
              <View style={styles.partnerRow}>
                <View style={[styles.avatarContainer, { borderRadius: wp(10) }]}>
                  <Image source={item.image} style={[styles.avatar, { borderRadius: wp(7.5) }]} />
                </View>
                <Text style={[styles.partnerName, { fontSize: wp(4.2) }]}>{item.partner}</Text>
              </View>

              <View style={styles.row}>
                <Text style={[styles.label, { fontSize: wp(3.6) }]}>Offer</Text>
                <Text style={[styles.value, { fontSize: wp(3.6) }]}>{item.offer}</Text>
              </View>

              <View style={styles.row}>
                <Text style={[styles.label, { fontSize: wp(3.6) }]}>Programme</Text>
                <Text style={[styles.value, { fontSize: wp(3.6) }]}>{item.programme}</Text>
              </View>

              <View style={styles.row}>
                <Text style={[styles.label, { fontSize: wp(3.6) }]}>Service</Text>
                <Text style={[styles.value, { fontSize: wp(3.6) }]}>{item.service}</Text>
              </View>

              <TouchableOpacity style={[styles.redeemBtn, { paddingVertical: hp(1.5), marginTop: hp(2) }]}>
                <Text style={[styles.redeemText, { fontSize: wp(4) }]}>Redeem</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default PartnershipDealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    margin: 20,
  },
  description: {
    color: '#333',
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#00AEEF',
    marginBottom: 20,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  partnerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 15,
  },
  avatarContainer: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  partnerName: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#D7D7D7',
  },
  label: {
    fontWeight: '500',
  },
  value: {
    fontWeight: '500',
  },
  redeemBtn: {
    backgroundColor: '#68FFD0',
    marginHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
  },
  redeemText: {
    fontWeight: 'bold',
  },
});


// function wp(percentage: number): number {
//   const { width } = Dimensions.get('window');
//   return (width * percentage) / 100;
// }
// function hp(percentage: number): number {
//   const { height } = Dimensions.get('window');
//   return (height * percentage) / 100;
// }
