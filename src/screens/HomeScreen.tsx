import React from 'react';
import { Text, View } from 'react-native';
import CandleChart from '../components/components/CandleChart';

const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Bitcoin / USD</Text>
      <CandleChart />
    </View>
  );
};
export default HomeScreen;
