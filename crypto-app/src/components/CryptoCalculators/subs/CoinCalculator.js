import React, { useState, useEffect  } from 'react'
import { useInputStr, useInputInt } from '../../../global/Hooks'
import './Calc.scss'


const CoinCalculator = (props) => {

    // const [ profit, setProfit ] = useState(0)
    const { value, bind, reset } = useInputStr('')
    const { value: buy, bind: bindBuy, reset: resetBuy } = useInputInt(0)
    const { value: profit, bind: profitBind, reset: resetProfit } = useInputInt(0)

    useEffect(() => {
        console.log("coinId", props.coinId)
        console.log("coinData", props.coinData)
  
      }, [props.coinId, props.coinData])

    // console.log(props.coinId)
    // console.log("COIN DATA", props.coin)


    async function handleSubmit(event) {
        event.preventDefault()
        props.setCoinId(value)
        props.selectCoin()
        reset()
        resetBuy()
        resetProfit()
    }


    return(
        <div className="coin-calculator-container">
            <h1>Calculate Profit</h1>

            <form onSubmit={handleSubmit}>
                
                <div>
                    <p>If I invest</p> 
                    <input type="text" placeholder="$0" name="Crypto" />
                </div>

                <div>
                    <p>in</p>
                        <input type="text" placeholder="Cryptocurrency" name="Crypto" {...bind}  /> 
               
                </div>

                <div>
                    <p>and it goes up to</p><input type="text" placeholder="$0" name="Crypto" />
                </div>
{/* 
                <input type="submit" value="Submit" /> */}
                <button onClick={handleSubmit}>CLICK</button>
            </form>

            <div>
                <p>I will make ${profit}</p>
            </div>
            
            
        </div>
    )
}

export default CoinCalculator