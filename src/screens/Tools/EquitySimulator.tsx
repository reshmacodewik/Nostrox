import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';
import Header from '../../components/Header';
import InputSpinner from 'react-native-input-spinner';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EquitySimulator: React.FC = () => {
  const { wp, hp } = useResponsive();
  const styles = getStyles(wp, hp);

  const [winRate, setWinRate] = useState(500);
  const [rrr, setRRR] = useState(0.6);
  const [iterations, setIterations] = useState(100);
  const [lines, setLines] = useState(5);
  const [risk, setRisk] = useState(500000);
  const [riskType, setRiskType] = useState<'fixed' | 'percentage'>('fixed');
  const [showResults, setShowResults] = useState(false);

  const handleRun = () => {
    setShowResults(true);
    // You can add logic to compute results here
  };

  return (
    <View style={styles.container}>
      <Header
        title="Equity Simulator"
        customIcon={require('../../../assets/icon/backarrow.png')}
        onIconPress={() => console.log('Back pressed')}
      />

      <ScrollView contentContainerStyle={{ paddingBottom: hp(5) }}>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum is simply dummy text of the printing and type
          setting industry.
        </Text>

        <View style={styles.formSection}>
          {[
            { label: 'Capital', value: winRate, setter: setWinRate },
            { label: 'Win Rate', value: winRate, setter: setWinRate },
            {
              label: 'RRR',
              value: rrr,
              setter: setRRR,
              step: 0.1,
              min: 0.1,
              max: 10,
            },
            { label: 'Iterations', value: iterations, setter: setIterations },
            { label: 'Lines', value: lines, setter: setLines, max: 20 },
          ].map((item, idx) => (
            <View key={idx} style={styles.card}>
              <Text style={styles.label}>{item.label}</Text>
              <InputSpinner
                min={item.min ?? 0}
                max={item.max ?? 1000}
                step={item.step ?? 1}
                value={item.value}
                onChange={item.setter}
                height={hp(5.5)}
                style={styles.spinner}
                inputStyle={styles.inputText}
                buttonStyle={styles.button}
                buttonLeft={
                  <Icon name="arrow-back-ios" size={wp(4)} color="#000" />
                }
                buttonRight={
                  <Icon name="arrow-forward-ios" size={wp(4)} color="#000" />
                }
              />
            </View>
          ))}

          <Text style={styles.label}>Risk Type</Text>
          <View style={styles.toggleRow}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                riskType === 'fixed' && styles.toggleActive,
              ]}
              onPress={() => setRiskType('fixed')}
            >
              <Text style={styles.toggleText}>Risk</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                riskType === 'percentage' && styles.toggleActive,
              ]}
              onPress={() => setRiskType('percentage')}
            >
              <Text style={styles.toggleText}>Risk Percentage</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Risk</Text>
            <InputSpinner
              min={1000}
              max={1000000}
              step={1000}
              value={risk}
              onChange={setRisk}
              height={hp(5.5)}
              style={styles.spinner}
              inputStyle={styles.inputText}
              buttonStyle={{
                borderRadius: wp(100),
                width: wp(5),
                height: wp(10),
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              buttonLeft={
                <Icon name="arrow-back-ios" size={wp(5)} color="#000" />
              }
              buttonRight={
                <Icon name="arrow-forward-ios" size={wp(5)} color="#fff" />
              }
            />
          </View>

          <TouchableOpacity style={styles.runButton} onPress={handleRun}>
            <Text style={styles.runButtonText}>Run</Text>
          </TouchableOpacity>

          {showResults && (
            <View style={styles.resultCard}>
              {[
                ['Min Equity', '-180,000'],
                ['Max Equity', '10,000'],
                ['Max Consecutive winners', '6'],
                ['Max Consecutive losers', '6'],
                ['Max Drawdown', '3,700.00%'],
                ['Avg Drawdown', '1,562.04%'],
                ['Avg Max Drawdown', '2,701.67%'],
              ].map(([title, value], i) => (
                <View key={i} style={styles.resultRow}>
                  <Text style={styles.resultLabel}>{title}</Text>
                  <Text style={styles.resultValue}>{value}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default EquitySimulator;

const getStyles = (wp: (val: number) => number, hp: (val: number) => number) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    description: {
      fontSize: wp(3.8),
      color: '#333',
      margin: hp(2.5),
      marginBottom: 0,
    },
    formSection: {
      paddingHorizontal: wp(5),
      paddingTop: hp(2),
    },
    label: {
      fontSize: wp(3.8),
      fontWeight: '500',
      marginBottom: hp(1),
      color: '#333',
    },
    card: {
      backgroundColor: '#C9FFEE',
      borderRadius: wp(4),
      padding: wp(4),
      marginVertical: hp(1),
      borderWidth: 1,
      borderColor: '#C9FFEE',
    },
    spinner: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      borderWidth: 1,
      borderColor: '#D7D7D7',
    },
    inputText: {
      fontSize: wp(4),
      fontWeight: '600',
      color: '#000',
    },
    button: {
      backgroundColor: '#red',
    },
    toggleRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: hp(1.5),
      gap: wp(3),
    },
    toggleButton: {
      flex: 1,
      paddingVertical: hp(1.2),
      backgroundColor: '#f0f0f0',
      borderRadius: wp(5),
      alignItems: 'center',
    },
    toggleActive: {
      backgroundColor: '#fff',
    },
    toggleText: {
      fontSize: wp(4),
      fontWeight: '500',
      color: '#000',
    },
    runButton: {
      backgroundColor: '#74FFD3',
      paddingVertical: hp(2),
      borderRadius: wp(6),
      marginTop: hp(3),
      alignItems: 'center',
    },
    runButtonText: {
      fontSize: wp(4.5),
      fontWeight: '600',
      color: '#000',
    },
    resultCard: {
      backgroundColor: '#fff',
      borderRadius: wp(3),
      marginTop: hp(3),
      paddingVertical: hp(2),
      paddingHorizontal: wp(4),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    resultRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      paddingVertical: hp(1),
    },
    resultLabel: {
      fontSize: wp(4),
      color: '#333',
    },
    resultValue: {
      fontSize: wp(4),
      fontWeight: '600',
      color: '#000',
    },
  });
