import React from 'react'
import { Link } from 'react-router-dom'
import './styles/style.css'
import { useDispatch, useSelector } from "react-redux"
import { UserLogin, UserLogout} from "../../Redux/Actions/auth"
const Navbar = () =>{
    const dispatch = useDispatch()
    const { isLogin } = useSelector((state) => state.UserLogin)
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
            {isLogin == true ?(
                <div className="navbar-top-right">
                    <Link to='#' className="dropdown-toggle right">Location</Link>
                    <Link to='#' className="navbar-search right">
                        <img src={process.env.PUBLIC_URL + '/svg/search.svg'} alt="icon search" />
                    </Link>
                    <Link to='#' className="navbar-photo-profile right">
                        <img src={process.env.PUBLIC_URL + '/svg/avatar-a.svg'} alt="profile" onClick={()=>{
                        alert("Bye ! ")
                        dispatch(UserLogout())
                        }}/>
                    </Link>
                </div>
            ):(
                <div className="navbar-top-right">
                    <Link to='#' className="dropdown-toggle right">Location</Link>
                    <Link to='#' className="navbar-search right">
                        <img src={process.env.PUBLIC_URL + '/svg/search.svg'} alt="icon search" />
                    </Link>
                    <Link to='/register' className="navbar-photo-profile right">
                        <button className='btn btn-outline-primary'>Sign Up</button>
                    </Link>
                    <Link to='/login' className="navbar-photo-profile right">
                        <button className='btn btn-purple'>Sign In</button>
                    </Link>
                </div>
            )
            }
        </nav>
    )
}

export default Navbar