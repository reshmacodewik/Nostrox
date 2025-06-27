import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';
// import { useResponsiveScreen } from 'react-native-responsive-hook';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
import { Dimensions } from 'react-native';
import Header from '../../components/Header';

const TradersAnalysis = () => {
  const { hp, wp } = useResponsiveScreen();

  const [profitType, setProfitType] = React.useState('Amount');
  const [startDate, setStartDate] = React.useState<Date | undefined>();
  const [endDate, setEndDate] = React.useState<Date | undefined>();
  const [showStartPicker, setShowStartPicker] = React.useState(false);
  const [showEndPicker, setShowEndPicker] = React.useState(false);
  const [accountTypes, setAccountTypes] = React.useState({
    nostrox: false,
    freeTrial: false,
    verification: false,
    challenge: false,
  });
  const [results, setResults] = React.useState({
    passed: false,
    notPassing: false,
    repeat: false,
    ongoing: false,
    ignored: false,
  });
  const [selectedLogin, setSelectedLogin] = React.useState<string>();

  return (
    <View style={styles.container}>
      <Header
        title="Traders Analysis"
        customIcon={require('../../../assets/icon/backarrow.png')}
        onIconPress={() => console.log('Back pressed')}
      />

      <ScrollView contentContainerStyle={{ paddingBottom: hp(5) }}>
        <View style={styles.innercontainer}>
          <Text style={styles.label}>Cumulative Profit</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={profitType}
              onValueChange={val => setProfitType(val)}
            >
              <Picker.Item label="Amount" value="Amount" />
              <Picker.Item label="Percentage" value="Percentage" />
            </Picker>
          </View>

          <Text style={styles.label}>Date Range</Text>
          <TouchableOpacity
            style={styles.dateInput}
            onPress={() => setShowStartPicker(true)}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text>
                {startDate ? startDate.toDateString() : 'Start date - End date'}
              </Text>
             <Image source={require('../../../assets/icon/eventcal.png')} style={{ width: hp(2), height: hp(2) }} />

            </View>
          </TouchableOpacity>

          {showStartPicker && (
            <DateTimePicker
              value={startDate || new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event, date) => {
                setShowStartPicker(false);
                if (date) setStartDate(date);
              }}
            />
          )}

          <Text style={[styles.label, { marginTop: hp(2) }]}>Account Type</Text>
          <View style={styles.checkboxRow}>
            <CheckBox
              value={accountTypes.nostrox}
              onValueChange={val =>
                setAccountTypes({ ...accountTypes, nostrox: val })
              }
            />
            <Text style={styles.checkboxLabel}>Nostrox Account</Text>
            <CheckBox
              value={accountTypes.freeTrial}
              onValueChange={val =>
                setAccountTypes({ ...accountTypes, freeTrial: val })
              }
            />
            <Text style={styles.checkboxLabel}>Free Trial</Text>
          </View>

          <View style={styles.checkboxRow}>
            <CheckBox
              value={accountTypes.verification}
              onValueChange={val =>
                setAccountTypes({ ...accountTypes, verification: val })
              }
            />
            <Text style={styles.checkboxLabel}>Verification</Text>
            <CheckBox
              value={accountTypes.challenge}
              onValueChange={val =>
                setAccountTypes({ ...accountTypes, challenge: val })
              }
            />
            <Text style={styles.checkboxLabel}>Nostrox Challenge</Text>
          </View>

          <Text style={[styles.label, { marginTop: hp(2) }]}>Result</Text>
          <View style={styles.checkboxRow}>
            <CheckBox
              value={results.passed}
              onValueChange={val => setResults({ ...results, passed: val })}
            />
            <Text style={styles.checkboxLabel}>Passed</Text>
            <CheckBox
              value={results.notPassing}
              onValueChange={val => setResults({ ...results, notPassing: val })}
            />
            <Text style={styles.checkboxLabel}>Not Passing</Text>
          </View>

          <View style={styles.checkboxRow}>
            <CheckBox
              value={results.repeat}
              onValueChange={val => setResults({ ...results, repeat: val })}
            />
            <Text style={styles.checkboxLabel}>Repeat</Text>
            <CheckBox
              value={results.ongoing}
              onValueChange={val => setResults({ ...results, ongoing: val })}
            />
            <Text style={styles.checkboxLabel}>Ongoing</Text>
          </View>

          <View style={styles.checkboxRow}>
            <CheckBox
              value={results.ignored}
              onValueChange={val => setResults({ ...results, ignored: val })}
            />
            <Text style={styles.checkboxLabel}>Ignored</Text>
          </View>

          <Text style={[styles.label, { marginTop: hp(2) }]}>Exclude</Text>
          <Text style={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry.
          </Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedLogin}
              onValueChange={val => setSelectedLogin(val)}
            >
              <Picker.Item
                label="Select Logins"
                value=""
                style={{ paddingLeft: wp(10) }}
              />

              <Picker.Item label="Login 1" value="login1" />
              <Picker.Item label="Login 2" value="login2" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>General Statistics</Text>
          <View style={styles.statsCard}>
            {[
              { label: 'No. of Traders', value: '0' },
              { label: 'Win Rate', value: '0.00' },
              { label: 'Avg Profit', value: '0.00' },
              { label: 'Avg Loss', value: '0.00' },
              { label: 'RRR', value: '0.00' },
              { label: 'Profit Factor', value: '0.00' },
              { label: 'Expectancy', value: '$0.00' },
            ].map((item, index, arr) => (
              <View
                key={item.label}
                style={[
                  styles.statsRow,
                  index === arr.length - 1 && { borderBottomWidth: 0 },
                ]}
              >
                <Text style={styles.statsLabel}>{item.label}</Text>
                <Text style={styles.statsValue}>{item.value}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TradersAnalysis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innercontainer: {
    marginHorizontal: hp(2),
    marginTop: hp(2),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#C3FFE4',
    padding: hp(2),
    borderRadius: hp(1),
    marginBottom: hp(2),
  },

  iconBtn: {
    backgroundColor: '#8affd1',
    padding: hp(1),
    borderRadius: hp(1),
  },
  iconText: {
    fontSize: hp(2),
  },
  label: {
    fontWeight: '500',
    marginBottom: hp(1),
    fontSize: hp(1.5),
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: hp(5),
    marginBottom: hp(2),
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: hp(5),
    padding: hp(1.4),
    marginBottom: hp(2),
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1),
    flexWrap: 'wrap',
  },
  checkboxLabel: {
    marginRight: hp(2),
    fontSize: hp(1.6),
  },
  description: {
    color: '#555',
    marginBottom: hp(1),
    fontSize: hp(1.6),
  },
  submitBtn: {
    backgroundColor: '#8affd1',
    padding: hp(1.5),
    borderRadius: hp(3),
    alignItems: 'center',
    marginVertical: hp(1),
    marginHorizontal: hp(2.5),
    marginBottom: hp(2.5),
  },
  submitText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: hp(2),
  },
  sectionTitle: {
    fontSize: hp(2),
    fontWeight: 'bold',
    marginBottom: hp(1),
  },
  statsCard: {
    backgroundColor: '#fff',
    padding: hp(2),
    borderRadius: hp(1.5),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: hp(3),
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(0.9),
    borderBottomWidth: 1,
    borderBottomColor: '#D4D4D4',
  },
  statsLabel: {
    color: '#333',
    fontSize: hp(1.7),
  },
  statsValue: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: hp(1.7),
  },
});

function hp(percentage: number): number {
  const { height } = Dimensions.get('window');
  return (height * percentage) / 100;
}
function useResponsiveScreen(): {
  hp: (percentage: number) => number;
  wp: (percentage: number) => number;
} {
  const { height, width } = Dimensions.get('window');
  const hp = (percentage: number) => (height * percentage) / 100;
  const wp = (percentage: number) => (width * percentage) / 100;
  return { hp, wp };
}
