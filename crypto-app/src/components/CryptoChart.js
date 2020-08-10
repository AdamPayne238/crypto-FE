import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Chart from './Chart'
import './CryptoChart.scss'


const CryptoChart = () => {

    const [ coinData, setCoinData ] = useState([])

    useEffect(()  => {
        axios
        .get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true`
        )
        .then(res => setCoinData(res.data))
        .catch(err => console.log(err))
    }, [])


    return(
        <div className="charts">
        {coinData.map(coin => (
          <div className="chart__container" key={coin.name}>
                 <div className="coin__logo">
              <img src={coin.image} height="40" alt={coin.name} />
            </div>
            <div>
              <h2 className="coin__title">{coin.name}</h2>
              <h4 className="coin__symbol">{coin.symbol.toUpperCase()}</h4>
            </div>
            <Chart sparklineData={coin.sparkline_in_7d.price} />
          </div>
        ))}
      </div>
    )
}

export default CryptoChart