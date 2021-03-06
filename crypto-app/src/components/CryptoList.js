import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useStore } from '../global/Store'
import './CryptoList.scss'


const CryptoList = () => {

    const coinData  = useStore()
    const [ search, setSearch ] = useState('')
    const [ selected, setSelected ] = useState()
    const [ filteredCoins, setFilteredCoins ] = useState([])
    const [ coin, setCoin ] = useState()

    useEffect(() => {
        console.log("SELECTED", selected)
        console.log("COIN", coin)

        setFilteredCoins(
            coinData.filter(coin => {
                return coin.name.toLowerCase().includes(search.toLocaleLowerCase()) 
                        ||
                       coin.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            })
        )
    }, [search, coinData, selected, coin])

    function getCoin(){
        // https://api.coingecko.com/api/v3/coins/bitcoin
        axios
            .get(`https://api.coingecko.com/api/v3/coins/${selected}`)
            .then(res => setCoin(res.data))
            .catch(err => console.log(err))
    }


    return (
        <>
        <div className="title">
             <h1>Top 50 Cryptocurrencies by Market Cap</h1>
        </div>

        <div className="search-bar">
            {/* <h2> Search your favorite crypto</h2> */}
            <input type="text" placeholder="Search Crypto" onChange={event => setSearch(event.target.value)}  />
        </div>

        <div className="coin-container">
      
            {filteredCoins.map((data, index) => (
                <>
                   
                        <div className="crypto-coin" onClick={ () => setSelected(data.id)}>

                            <div className="name">
                                <img src={data.image.small} alt="Crypto Coin Image"></img>
                                <h1>{data.name}</h1>
                            </div>

                            <div className="crypto">
                                <h2>{data.symbol.toUpperCase()}</h2>
                            </div>

                            <p>Rank: {index + 1}</p>
                            <p>Market Cap: {data.market_data.market_cap.usd}</p>
                            <p>Current Price: ${data.market_data.current_price.usd}</p>
                            <p>24H High: ${data.market_data.high_24h.usd}</p>
                            <p>24H Low: ${data.market_data.low_24h.usd}</p>
                            <p>Circulation: {data.market_data.circulating_supply}</p>
                            <p>Supply: {data.market_data.total_supply ? data.market_data.total_supply : "Unknown"}</p>
                        </div>
                    
                </>
            ))}

            {selected && (
                <div className="selected-coin">
                    <button onClick={() => setSelected(false)}>Close</button>
                    <h1>Selected {selected}</h1>
                </div>
            )}

        </div>
        </>
    )
}

export default CryptoList

