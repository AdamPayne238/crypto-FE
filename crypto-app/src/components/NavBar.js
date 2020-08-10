import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
    

    return(
        <div className="nav-container">
            <Link to="/">List</Link>
            <Link to="calc">Calculator</Link>
            <Link to="chart">Chart</Link>
        </div>
    )
}

export default NavBar