import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const {  height } = Dimensions.get('window');

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();


  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('OnboardingScreen');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/splash1.png')}
        resizeMode="cover"
        style={styles.logo}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:0,
    backgroundColor: '#fff', 
  },
  logo: {
    flex:0,
    
    width: '100%',      
    height: height * 1.0,    
  },
});
