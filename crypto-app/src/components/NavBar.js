import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    

    return(
        <div>
            <h1>NavBar</h1>
            <Link to="/">Crypto List</Link>
            <Link to="calc">Crypto Calc</Link>
            <Link to="chart">Crypto Chart</Link>
        </div>
    )
}

export default NavBar