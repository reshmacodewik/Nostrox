import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

interface Slide {
  key: string;
  title: string;
  text: string;
  image: ImageSourcePropType;
}

const slides: Slide[] = [
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

const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const renderItem = ({ item }: { item: Slide }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={ [styles.text, styles.mb_20]}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.skipContainer}
      >
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>
      <AppIntroSlider
        renderItem={renderItem}
        bottomButton
        showSkipButton
        showPrevButton
        data={slides}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        onDone={() => navigation.navigate('LoginScreen')}
        renderNextButton={() => (
          <View style={styles.bottomButton}>
            <Text style={styles.bottomButtonText}>Next</Text>
          </View>
        )}
        renderDoneButton={() => (
          <View style={styles.bottomButton}>
            <Text style={styles.bottomButtonText}>Get Started</Text>
          </View>
        )}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  mb_20: {
    marginBottom: 20,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  image: {
    width: width * 0.92,
    height: height * 0.4,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  bottomButton: {
    backgroundColor: '#5DFFCD',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginHorizontal: 10,
    marginTop:20,
  },

  bottomButtonText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 43,
    fontWeight: '700',
    marginBottom: 8,
    color: '#000',
  },
  text: {
    fontSize: 18,
    color: '#666',
    lineHeight: 28,
  },
  skipContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
  },
  skip: {
    fontSize: 16,
    color: '#000',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 120,
    width: '100%',
    alignItems: 'center',
  },
 
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
    marginTop: 40,
  },
  activeDot: {
    backgroundColor: '#000',
    width: '7%',
    height: 7,
    marginTop: '12%',
  },
  
});
