import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import Header from '../../components/Header';

const PremiumScreen: React.FC = ({ navigation }) => {
  const { wp, hp } = useResponsive();
  const [activeTab, setActiveTab] = useState<'Main' | 'Progress' | "FAQ's">('Main');

  const styles = getStyles(wp, hp);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Premium</Text>
          <TouchableOpacity onPress={() => navigation.navigate('NotificationsScreen')}>
            <Image source={require('../../../assets/icon/bell.png')} style={styles.profileIcon} />
          </TouchableOpacity>
        </View>

        <View style={[styles.tabRow, { paddingHorizontal: wp(5), marginTop: hp(1.5) }]}>
          {['Main', 'Progress', "FAQ's"].map(tab => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                {
                  paddingHorizontal: wp(4),
                  paddingVertical: hp(1),
                  borderRadius: wp(5),
                  backgroundColor: activeTab === tab ? '#90f5d0' : '#F2F2F2',
                },
              ]}
              onPress={() => setActiveTab(tab as 'Main' | 'Progress' | "FAQ's")}
            >
              <Text style={{ fontSize: wp(3.5), color: '#000', fontWeight: activeTab === tab ? 'bold' : 'normal' }}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: wp(5), paddingTop: hp(2), paddingBottom: hp(5) }}>
        
        {activeTab === 'Main' && (
          <>
            <Text style={[styles.title, { fontSize: wp(4.5), marginBottom: hp(1) }]}>
              Ready for the Premium Programme?
            </Text>

            <Text style={[styles.description, { fontSize: wp(3.5), lineHeight: hp(2.5) }]}>
              Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text. 
            </Text>

            <Text style={[styles.description, { fontSize: wp(3.5), lineHeight: hp(2.5), marginTop: hp(1) }]}>
              Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text.
            </Text>

            {/* Prime Card UI */}
            <View style={[styles.primeCard, { padding: hp(2), borderRadius: wp(3), marginTop: hp(3) }]}>
              
              <View style={[styles.cardImageContainer, { marginBottom: hp(2) }]}>
                <Image
                  source={require('../../../assets/image/primecard.png')}
                  style={{
                    width: '100%',
                    height: hp(18),
                    resizeMode: 'contain',
                    borderRadius: wp(2),
                  }}
                />
              </View>

              <Text style={[styles.traderTitle, { fontSize: wp(4.5), marginBottom: hp(1) }]}>Trader</Text>
              <Text style={[styles.description, { fontSize: wp(3.5), lineHeight: hp(2.5), marginBottom: hp(2) }]}>
                Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text.
              </Text>

              {/* Prime Benefits */}
              <Text style={[styles.sectionTitle, { fontSize: wp(4), marginBottom: hp(1) }]}>Prime Benefits</Text>

              {[
                '1x Free Nostrox Challenge of same size.',
                'Unlocked $400K Nostrox Challenge.',
                '10% off on new Nostrox Challenge.',
                '90% Reward.',
                'Dedicated Support.',
                '$600K Max. Capital Allocation.',
                '5% rollover bonus.',
                'Certificate of achievement.'
              ].map((item, index) => (
                <View key={index} style={styles.benefitRow}>
                  <Image
                    source={require('../../../assets/icon/bluecheck.png')}
                    style={{ width: wp(6), height: wp(6), marginRight: wp(2) }}
                  />
                  <Text style={[styles.description, { fontSize: wp(3.5) }]}>{item}</Text>
                </View>
              ))}

              {/* Prime Conditions */}
              <Text style={[styles.sectionTitle, { fontSize: wp(4), marginVertical: hp(1.5) }]}>Prime Conditions</Text>

              {[
                'Active Nostrox Account.',
                'No failed Nostrox Account in the last 4 months.',
                'Process 4 Rewards with at least 4% profit per reward.'
              ].map((item, index) => (
                <View key={index} style={styles.benefitRow}>
                  <Image
                    source={require('../../../assets/icon/greencheck.png')}
                    style={{ width: wp(6), height: wp(6), marginRight: wp(2) }}
                  />
                  <Text style={[styles.description, { fontSize: wp(3.5) }]}>{item}</Text>
                </View>
              ))}
            </View>
          </>
        )}

        {activeTab === 'Progress' && (
          <Text style={[styles.description, { fontSize: wp(3.5), marginTop: hp(2) }]}>
            Progress content goes here...
          </Text>
        )}

        {activeTab === "FAQ's" && (
          <Text style={[styles.description, { fontSize: wp(3.5), marginTop: hp(2) }]}>
            FAQ's content goes here...
          </Text>
        )}

      </ScrollView>
    </View>
  );
};

export default PremiumScreen;
const getStyles = (wp: (val: number) => number, hp: (val: number) => number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    tabRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    tabButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      color: '#000',
    },
    description: {
      color: '#333',
    },
    card: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#D7D7D7',
    },
    traderTitle: {
      fontWeight: 'bold',
      color: '#000',
    },
    header: {
      backgroundColor: '#A7FDE0',
      paddingHorizontal: wp(4),
      paddingTop: hp(2),
      borderBottomWidth: 1,
      borderColor: '#ddd',
      height: hp(15),
    },
    headerTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: hp(2),
    },
    headerTitle: {
      fontSize: wp(5),
      fontWeight: 'bold',
    },
    profileIcon: {
      width: wp(8),
      height: wp(8),
      resizeMode: 'contain',
      
    },
    primeCard: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#D7D7D7',
    },
    cardImageContainer: {
      width: '100%',
    },
    sectionTitle: {
      fontWeight: 'bold',
      color: '#000',
    },
    benefitRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(1),
    },
  });
