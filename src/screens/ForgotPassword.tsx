import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useResponsive } from 'react-native-responsive-hook';

type RootStackParamList = {
  ForgotPassword: undefined;
  ResetPassword: undefined;
  VerificationCode: undefined;
  // Add other routes here as needed
};
const ForgotPassword = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { wp, hp } = useResponsive();
  //   const { width, height } = Dimensions.get('window'); // width %, height %

  const [email, setemail] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          marginTop: hp(4),
          marginLeft: wp(0),
          width: wp(6),
          height: wp(6),
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../assets/icon/arrow.png')}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
        />
      </TouchableOpacity>

      <Image
        source={require('../../assets/image/logo.png')}
        style={{
          width: wp(70),
          height: hp(10),
          alignSelf: 'center',
          marginTop: hp(8),
        }}
        resizeMode="contain"
      />

      <Text style={[styles.title, { marginTop: hp(5) }]}>
        Forgot <Text style={styles.highlight}>Password</Text>
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Enter your new password"
            placeholderTextColor="#aaa"
            style={[styles.input, { flex: 1 }]}
            value={email}
            onChangeText={setemail}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton}  onPress={() => navigation.navigate('VerificationCode')}> 
        <Text style={styles.loginButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(8),
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom:hp(2),
  },
  subtext: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  highlight: {
    color: '#3CF2B3',
  },
  signIn: {
    lineHeight: hp(4),
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: hp(6),
    marginBottom: hp(4),
    color: '#000',
  },
  greenText: {
    color: '#5DFFCD',
  },
  inputContainer: {
    marginTop: hp(4),
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: hp(1),
    color: '#000',
    marginBottom: hp(1),
  },
  input: {
    borderWidth: 1,
    borderColor: '#E7E7E9',
    borderRadius: wp(10),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.1),
    fontSize: wp(4),
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    right: wp(4),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(0.5),
    fontWeight: '500',
  },
  rememberText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '500',
  },
  forgotText: {
    marginTop: hp(0.5),
    fontSize: 12,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#5DFFCD',
    paddingVertical: hp(1.8),
    borderRadius: wp(10),
    marginTop: hp(4),
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#000',
    fontWeight: '700',
    fontSize: wp(4.5),
  },

  signupText: {
    color: '#5DFFCD',
    fontWeight: '700',
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
