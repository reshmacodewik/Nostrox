import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

const CertificatesScreen = () => {
  const navigation = useNavigation();
  const { wp, hp } = useResponsive();
  const [selected, setSelected] = useState('All');

  const menuItems = [
    'Certificate Scan',
    'All',
    'Max Allocation',
    'Overall Rewards',
    'Rewards',
    'Evaluation Process',
    'Nostrox Academy',
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
   <Header
        title="Certificates"
        customIcon={require('../../../assets/icon/backarrow.png')}
        onIconPress={() => navigation.goBack()}
      />
     
      <ScrollView contentContainerStyle={styles(wp, hp).contentContainer}>
        
     
        {menuItems.map(item => (
          <TouchableOpacity
            key={item}
            style={[
              styles(wp, hp).menuButton,
              selected === item && styles(wp, hp).menuButtonActive,
            ]}
            onPress={() => setSelected(item)}
          >
            <Text style={styles(wp, hp).menuButtonText}>{item}</Text>
          </TouchableOpacity>
        ))}

        <View style={styles(wp, hp).certificateCard}>
          <Image
              source={require('../../../assets/image/logo1.png')} // Replace with your image
              style={styles(wp, hp).logo}
             
            />
          <Text style={styles(wp, hp).subTitle}>SUPREME TRADER</Text>

          <View style={styles(wp, hp).awardedContainer}>
            <Image
              source={require('../../../assets/icon/user3.png')} // Replace with your image
              style={styles(wp, hp).avatar}
            />
              <View style={styles(wp, hp).awardedContainertext}>
            <Text style={styles(wp, hp).awardedText}>
              Proudly awarded to:
            </Text>
            <Text style={styles(wp, hp).awardedName}>John Marker</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CertificatesScreen;
const styles = (wp: { (widthPercent: number | string): number; (widthPercent: number | string): number; (widthPercent: number | string): number; (widthPercent: number | string): number; (widthPercent: number | string): number; (widthPercent: number | string): number; (widthPercent: number | string): number; (widthPercent: number | string): number; (widthPercent: number | string): number; (widthPercent: number | string): number; (widthPercent: number | string): number; (widthPercent: number | string): number; (widthPercent: number | string): number; (widthPercent: number | string): number; (arg0: number): any; }, hp: { (heightPercent: number | string): number; (heightPercent: number | string): number; (heightPercent: number | string): number; (heightPercent: number | string): number; (heightPercent: number | string): number; (heightPercent: number | string): number; (heightPercent: number | string): number; (heightPercent: number | string): number; (heightPercent: number | string): number; (heightPercent: number | string): number; (heightPercent: number | string): number; (heightPercent: number | string): number; (heightPercent: number | string): number; (heightPercent: number | string): number; (arg0: number): any; }) =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#B3FFE5',
      paddingHorizontal: wp(4),
      paddingVertical: hp(2),
    },
    headerText: {
      fontSize: wp(5),
      fontWeight: 'bold',
    },
    backIcon: {
      width: wp(6),
      height: wp(6),
      tintColor: '#8000FF',
    },
    contentContainer: {
      padding: wp(5),
    },
    menuButton: {
      borderWidth: 1,
      borderColor: '#D9D9D9',
      paddingVertical: hp(1.8),
      borderRadius: wp(3),
      marginBottom: hp(1.5),
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    menuButtonActive: {
      backgroundColor: '#68FFD0',
    },
    menuButtonText: {
      fontSize: wp(4),
      fontWeight: '500',
    },
    certificateCard: {
      backgroundColor: '#FFF176',
      borderRadius: wp(4),
      padding: wp(5),
      marginTop: hp(1),
      alignItems: 'center',
      paddingBottom:wp(8),
    },
    logoText: {
      fontSize: wp(6),
      fontWeight: 'bold',
      color: '#000',
      marginBottom: hp(1),
    },
    subTitle: {
      fontSize: wp(4.5),
      fontWeight: 'bold',
      marginBottom: hp(2),
    },
    awardedContainer: {
      alignItems: 'center',
      flexDirection:'row',
      gap:20
    },
   logo: {
      width: wp(60),
      height: wp(10),
      resizeMode: 'cover',
      marginVertical: hp(3),
    },
    avatar: {
      width: wp(10),
      height: wp(10),
      borderRadius: wp(2),
      backgroundColor: '#fff',
      marginBottom: hp(1),
      padding:wp(10),
      borderWidth:1,
      borderColor:"#D7D7D7"
    },
    awardedText: {
      fontSize: wp(3.8),
      color: '#333',
      marginBottom: hp(0.5),
    },
    awardedContainertext:{
        flexDirection:'column'
    },
    awardedName: {
      fontSize: wp(4.2),
      fontWeight: 'bold',
      color: '#000',
    },
  });
