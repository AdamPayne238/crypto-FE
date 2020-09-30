import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

// Context
const StoreContext = createContext()

// Custom Hook
export const useStore = () => useContext(StoreContext)

// Provider
export function CoinDataProvider({ children }) {

    const [ coinData, setCoinData ] = useState([])

    useEffect(()  => {
        axios
          .get("https://api.coingecko.com/api/v3/coins/")
          .then(res => setCoinData(res.data))
          .catch(err => console.log(err))
      }, [])



      console.log("coinData Store.js", coinData)

    return (
        <StoreContext.Provider value={coinData}>
                { children }
        </StoreContext.Provider>
    )
}
