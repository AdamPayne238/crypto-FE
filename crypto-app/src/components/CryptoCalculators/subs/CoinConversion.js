import React, { useState } from 'react'

import './Calc.scss'


const CoinConversion = (props) => {

    const [ usd, setUsd ] = useState(0)

    return(
        <div className="coin-conversion-container">
            <h1>Crypto to USD</h1>
            <input type="text" placeholder="Choose your coin" name="Crypto" />
            <input type="text" placeholder="Choose your amount" name="Crypto" />
            <p>USD: ${usd}</p>
        </div>
    )
}

export default CoinConversion