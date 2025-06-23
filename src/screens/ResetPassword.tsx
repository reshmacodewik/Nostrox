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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useResponsive } from 'react-native-responsive-hook';
type RootStackParamList = {
  ForgotPassword: undefined;
  ResetPassword: undefined;
  // Add other routes here as needed
};
import { useNavigation } from '@react-navigation/native';

const ResetPassword = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { wp, hp } = useResponsive();
  //   const { width, height } = Dimensions.get('window'); // width %, height %

  const [confirmpassword, setconfirmpassword] = useState('');
  const [password, setPassword] = useState('');
  const [showcp, setshowcp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
             Reset <Text style={styles.highlight}>Password</Text>
            </Text>
      
            <Text style={[styles.subtext, { marginTop: hp(1),marginBottom:hp(3) }]}>
             Enter a new password to reset your account access
            </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>New Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Enter your new password"
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

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Enter your new password"
            placeholderTextColor="#aaa"
            style={[styles.input, { flex: 1 }]}
            value={confirmpassword}
            onChangeText={setconfirmpassword}
            secureTextEntry={!showcp}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setshowcp(!showcp)}
          >
            <Ionicons
              name={showcp ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPassword;

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
