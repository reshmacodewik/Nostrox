import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { FlatList } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const faqData = [
  { id: '1', question: 'How do I qualify for the prime status?' },
  { id: '2', question: 'How do I qualify for the prime status?' },
  { id: '3', question: 'How do I qualify for the prime status?' },
  { id: '4', question: 'How do I qualify for the prime status?' },
  { id: '5', question: 'How do I qualify for the prime status?' },
  { id: '6', question: 'How do I qualify for the prime status?' },
  { id: '7', question: 'How do I qualify for the prime status?' },
];
const PremiumScreen: React.FC = ({ navigation }) => {
  const { wp, hp } = useResponsive();
  const [activeTab, setActiveTab] = useState<'Main' | 'Progress' | "FAQ's">(
    'Main',
  );
  const renderItem = ({ item }: { item: { id: string; question: string } }) => (
    <TouchableOpacity style={styles.faqBox} activeOpacity={0.7}>
      <Text style={styles.questionText}>{item.question}</Text>
      <MaterialIcons name="keyboard-arrow-down" size={wp(5.5)} color="#000" />
    </TouchableOpacity>
  );



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Premium</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationsScreen')}
          >
            <Image
              source={require('../../../assets/icon/bell.png')}
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.tabRow,
            { paddingHorizontal: wp(5), marginTop: hp(1.5) },
          ]}
        >
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
              <Text
                style={{
                  fontSize: wp(3.5),
                  color: '#000',
                  fontWeight: activeTab === tab ? 'bold' : 'normal',
                }}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: wp(5),
          paddingTop: hp(2),
          paddingBottom: hp(5),
        }}
      >
        {activeTab === 'Main' && (
          <>
            <Text
              style={[styles.title, { fontSize: wp(4.5), marginBottom: hp(1) }]}
            >
              Ready for the Premium Programme?
            </Text>

            <Text
              style={[
                styles.description,
                { fontSize: wp(3.5), lineHeight: hp(2.5) },
              ]}
            >
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </Text>

            <Text
              style={[
                styles.description,
                { fontSize: wp(3.5), lineHeight: hp(2.5), marginTop: hp(1) },
              ]}
            >
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </Text>
            <View
              style={[
                styles.primeCard,
                { padding: hp(2), borderRadius: wp(3), marginTop: hp(3) },
              ]}
            >
              <View
                style={[styles.cardImageContainer, { marginBottom: hp(2) }]}
              >
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

              <Text
                style={[
                  styles.traderTitle,
                  { fontSize: wp(4.5), marginBottom: hp(1) },
                ]}
              >
                Trader
              </Text>
              <Text
                style={[
                  styles.description,
                  {
                    fontSize: wp(3.5),
                    lineHeight: hp(2.5),
                    marginBottom: hp(2),
                  },
                ]}
              >
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum has been the industry's standard
                dummy text.
              </Text>

              {/* Prime Benefits */}
              <Text
                style={[
                  styles.sectionTitle,
                  { fontSize: wp(4), marginBottom: hp(1) },
                ]}
              >
                Prime Benefits
              </Text>

              {[
                '1x Free Nostrox Challenge of same size.',
                'Unlocked $400K Nostrox Challenge.',
                '10% off on new Nostrox Challenge.',
                '90% Reward.',
                'Dedicated Support.',
                '$600K Max. Capital Allocation.',
                '5% rollover bonus.',
                'Certificate of achievement.',
              ].map((item, index) => (
                <View key={index} style={styles.benefitRow}>
                  <Image
                    source={require('../../../assets/icon/bluecheck.png')}
                    style={{ width: wp(6), height: wp(6), marginRight: wp(2) }}
                  />
                  <Text style={[styles.description, { fontSize: wp(3.5) }]}>
                    {item}
                  </Text>
                </View>
              ))}

              {/* Prime Conditions */}
              <Text
                style={[
                  styles.sectionTitle,
                  { fontSize: wp(4), marginVertical: hp(1.5) },
                ]}
              >
                Prime Conditions
              </Text>

              {[
                'Active Nostrox Account.',
                'No failed Nostrox Account in the last 4 months.',
                'Process 4 Rewards with at least 4% profit per reward.',
              ].map((item, index) => (
                <View key={index} style={styles.benefitRow}>
                  <Image
                    source={require('../../../assets/icon/greencheck.png')}
                    style={{ width: wp(6), height: wp(6), marginRight: wp(2) }}
                  />
                  <Text style={[styles.description, { fontSize: wp(3.5) }]}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
            <View
              style={[
                styles.primeCard,
                { padding: hp(2), borderRadius: wp(3), marginTop: hp(3) },
              ]}
            >
              <View
                style={[styles.cardImageContainer, { marginBottom: hp(2) }]}
              >
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

              <Text
                style={[
                  styles.traderTitle,
                  { fontSize: wp(4.5), marginBottom: hp(1) },
                ]}
              >
                Trader
              </Text>
              <Text
                style={[
                  styles.description,
                  {
                    fontSize: wp(3.5),
                    lineHeight: hp(2.5),
                    marginBottom: hp(2),
                  },
                ]}
              >
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum has been the industry's standard
                dummy text.
              </Text>
              <Text
                style={[
                  styles.sectionTitle,
                  { fontSize: wp(4), marginBottom: hp(1) },
                ]}
              >
                Prime Benefits
              </Text>

              {[
                '1x Free Nostrox Challenge of same size.',
                'Unlocked $400K Nostrox Challenge.',
                '10% off on new Nostrox Challenge.',
                '90% Reward.',
                'Dedicated Support.',
                '$600K Max. Capital Allocation.',
                '5% rollover bonus.',
                'Certificate of achievement.',
              ].map((item, index) => (
                <View key={index} style={styles.benefitRow}>
                  <Image
                    source={require('../../../assets/icon/bluecheck.png')}
                    style={{ width: wp(6), height: wp(6), marginRight: wp(2) }}
                  />
                  <Text style={[styles.description, { fontSize: wp(3.5) }]}>
                    {item}
                  </Text>
                </View>
              ))}
              <Text
                style={[
                  styles.sectionTitle,
                  { fontSize: wp(4), marginVertical: hp(1.5) },
                ]}
              >
                Prime Conditions
              </Text>

              {[
                'Active Nostrox Account.',
                'No failed Nostrox Account in the last 4 months.',
                'Process 4 Rewards with at least 4% profit per reward.',
              ].map((item, index) => (
                <View key={index} style={styles.benefitRow}>
                  <Image
                    source={require('../../../assets/icon/greencheck.png')}
                    style={{ width: wp(6), height: wp(6), marginRight: wp(2) }}
                  />
                  <Text style={[styles.description, { fontSize: wp(3.5) }]}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </>
        )}

        {activeTab === 'Progress' && (
          <View style={styles.progresscontainer}>
            <Text style={styles.progresstitle}>Your Progress</Text>
            <Text style={styles.progressdescription}>
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text.
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </Text>

            <View style={styles.warningBox}>
              <Image
                source={require('../../../assets/icon/info.png')} 
                style={styles.warningIcon}
                resizeMode="contain"
              />
              <Text style={styles.warningTitle}>
                You need an <Text style={styles.highlight}>Nostrox</Text>{' '}
                account for{' '}
                <Text style={styles.highlight}>premium programme!</Text>
              </Text>
              <Text style={styles.warningDescription}>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum has been the industry's standard
                dummy text. Lorem Ipsum is simply dummy text of the printing and
                type setting industry. Lorem Ipsum has been the industry's
                standard dummy text.
              </Text>
            </View>
          </View>
        )}

        {activeTab === "FAQ's" && (
          <View style={styles.container}>
      <Text style={styles.faqtitle}>Your Progress</Text>
      <Text style={styles.faqdescription}>
        Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been 
        the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and type 
        setting industry. Lorem Ipsum has been the industry's standard dummy text.
      </Text>

      <FlatList
        data={faqData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(2) }}
      />
    </View>
        )}
      </ScrollView>
    </View>
  );
};

export default PremiumScreen;
const styles = StyleSheet.create({
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
    progresscontainer: {
      flex: 1,
      backgroundColor: '#fff',
    },
    highlight: {
      color: '#000',
      fontWeight: 'bold',
    },
    progresstitle: {
      fontWeight: 'bold',
      marginBottom: hp(1.5),
      color: '#000',
      fontSize: wp(5),
    },
    progressdescription: {
      color: '#333',
      lineHeight: hp(2.5),
      marginBottom: hp(2),
      fontSize: wp(3.5),
    },
    warningBox: {
      backgroundColor: '#FFF4C5',
      borderColor: '#E8C26A',
      borderWidth: 1,
      borderRadius: wp(2),
      alignItems: 'center',
      padding: wp(4),
    },
    warningIcon: {
      width: wp(22),
      height: wp(22),
      marginBottom: hp(0),
    },
    warningTitle: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#000',
      fontSize: wp(6),
      marginBottom: hp(1),
    },
    warningDescription: {
      textAlign: 'center',
      color: '#333',
      lineHeight: hp(2.5),
      fontSize: wp(3.5),
    },
     faqtitle: {
      fontWeight: 'bold',
      fontSize: wp(5),
      color: '#000',
      marginBottom: hp(1.5),
    },
    faqdescription: {
      color: '#333',
      fontSize: wp(3.5),
      lineHeight: hp(2.5),
      marginBottom: hp(2),
    },
    faqBox: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: wp(2),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: hp(1.5),
      paddingHorizontal: wp(4),
      marginBottom: hp(1.5),
      backgroundColor: '#fff',
    },
    questionText: {
      color: '#000',
      fontSize: wp(3.8),
      flex: 1,
      marginRight: wp(2),
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