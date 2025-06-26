import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useResponsive } from 'react-native-responsive-hook';
import Header from '../../../components/Header';

const NewTicketScreen = () => {
  const navigation = useNavigation<any>();
  const { wp, hp } = useResponsive();

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    innercontainer: { marginHorizontal: wp(4) },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp(2),
    },
    title: { fontSize: wp(5.5), fontWeight: 'bold' },
    backIcon: { fontSize: wp(5) },
    label: { marginTop: hp(2), fontSize: wp(3.5) },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: wp(7),
      padding: wp(3),
      marginTop: hp(1),
      fontSize: wp(4),
    },
    multilineInput: {
      height: hp(15),
      textAlignVertical: 'top',
    },
    uploadBox: {
      width: wp(25),
      height: wp(25),
      backgroundColor: '#F6F6F6',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp(2),
      marginTop: hp(1),
      padding: hp(0),
    },
    logo:{width: wp(15),
      height: wp(15),},
    sendBtn: {
      backgroundColor: '#68FFD0',
      paddingVertical: hp(1.8),
      alignItems: 'center',
      borderRadius: wp(7),
      marginTop: hp(3),
      marginHorizontal: hp(2.5),
    },
    sendText: { color: '#000', fontWeight: 'bold', fontSize: wp(4) },
    backBtn: {
      backgroundColor: '#F1F1F1',
      paddingVertical: hp(1.8),
      alignItems: 'center',
      borderRadius: wp(7),
      marginTop: hp(2),
      marginHorizontal: hp(2.5),
    },
    backText: { fontWeight: 'bold', fontSize: wp(4) },
  });

  return (
    <View style={styles.container}>
      <Header
        title="New Ticket"
        customIcon={require('../../../../assets/icon/backarrow.png')}
        onIconPress={() => console.log('Back pressed')}
      />
      <View style={styles.innercontainer}>
        <Text style={styles.label}>Subject</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Content</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Choose File(s)</Text>
        <TouchableOpacity style={styles.uploadBox}>
          <Image
            source={require('../../../../assets/icon/upload.png')} // Replace with your image
            style={styles.logo}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sendBtn}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewTicketScreen;
