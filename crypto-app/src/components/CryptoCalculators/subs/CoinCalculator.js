import React, { useState } from 'react'

import './Calc.scss'


const CoinCalculator = (props) => {

    const [ profit, setProfit ] = useState(0)

    return(
        <div className="coin-calculator-container">
            <h1>Calculate Profit</h1>

            <div>
                <p>If I invest</p> 
                <input type="text" placeholder="$0" name="Crypto" />
            </div>

            <div>
                <p>in</p>
                    <input type="text" placeholder="Cryptocurrency" name="Crypto" /> 
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