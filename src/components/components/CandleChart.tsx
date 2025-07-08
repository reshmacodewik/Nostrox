import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { CandlestickChart, TCandle } from 'react-native-wagmi-charts';
import { fetchCandleData } from '../../utils/polygonService';
import { useResponsive } from 'react-native-responsive-hook';

type CandleChartProps = {
  yAxisLabels?: string[];
  xAxisLabels?: string[];
  xAxisIcons?: any[];
};

const CandleChart: React.FC<CandleChartProps> = ({
  yAxisLabels = ['$23k', '$22k', '$21k', '$20k', '$19k'],
  xAxisLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  xAxisIcons = [
    require('../../../assets/icon/target.png'),
    require('../../../assets/icon/line.png'),
    require('../../../assets/icon/brush.png'),
    require('../../../assets/icon/candle.png'),
    require('../../../assets/icon/expand.png'),
  ],
}) => {
  const { wp, hp } = useResponsive();
  const [data, setData] = useState<TCandle[]>([]);

  useEffect(() => {
    (async () => {
      const candleData = await fetchCandleData();
      setData(candleData);
    })();
  }, []);

  return (
    <View>
      {/* Chart Card */}
      <View style={styles.chartCard}>
        <View style={styles.chartRow}>
          {/* Y-Axis */}
          <View style={styles.yAxis}>
            {yAxisLabels.map((label, idx) => (
              <Text key={idx} style={styles.yAxisText}>{label}</Text>
            ))}
          </View>

          {/* Candlestick Chart */}
          <View style={styles.chartContainer}>
            <CandlestickChart.Provider data={data}>
              <CandlestickChart height={hp(30)}>
                <CandlestickChart.Candles />
                <CandlestickChart.Crosshair>
                  <CandlestickChart.Tooltip
                    textStyle={styles.tooltipText}
                    boxStyle={styles.tooltipBox}
                  />
                </CandlestickChart.Crosshair>
              </CandlestickChart>
            </CandlestickChart.Provider>
          </View>
        </View>
      </View>

      {/* X-Axis Labels */}
      <View style={styles.xAxisLabelsRow}>
        {xAxisLabels.map((label, idx) => (
          <Text key={idx} style={styles.xAxisText}>{label}</Text>
        ))}
      </View>

      {/* X-Axis Icons */}
      <View style={styles.xAxisIconsRow}>
        {xAxisIcons.map((icon, idx) => (
          <Image key={idx} source={icon} style={styles.xAxisIcon} />
        ))}
      </View>
    </View>
  );
};

export default CandleChart;

const styles = StyleSheet.create({
  chartCard: {
    borderRadius: wp(4),
    marginHorizontal: wp(3),
    marginBottom: hp(1),
    padding: wp(2),
  
  },
  chartRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  yAxis: {
    justifyContent: 'space-evenly',
    height: hp(22),
    marginRight: wp(1.5),
  },
  yAxisText: {
    color: '#000',
    fontSize: wp(3.2),
  },
  chartContainer: {
    flex: 1,
  },
  xAxisLabelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    marginTop: -hp(11), // shift chart labels upward
    marginLeft: wp(10),
  },
  xAxisText: {
    fontSize: wp(3.2),
    color: '#767676',
  },
  xAxisIconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp(1.5),
    marginHorizontal: wp(5),
  },
  xAxisIcon: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
    marginLeft: wp(8),
  },
  tooltipText: {
    fontWeight: 'bold',
    fontSize: wp(3.5),
    color: '#2C2C2E',
  },
  tooltipBox: {
    backgroundColor: '#fff',
    borderRadius: wp(3),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    padding: wp(3),
    alignItems: 'center',
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
