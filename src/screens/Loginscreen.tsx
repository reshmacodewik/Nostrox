import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { wp, hp } = useResponsive();
  //   const { width, height } = Dimensions.get('window'); // width %, height %

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/logo.png')}
        style={{ width: wp(70), height: hp(10), alignSelf: 'center' }}
        resizeMode="contain"
      />

      <Text style={styles.signIn}>
        Sign in to <Text style={styles.greenText}>your Account</Text>
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#aaa"
            style={[styles.input, { flex: 1 }]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.row}
          onPress={() => setRememberMe(!rememberMe)}
        >
          <CheckBox
            value={rememberMe}
            onValueChange={setRememberMe}
            tintColors={{ true: '#5DFFCD', false: '#000000' }}
          />
          <Text style={styles.rememberText}> Remember me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotText}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Don’t have an account?{' '}
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate('SignUp')}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(8),
    justifyContent: 'center',
    backgroundColor: '#fff',
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
    marginTop: hp(2),
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
  footerText: {
    marginTop: hp(2.5),
    textAlign: 'center',
    fontSize: 12,
    color: '#000',
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
