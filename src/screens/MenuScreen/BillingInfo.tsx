import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

const Billing = [
  {
    id: '1',
    login: '474848955',
    balance: '$225,500.00',
    equity: '$225,500.00',
    end: '07 Feb 2021',
  },
  {
    id: '2',
    login: '123456789',
    balance: '$125,000.00',
    equity: '$125,000.00',
    end: '10 Mar 2021',
  },
  {
    id: '3',
    login: '998877665',
    balance: '$300,000.00',
    equity: '$300,000.00',
    end: '05 Apr 2021',
  },
  {
    id: '4',
    login: '998877665',
    balance: '$300,000.00',
    equity: '$300,000.00',
    end: '05 Apr 2021',
  },
];

const BillingInfo: React.FC = () => {
  const { wp, hp } = useResponsive();

  const navigation = useNavigation<any>();

  const styles = getStyles(wp, hp);

  //     return (
  //       <View style={styles.card}>
  //         <View style={styles.cardTopRow}>
  //           <View>
  //             <Text style={styles.loginLabel}>Login</Text>
  //             <Text style={styles.loginValue}>{item.login}</Text>
  //             <Text>
  //               Result:
  //               <Text
  //                 style={{
  //                   color:
  //                     result === 'Passed'
  //                       ? 'green'
  //                       : result === 'Ongoing'
  //                       ? 'blue'
  //                       : 'black',
  //                 }}
  //               >
  //                 {' '}
  //                 {result}
  //               </Text>
  //             </Text>
  //           </View>
  //           <Image
  //             source={require('../../assets/icon/stock.png')}
  //             style={styles.stockIcon}
  //           />
  //         </View>
  //         <View style={styles.cardRow}>
  //           <View>
  //             <Text>Balance</Text>
  //             <Text style={styles.boldText}>{item.balance}</Text>
  //           </View>
  //           <View>
  //             <Text>Equity</Text>
  //             <Text style={styles.boldText}>{item.equity}</Text>
  //           </View>
  //           <View>
  //             <Text>End</Text>
  //             <Text style={styles.boldText}>{item.end}</Text>
  //           </View>
  //         </View>
  //       </View>
  //     );
  //   };
  const renderCard = ({ item }: { item: any }) => {
    const status = item.status || 'Passed';

    return (
      <View style={styles.card}>
        <View style={styles.cardTopRow}>
          <View>
            <Text style={styles.loginLabel}>Login</Text>
            <Text style={styles.loginValue}>{item.login}</Text>
            <Text>
              Status:
              <Text
                style={{
                  color:
                    status === 'Passed'
                      ? 'green'
                      : status === 'Ongoing'
                      ? 'blue'
                      : 'black',
                }}
              >
                {' '}
                {status}
              </Text>
            </Text>
          </View>
          <Image
            source={require('../../../assets/icon/currency.png')}
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
    <View style={styles.container}>
      <Header
        title="Billing info"
        customIcon={require('../../../assets/icon/backarrow.png')}
        onIconPress={() => navigation.goBack()}
      />

      <FlatList
        data={Billing}
        keyExtractor={item => item.id}
        renderItem={renderCard}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default BillingInfo;

const getStyles = (wp: (val: number) => number, hp: (val: number) => number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    card: {
      backgroundColor: '#fff',
      margin: wp(3),
      padding: wp(4),
      borderRadius: wp(2),
      borderWidth: 1,
      borderColor: '#D7D7D7',
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
      width: wp(15),
      height: wp(15),
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
      marginTop: hp(1.8), 
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
