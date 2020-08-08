import React, { useEffect, useState } from 'react'
import CoinCalculator from "./subs/CoinCalculator"
import CoinConversion from "./subs/CoinConversion"
import EthereumCalculator from "./subs/EthereumCalculator"
import SatoshiCalculator from "./subs/SatoshiCalculator"
import axios from 'axios'


const CryptoCalc = () => {

    const [ coinData, setCoinData ] = useState([])
    const [ coinId, setCoinId ] = useState("")

    useEffect(()  => {
        axios
          .get(
            `https://api.coingecko.com/api/v3/coins/${coinId}`
          )
          .then(res => setCoinData(res.data))
          .catch(err => console.log(err))
      }, [])


    return(
        <div>
            <h1>Coin Calcs</h1>
            <CoinCalculator coinData={coinData} setCoinData={setCoinData} />
            <CoinConversion coinData={coinData} setCoinData={setCoinData} />
            <EthereumCalculator coinData={coinData} setCoinData={setCoinData} />
            <SatoshiCalculator coinData={coinData} setCoinData={setCoinData} />
        </div>
    )


}

export default CryptoCalc