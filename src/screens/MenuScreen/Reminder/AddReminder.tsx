import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Image,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useResponsive } from 'react-native-responsive-hook';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AddReminder: React.FC = () => {
  const navigation = useNavigation<any>();
  const { wp, hp } = useResponsive();
  const styles = getStyles(wp, hp);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Header
        title="Add Reminders"
        customIcon={require('../../../../assets/icon/backarrow.png')}
        onIconPress={() => navigation.goBack()}
      />

      <View style={styles.formContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} placeholder="Enter" />

        <Text style={styles.label}>Notes</Text>
        <TextInput style={styles.input} placeholder="Enter" />

        <Text style={styles.label}>Date</Text>
        <View style={styles.dateRow}>
          <TextInput
            // eslint-disable-next-line react-native/no-inline-styles
            style={[styles.input, { flex: 1 }]}
            placeholder="Enter"
            value={selectedDate ? selectedDate.toLocaleString() : ''}
            editable={false}
            pointerEvents="none"
          />
          <TouchableOpacity
            onPress={showDatePicker}
            style={styles.calendarIcon}
          >
            <Image
              source={require('../../../../assets/icon/calendar.png')}
              style={styles.calendarImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <Text style={styles.labelalert}>Alert</Text>
        <TextInput style={styles.input} placeholder="At time of event" />
        {/* <View style={styles.dateRow}>
      
        <TextInput style={styles.input} placeholder="At time of event" />
     
        <MaterialIcons name="arrow-drop-down" size={30} style={styles.calendarImage}/>
        </View> */}
      </View>
    </View>
  );
};

export default AddReminder;

const getStyles = (wp: (val: number) => number, hp: (val: number) => number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    formContainer: {
      paddingHorizontal: wp(5),
      paddingTop: hp(2),
    },
    label: {
      fontSize: wp(3.2),
      marginBottom: hp(0.5),
      color: '#000',
      fontWeight: '500',
    },
    labelalert: {
      fontSize: wp(3.2),
      marginBottom: hp(0.5),
      marginTop: -hp(1.5),
      color: '#000',
      fontWeight: '500',
    },
    input: {
      position: 'relative',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: wp(6),
      paddingHorizontal: wp(4),
      paddingVertical: Platform.OS === 'ios' ? hp(1.2) : hp(1.5),
      marginBottom: hp(1),
      fontSize: wp(3.5),
      backgroundColor: '#fff',
    },
    dateRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(3),
      marginBottom: hp(2),
    },
    calendarIcon: {
      position: 'absolute',
      right: wp(4),
      top: Platform.OS === 'ios' ? hp(1.8) : hp(1),
      justifyContent: 'center',
      alignItems: 'center',
    },
    calendarImage: {
      width: wp(8),
      height: wp(8),
    },
  });

