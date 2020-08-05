import { useEffect, useState } from "react"
import React, { useEffect, useState } from 'react'


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
    

    export const SatoshiCalculator = () => {
        // Satoshi Calc
        // Coin Price / Bitcoin Price = Satoshi Value
    }
    
    export const EthereumCalculator = () => {
        // Ethereum Calc
    
    }
    
    export const CoinCalculator = () => {
        // Coin Calculator
        // If I invest (investment) in (cryptoCoin) today (todaysPrice) and it goes up to (X variable price) 
        // It would be worth (potentialPriceCalculation)
    }
    
    export const CoinConversion = () => {
        // Conver Coins
    
    
    }


    return(
        <div>
            <h1>Coin Calc</h1>
        </div>
    )


}

export default CryptoCalc