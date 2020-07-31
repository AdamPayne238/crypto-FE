import React from 'react'
import { CoinDataProvider } from './global/Store'

// import NavBar from './components/NavBar'
import CryptoList from './components/CryptoList'


function App() {





  return (
    <div className="App">

        <CoinDataProvider>

          <CryptoList />
          
        </CoinDataProvider>
    </div>

  )
}

export default App
