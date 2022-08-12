import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { type } from "os";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface IChartProps {
  coinId: string;
}

function Chart() {
  const isDark = useRecoilValue(isDarkAtom);

  const coinId = useOutletContext() as IChartProps["coinId"];
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    { refetchInterval: 10000 }
  );

  const exceptData = data ?? [];
  const chartData = exceptData?.map((i) => {
    return {
      x: new Date(i.time_close),
      y: [Number(i.open), Number(i.high), Number(i.low), Number(i.close)],
    };
  });
  return (
    <div>
      {isLoading ? (
        "Chart Loading..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: chartData,
            },
          ]}
          options={{
            chart: {
              type: "candlestick",
              width: 500,
              height: 300,
              background: "transparent",
              toolbar: {
                show: false,
              },
              zoom: {
                enabled: false,
              },
            },
            grid: {
              borderColor: "#808e9b",
            },
            theme: {
              mode: isDark ? "dark" : "light",
            },
            xaxis: {
              labels: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
            yaxis: {
              show: false,
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
