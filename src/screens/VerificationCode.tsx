import React from 'react';
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
  VerificationCode: undefined;
  ResetPassword: undefined;
};

const VerificationCode = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { wp, hp } = useResponsive();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          marginTop: hp(4),
          marginLeft: wp(0),
          width: wp(7),
          height: wp(7),
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
          marginTop: hp(8),
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />

      <Text style={[styles.title, { marginTop: hp(5) }]}>
        Verification <Text style={styles.highlight}>Code</Text>
      </Text>

      <Text style={[styles.subtext, { marginTop: hp(1),marginBottom:hp(2)  }]}>
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
        style={[
          styles.button,
          {
            paddingVertical: hp(2),
            paddingHorizontal: wp(25),
            borderRadius: wp(8),
          },
        ]}
        onPress={() => navigation.navigate('ResetPassword')}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerificationCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
    paddingHorizontal: 0,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: hp(1),
    color: '#000',

    marginBottom: hp(0),
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
  },
  highlight: {
    color: '#3CF2B3',
  },
  subtext: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
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
  button: {
    backgroundColor: '#3CF2B3',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

// function wp(percentage: number): number {
//   const { width } = Dimensions.get('window');
//   return (width * percentage) / 100;
// }
function hp(percentage: number): number {
  const { height } = Dimensions.get('window');
  return (height * percentage) / 100;
}
