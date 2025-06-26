/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */

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


interface VerificationCodeProps {}

interface ResponsiveContext {
  wp: (percentage: number) => number;
  hp: (percentage: number) => number;
}

const VerificationCode: React.FC<VerificationCodeProps> = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { wp, hp }: ResponsiveContext = useResponsive();

  return (
    <View style={styles.container}>
      <View style={[styles.topBackground, { height: hp(35) }]}>
        <TouchableOpacity
          style={{
            marginTop: hp(0),
            marginLeft: wp(5),
            width: wp(6),
            height: wp(6),
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../assets/icon/arrowleft.png')}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </TouchableOpacity>
        <Image
          source={require('../../assets/image/verficationcode.png')}
          style={{
            width: wp(35),
            height: wp(35),
            alignSelf: 'center',
            marginBottom: hp(3),
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
          Verification<Text style={styles.greenText}>Code</Text>
        </Text>
        <Text style={styles.subText}>
        Check your email for the recovery code to verify identity
        </Text>
       <View style={[styles.codeRow, { marginTop: hp(3), marginBottom: hp(3) }]}>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <TextInput
              key={index}
              style={[
                styles.codeInput,
                { width: wp(12), height: wp(12), borderRadius: wp(2) },
              ]}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={val => {
                if (val && index === 5) navigation.navigate('ResetPassword');
              }}
            />
          ))}
      </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('ResetPassword')}
        >
          <Text style={styles.loginButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerificationCode;

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
    fontWeight: '400',
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
    paddingVertical: hp(1.6),
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
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#3CF2B3',
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
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
