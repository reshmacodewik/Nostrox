import React, { useEffect, useState } from 'react';
import { CandlestickChart, TCandle } from 'react-native-wagmi-charts';
import { fetchCandleData } from '../../utils/polygonService';

const CandleChart = () => {
  const [data, setData] = useState<TCandle[]>([]);

  useEffect(() => {
    (async () => {
      const candleData = await fetchCandleData();
      setData(candleData);
    })();
  }, []);

  console.log(data , ":----xxxxxxxxxxxxxxx----");

  return (
    <CandlestickChart.Provider data={data}>
      <CandlestickChart height={250}>
        <CandlestickChart.Candles />
        <CandlestickChart.Crosshair />
      </CandlestickChart>
    </CandlestickChart.Provider>
  );
};

export default CandleChart;
