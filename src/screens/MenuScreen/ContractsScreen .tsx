import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import Header from '../../components/Header';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const ContractsScreen: React.FC = () => {
    const navigation = useNavigation<NavigationProp<any>>();
  const { wp, hp } = useResponsive();

  return (
    <View style={styles.container}>
      <Header
        title="Contracts"
        customIcon={require('../../../assets/icon/backarrow.png')}
        onIconPress={() => navigation.goBack()}
      />

      <View style={{ paddingHorizontal: wp(5), paddingVertical: hp(2) }}>
        <Text style={[styles.description, { fontSize: wp(3.5) }]}>
          Lorem Ipsum is simply dummy text of the printing and type-setting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and type-setting industry. Lorem Ipsum has been the industry's standard dummy text.
        </Text>

        <Text style={[styles.sectionTitle, { fontSize: wp(4.2), marginTop: hp(3) }]}>
          Your contracts for download
        </Text>

        <View style={[styles.card, { paddingVertical: hp(4), marginTop: hp(2), borderRadius: wp(2) }]}>
          <Image
            source={require('../../../assets/icon/file.png')} 
            style={{ width: wp(30), height: wp(30), marginBottom: hp(2),marginTop: hp(-4) }}
            resizeMode="contain"
          />
          <Text style={[styles.noContractText, { fontSize: wp(3.8) }]}>
            No contracts currently available for download
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ContractsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  description: {
    color: '#000',
   
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D7D7D7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noContractText: {
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    justifyContent:'center'
  },
});
