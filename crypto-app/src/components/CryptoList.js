import React from 'react'
import {useStore} from '../global/Store'
// import { Container, Row, Col } from 'reactstrap'
import './CryptoList.scss'


const CryptoList = () => {

    const coinData  = useStore()
    console.log("coinData CryptoList", coinData)

    return (
        <>

        <div className="title">
             <h1>Top 50 Cryptocurrencies by Market Cap</h1>
        </div>
        <div className="coin-container">

           
      
            {coinData.map(data => (
                <>
                   
                        <div className="crypto-coin">

                            <div className="name">
                                <img src={data.image.small}></img>
                                <h1>{data.name}</h1>
                            </div>

                            <div className="crypto">
                                <h2>{data.symbol.toUpperCase()}</h2>
                                
                            </div>

                            <p>Market Cap: {data.market_data.market_cap.usd}</p>
                            <p>Current Price: ${data.market_data.current_price.usd}</p>
                            <p>24H High: ${data.market_data.high_24h.usd}</p>
                            <p>24H Low: ${data.market_data.low_24h.usd}</p>
                            <p>Circulation: {data.market_data.circulating_supply}</p>
                            <p>Supply: {data.market_data.total_supply ? data.market_data.total_supply : "Unknown"}</p>
                        </div>
                    
                </>
            ))}

        </div>
        </>
    )
}

export default CryptoList

