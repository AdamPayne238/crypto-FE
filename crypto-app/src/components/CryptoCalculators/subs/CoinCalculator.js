import React, { useState } from 'react'


const CoinCalculator = (props) => {

    const [ profit, setProfit ] = useState(0)

    // Coin Calculator
    // If I invest (investment) in (cryptoCoin) today (todaysPrice) and it goes up to (X variable price) 
    // It would be worth (potentialPriceCalculation)
    return(
        <div>
            <h1>CoinCalculator</h1>
            <p>If I invest 
                <input type="text" placeholder="Choose your amount" name="Crypto" />
                in <input type="text" placeholder="Choose your coin" name="Crypto" />
                today and it goes up to
                <input type="text" placeholder="USD Amount" name="Crypto" />
                I will make ${profit}
            </p>
            
            
        </div>
    )
}

export default CoinCalculator