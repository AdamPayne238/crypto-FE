import React, { useState } from 'react'

import './Calc.scss'


const CoinCalculator = (props) => {

    const [ profit, setProfit ] = useState(0)

    return(
        <div className="coin-calculator-container">
            <h1>Calculate Profit</h1>

            <div>
                <p>If I invest <input type="text" placeholder="Choose your amount" name="Crypto" /></p>
            </div>

            <div>
                <p>in <input type="text" placeholder="Choose your coin" name="Crypto" /> today, </p>
            </div>

            <div>
                <p>and it goes up to $<input type="text" placeholder="USD Amount" name="Crypto" /></p>
            </div>

            <div>
                <p>I will make ${profit}</p>
            </div>
            
            
        </div>
    )
}

export default CoinCalculator