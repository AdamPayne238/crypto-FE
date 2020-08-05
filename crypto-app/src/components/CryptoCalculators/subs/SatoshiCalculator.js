import React, { useEffect, useState } from 'react'

const SatoshiCalculator = (props) => {
    // Satoshi Calc
    // Coin Price / Bitcoin Price = Satoshi Value
    const [ coin, setCoin ] = useState()
    const [ bitcoin, setBitcoin ] = useState()

    console.log("CryptoCalc.js", props.coinData)

    
    console.log("CryptoCalc.js bitcoin", bitcoin)

    const calculate = () => {
        
    }


    return(
        <div>
            <h1>SatoshiCalculator</h1>
        </div>
    )
}

export default SatoshiCalculator