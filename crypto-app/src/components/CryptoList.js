import React from 'react'
import {useStore} from '../global/Store'

const CryptoList = () => {

    const coinData  = useStore()
    console.log("coinData CryptoList", coinData)

    return (
        <div>
            {coinData.map(data => (
                <>
                    {/* <h1>{console.log(data)}</h1> */}
                    <div className="crypto-coin">
                        <h1>{data.name}</h1>
                        <h2>({data.symbol})</h2>
                        <img src={data.image.small}></img>
                    </div>
                </>
            ))}
        </div>
    )
}

export default CryptoList

