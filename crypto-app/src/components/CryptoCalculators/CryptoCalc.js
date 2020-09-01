import React, { useEffect, useState } from 'react'
import CoinCalculator from "./subs/CoinCalculator"
import CoinConversion from "./subs/CoinConversion"
import axios from 'axios'
import { Route, Link } from 'react-router-dom'


const CryptoCalc = () => {

    const [ coinData, setCoinData ] = useState({})
    const [ coinId, setCoinId ] = useState("")

    const selectCoin = () => {
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        )
        .then(res => setCoinData(res.data))
        .catch(err => console.log(err))
    }


    return(
        <div>

            <div className="calc-nav">
              <Link to="/calc/coin-calculator">Calculator</Link>
              <Link to="/calc/coin-conversion">Conversion</Link>
            </div>

            <Route  
              path="/calc/coin-calculator" 
                render={() => <CoinCalculator 
                  coinData={coinData} 
                  setCoinData={setCoinData}
                  coinId={coinId}
                  setCoinId={setCoinId}
                  selectCoin={selectCoin}
              />} />

        

            <Route  
              path="/calc/coin-conversion" 
              component={CoinConversion} 
            />
    
        </div>
    )


}

export default CryptoCalc