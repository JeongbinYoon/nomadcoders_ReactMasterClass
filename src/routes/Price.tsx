import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinTickers } from "../api";

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 210px;
  height: 170px;
  background-color: #485460;
  padding-top: 30px;
  margin-bottom: 20px;
  color: #d2dae2;
  font-weight: 700;
  span:first-child {
    text-transform: uppercase;
    margin-top: 5px;
  }
  span:nth-child(2) {
    text-transform: uppercase;
    margin-top: 5px;
    font-weight: 400;
  }
  span:nth-child(3) {
    display: inline-block;
    margin-top: 25px;
    font-size: 44px;
    text-transform: uppercase;
  }
  span.percent_red {
    color: #ff3f34;
  }
  span.percent_blue {
    color: #17c0eb;
  }
`;

interface ICoin {
  coinId: string;
}

interface ITickers {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price() {
  const coinId = useOutletContext() as ICoin["coinId"];
  const { isLoading, data } = useQuery<ITickers>(["tickers"], () =>
    fetchCoinTickers(coinId)
  );
  console.log(data?.quotes.USD);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <Tabs>
          <Tab>
            <span>volume change</span>
            <span>[ 24h ]</span>
            {data?.quotes.USD.volume_24h_change_24h! >= 0 ? (
              <span className="percent_red">
                {data?.quotes.USD.volume_24h_change_24h}%
              </span>
            ) : (
              <span className="percent_blue">
                {data?.quotes.USD.volume_24h_change_24h}%
              </span>
            )}
          </Tab>
          <Tab>
            <span>market cap change</span>
            <span>[ 24h ]</span>
            {data?.quotes.USD.market_cap_change_24h! >= 0 ? (
              <span className="percent_red">
                {data?.quotes.USD.market_cap_change_24h}%
              </span>
            ) : (
              <span className="percent_blue">
                {data?.quotes.USD.market_cap_change_24h}%
              </span>
            )}
          </Tab>
          <Tab>
            <span>percentage change</span>
            <span>[ 15m ]</span>
            {data?.quotes.USD.percent_change_15m! >= 0 ? (
              <span className="percent_red">
                {data?.quotes.USD.percent_change_15m}%
              </span>
            ) : (
              <span className="percent_blue">
                {data?.quotes.USD.percent_change_15m}%
              </span>
            )}
          </Tab>
          <Tab>
            <span>percentage change</span>
            <span>[ 1h ]</span>
            {data?.quotes.USD.percent_change_1h! >= 0 ? (
              <span className="percent_red">
                {data?.quotes.USD.percent_change_1h}%
              </span>
            ) : (
              <span className="percent_blue">
                {data?.quotes.USD.percent_change_1h}%
              </span>
            )}
          </Tab>
          <Tab>
            <span>percentage change</span>
            <span>[ 12h ]</span>
            {data?.quotes.USD.percent_change_12h! >= 0 ? (
              <span className="percent_red">
                {data?.quotes.USD.percent_change_12h}%
              </span>
            ) : (
              <span className="percent_blue">
                {data?.quotes.USD.percent_change_12h}%
              </span>
            )}
          </Tab>
          <Tab>
            <span>percentage change</span>
            <span>[ 24h ]</span>
            {data?.quotes.USD.percent_change_24h! >= 0 ? (
              <span className="percent_red">
                {data?.quotes.USD.percent_change_24h}%
              </span>
            ) : (
              <span className="percent_blue">
                {data?.quotes.USD.percent_change_24h}%
              </span>
            )}
          </Tab>
          <Tab>
            <span>percentage change </span>
            <span>[ 7d ]</span>
            {data?.quotes.USD.percent_change_7d! >= 0 ? (
              <span className="percent_red">
                {data?.quotes.USD.percent_change_7d}%
              </span>
            ) : (
              <span className="percent_blue">
                {data?.quotes.USD.percent_change_7d}%
              </span>
            )}
          </Tab>
          <Tab>
            <span>percentage change</span>
            <span>[ 30day ]</span>
            {data?.quotes.USD.percent_change_30d! >= 0 ? (
              <span className="percent_red">
                {data?.quotes.USD.percent_change_30d}%
              </span>
            ) : (
              <span className="percent_blue">
                {data?.quotes.USD.percent_change_30d}%
              </span>
            )}
          </Tab>
        </Tabs>
      )}
    </>
  );
}

export default Price;
