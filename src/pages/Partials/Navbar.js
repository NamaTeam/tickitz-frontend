import React from 'react'
import { Link } from 'react-router-dom'
import './styles/style.css'

const Navbar = () =>{
    return(
        <nav className="navbar-top fixed-top">
            <div className="navbar-top-left">
                <Link to='#' className="brand">
                    <img src={process.env.PUBLIC_URL + '/svg/logo.svg'} alt="logo tickitz" />
                </Link>
                <ul className="nav">
                    <li className="item">
                        <Link to='#' className="link">Movies</Link>
                    </li>
                    <li className="item">
                        <Link to='#' className="link">Cinemas</Link>
                    </li>
                    <li className="item">
                        <Link to='#' className="link">Buy Ticket</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-top-right">
                <Link to='#' className="dropdown-toggle right">Location</Link>
                <Link to='#' className="navbar-search right">
                    <img src={process.env.PUBLIC_URL + '/svg/search.svg'} alt="icon search" />
                </Link>
                <Link to='#' className="navbar-photo-profile right">
                    <img src={process.env.PUBLIC_URL + '/svg/avatar-a.svg'} alt="profile" />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar