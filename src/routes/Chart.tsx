import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { type } from "os";

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

interface ChartProps {
  coinId: string;
}

function Chart() {
  const coinId = useOutletContext() as ChartProps["coinId"];
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
    // <div>
    //   {isLoading ? (
    //     "Chart Loading..."
    //   ) : (
    //     <ApexChart
    //       type="line"
    //       series={[
    //         {
    //           name: "price",
    //           data: data?.map((price) => Number(price.close)) as number[],
    //         },
    //       ]}
    //       options={{
    //         theme: {
    //           mode: "dark",
    //         },
    //         chart: {
    //           height: 300,
    //           width: 500,
    //           toolbar: {
    //             show: false,
    //           },
    //           background: "transparent",
    //         },
    //         stroke: {
    //           curve: "smooth",
    //           width: 4,
    //         },
    //         grid: {
    //           show: false,
    //         },
    //         xaxis: {
    //           labels: { show: false },
    //           axisTicks: { show: false },
    //           axisBorder: { show: false },
    //           // categories: data?.map((price) => new Date(price.time_close)),
    //           categories: data?.map((price) => price.time_close),
    //           type: "datetime",
    //         },
    //         yaxis: {
    //           show: false,
    //         },
    //         fill: {
    //           type: "gradient",
    //           gradient: {
    //             gradientToColors: ["#0be881"],
    //             stops: [0, 100],
    //           },
    //         },
    //         colors: ["#0fbcf9"],
    //         tooltip: {
    //           y: {
    //             formatter: (value) => `$${value.toFixed(2)}`,
    //           },
    //         },
    //       }}
    //     />
    //   )}
    // </div>
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
            theme: {
              mode: "dark",
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
