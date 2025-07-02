import axios from 'axios';

const API_KEY = '5bwUQkD9mp7owpncRuSiKjuzkfqJcZg1';

export const fetchCandleData = async () => {
  const url = `https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/2024-06-01/2024-06-30?apiKey=${API_KEY}`;

  const response = await axios.get(url);
  console.log(response ,"response---------");
  const candles = response.data.results.map((item: any) => ({
    timestamp: item.t,
    open: item.o,
    high: item.h,
    low: item.l,
    close: item.c,
  }));

  return candles;
};
