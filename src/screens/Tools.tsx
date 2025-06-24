import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useResponsive } from 'react-native-responsive-hook';

interface Tool {
  label: string;
  icon: string;
}

const tools: Tool[] = [
  { label: 'Ticker', icon: 'leaderboard' },
  { label: "Trader's Analysis", icon: 'analytics' },
  { label: 'Equity Simulator', icon: 'bar-chart' },
  { label: 'Statistical App', icon: 'insert-chart' },
];

const ToolsScreen: React.FC = () => {
  const { wp, hp } = useResponsive();

  return (
    <View style={styles.container}>
      <Header title="Tools" />
      <View style={[styles.cardContainer, { paddingVertical: hp(2), paddingHorizontal: wp(5) }]}>
        {tools.map(tool => (
          <TouchableOpacity
            key={tool.label}
            style={[
              styles.toolCard,
              {
                padding: wp(4),
                borderRadius: wp(2),
                marginBottom: hp(1.5),
              },
            ]}
            onPress={() => {}}
          >
            <View style={styles.iconRow}>
              <MaterialIcons
                name={tool.icon}
                size={wp(6)}
                color="#333"
                style={{ marginRight: wp(3) }}
              />
              <Text style={[styles.toolText, { fontSize: wp(4) }]}>{tool.label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={wp(5)} color="#333" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ToolsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardContainer: {
    // padding applied responsively
  },
  toolCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D7D7D7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toolText: {
    fontWeight: 'bold',
    color: '#333',
  },
});
