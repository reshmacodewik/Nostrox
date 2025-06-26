import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';

const tickets = [
  {
    id: 'FDC-DRTY-098',
    subject: 'Nostrox',
    created: '09 June 2025 | 10:30PM',
    changed: '09 June 2025 | 10:30PM',
    status: 'New',
  },
    {
    id: 'FDC-DRTY-098',
    subject: 'Nostrox',
    created: '09 June 2025 | 10:30PM',
    changed: '09 June 2025 | 10:30PM',
    status: 'New',
  },
    {
    id: 'FDC-DRTY-098',
    subject: 'Nostrox',
    created: '09 June 2025 | 10:30PM',
    changed: '09 June 2025 | 10:30PM',
    status: 'New',
  },
   
  // Add more dummy tickets if needed
];

const CustomerSupportScreen = () => {
  const { wp, hp } = useResponsive();
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Header
        title="Customer Support"
        customIcon={require('../../../../assets/icon/backarrow.png')}
        onIconPress={() => console.log('Settings pressed')}
      />
      <View style={styles.innercontainer}>
        <View style={styles.rowBetween}>
          <Text style={styles.subtitle}>Opened Tickets</Text>
          <TouchableOpacity
            style={[
              styles.newTicketBtn,
              { paddingVertical: hp(1.2), paddingHorizontal: wp(7) },
            ]}
            onPress={() => navigation.navigate('NewTicketScreen')}
          >
            <Text style={styles.newTicketText}>New Ticket</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={tickets}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingBottom: hp(5) }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => {}}>
              <View style={styles.ticketRow}>
                <Text style={styles.ticketId}>{item.id}</Text>
                {item.status === 'New' && (
                  <View style={styles.newBadge}>
                    <Text style={styles.newBadgeText}>New</Text>
                  </View>
                )}
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Subject</Text>
                <Text style={styles.value}>{item.subject}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Created</Text>
                <Text style={styles.value}>{item.created}</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Last Changed</Text>
                <Text style={styles.value}>{item.changed}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default CustomerSupportScreen;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  innercontainer: { marginHorizontal: 20 },
  title: { fontSize: wp(5.5), fontWeight: 'bold' },
  backIcon: { fontSize: wp(5) },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(2.2),
    marginTop: 10,
  },
  subtitle: { fontSize: wp(4.5), fontWeight: '600' },
  newTicketBtn: { backgroundColor: '#68FFD0', borderRadius: wp(7) },
  newTicketText: { fontWeight: 'bold', fontSize: wp(4) },
 
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: wp(2),
    overflow: 'hidden',
    marginBottom: hp(2),
    backgroundColor: '#fff',
  },
  ticketRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp(4),
    borderBottomWidth: 1,
    borderColor: '#D7D7D7',
  },
  ticketId: { fontWeight: 'bold', fontSize: wp(4) },
  newBadge: {
    backgroundColor: '#FF5A5F',
    borderRadius: wp(4),
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
  },
  newBadgeText: { color: '#fff', fontSize: wp(3) },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    borderBottomWidth: 1,
    borderColor: '#D7D7D7',
  },
  label: { fontSize: wp(3.5), color: '#000', fontWeight: '500' },
  value: { fontSize: wp(3.5), fontWeight: '500' },
  subcontainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#D7D7D7',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
function wp(percentage: number): number {
  const { width } = Dimensions.get('window');
  return (width * percentage) / 100;
}
function hp(percentage: number): number {
  const { height } = Dimensions.get('window');
  return (height * percentage) / 100;
}
