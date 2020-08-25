import React, { useState, useEffect  } from 'react'

import './Calc.scss'


const CoinCalculator = (props) => {

    const [ profit, setProfit ] = useState(0)
   

    console.log(props.coinId)




    return(
        <div className="coin-calculator-container">
            <h1>Calculate Profit</h1>

            <button onClick={() => props.setCoinId("bitcoin")}>Select Coin</button>
            <button onClick={() => props.selectCoin()}>Query Coin</button>

            <div>
                <p>If I invest</p> 
                <input type="text" placeholder="$0" name="Crypto" />
            </div>

            <div>
                <p>in</p>
                    <input type="text" placeholder="Cryptocurrency" name="Crypto" onClick={() => props.selectCoin()} /> 
                {/* <p>today,</p> */}
            </div>

            <div>
                <p>and it goes up to</p><input type="text" placeholder="$0" name="Crypto" />
            </div>

            <div>
                <p>I will make ${profit}</p>
            </div>
            
            
        </div>
    )
}

export default CoinCalculator