/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { wp, hp } = useResponsive();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.topBackground, { height: hp(35) }]}>
        <Image
          source={require('../../assets/image/login.png')}
          style={{
            width: wp(36),
            height: wp(36),
            alignSelf: 'center',
            marginTop: hp(0),
          }}
          resizeMode="contain"
        />
      </View>
      <View
        style={[
          styles.bottomContainer,
          { marginTop: -hp(8), paddingHorizontal: wp(8) },
        ]}
      >
        <Text style={styles.signIn}>
          Sign in to <Text style={styles.greenText}>your Account</Text>
        </Text>
        <Text style={styles.subText}>
          Create an account or log in to explore our app
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
            style={styles.rememberRow}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <CheckBox
              value={rememberMe}
              onValueChange={setRememberMe}
              tintColors={{ true: '#5DFFCD', false: '#000' }}
            />
            <Text style={styles.rememberText}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.forgotText}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('HomeScreen')}
        >
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
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5DFFCD',
  },
  topBackground: {
    backgroundColor: '#5DFFCD',
    justifyContent: 'center',
  },
  bottomContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: wp(10),
    borderTopRightRadius: wp(10),
    paddingTop: hp(4),
    flex: 1,
  },
  signIn: {
    fontSize: wp(6.5),
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  greenText: {
    color: '#5DFFCD',
  },
  subText: {
    fontWeight:'400',
    textAlign: 'center',
    color: '#000',
    marginVertical: hp(1.5),
    fontSize: wp(3.1),
  },
  inputContainer: {
    marginTop: hp(2),
  },
  label: {
    fontSize: wp(3.5),
    color: '#000',
    marginBottom: hp(0.5),
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E7E7E9',
    borderRadius: wp(8),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    fontSize: wp(4),
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    right: wp(4),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1.5),
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    fontSize: wp(3.5),
    color: '#000',
    marginLeft: wp(2),
  },
  forgotText: {
    fontSize: wp(3.5),
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#5DFFCD',
    paddingVertical: hp(1.5),
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
    fontSize: wp(3.5),
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
