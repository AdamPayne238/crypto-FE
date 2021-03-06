import React from 'react'
import { CoinDataProvider } from './global/Store'
import NavBar from './components/NavBar'
import CryptoList from './components/CryptoList'
import CryptoCalc from './components/CryptoCalculators/CryptoCalc'
import CryptoChart from './components/CryptoChart'
import { Route } from 'react-router-dom'
import './App.scss'




function App() {





  return (
    <div className="App">

        <CoinDataProvider>

          <NavBar />
          <Route exact path="/" component={CryptoList} />
          <Route path="/calc" component={CryptoCalc} />
          <Route exact path="/chart" component={CryptoChart} />
    
        </CoinDataProvider>
    </div>

  )
}

export default App
