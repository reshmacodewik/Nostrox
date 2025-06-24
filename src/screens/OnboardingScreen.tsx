import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useResponsive } from 'react-native-responsive-hook';

const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { wp, hp } = useResponsive();

  const slides = [
    {
      key: '1',
      title: 'Empower Your Trading Journey',
      text: 'Empowering You With Tools To Trade Confidently And Profitably.',
      image: require('../../assets/image/onboard1.png'),
    },
    {
      key: '2',
      title: 'Tailor Your Market Insights',
      text: 'Receive Personalized Updates And Alerts Based On Your Preferences.',
      image: require('../../assets/image/onboard2.png'),
    },
    {
      key: '3',
      title: 'Explore Trading Opportunities',
      text: 'Find Assets, Trends, And Strategies Tailored To Your Goals.',
      image: require('../../assets/image/onboard3.png'),
    },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.slide}>
      <Image source={item.image} style={[styles.image, { width: wp(92), height: hp(40) }]} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text style={[styles.title, { fontSize: wp(9) }]}>{item.title}</Text>
        <Text style={[styles.text, { fontSize: wp(4), marginBottom: hp(5) }]}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={[styles.skipContainer, { top: hp(6), right: wp(5) }]}
      >
        <Text style={[styles.skip, { fontSize: wp(4) }]}>Skip</Text>
      </TouchableOpacity>

      <AppIntroSlider
        renderItem={renderItem}
        bottomButton
        data={slides}
        dotStyle={{
          ...styles.dot,
          width: wp(2.5),
          height: wp(2.5),
          marginBottom: hp(2.5),
        }}
        activeDotStyle={{
          ...styles.activeDot,
          width: wp(7),
          height: hp(0.9),
          marginBottom: hp(2.5),
        }}
        onDone={() => navigation.navigate('LoginScreen')}
        renderNextButton={() => (
          <View style={[styles.bottomButton, { paddingVertical: hp(1.5), paddingHorizontal: wp(6), marginBottom: hp(6) }]}>
            <Text style={[styles.bottomButtonText, { fontSize: wp(4) }]}>Next</Text>
          </View>
        )}
        renderDoneButton={() => (
          <View style={[styles.bottomButton, { paddingVertical: hp(2), paddingHorizontal: wp(6), marginBottom: hp(6) }]}>
            <Text style={[styles.bottomButtonText, { fontSize: wp(4) }]}>Get Started</Text>
          </View>
        )}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  image: {
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  bottomButton: {
    backgroundColor: '#5DFFCD',
    borderRadius: 30,
    marginHorizontal: 10,
   
  },
  bottomButtonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    fontWeight: '700',
    marginBottom: 8,
    color: '#000',
  
  },
  text: {
    color: '#666',
    lineHeight: 28,
   
  },
  skipContainer: {
    position: 'absolute',
    zIndex: 10,
  },
  skip: {
    color: '#000',
  },
  dot: {
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#000',
  },
});
