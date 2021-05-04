import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { UserLogin, UserLogout} from "../../Redux/Actions/auth"
import "./styles/style.css";

const Navbar = () =>{
    const dispatch = useDispatch()
    const { isLogin,data } = useSelector((state) => state.UserLogin)

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">
                    <img src={process.env.PUBLIC_URL + '/svg/logo.svg'} alt="logo tickitz" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="mx-3 nav-item">
                            <Link to={`/movie`} className="nav-link text-black">Movies</Link>
                        </li>
                        <li className="mx-3 nav-item">
                            <Link to='#' className="nav-link text-black">Cinemas</Link>
                        </li>
                        <li className="mx-3 nav-item">
                            <Link to='#' className="nav-link text-black">Buy Ticket</Link>
                        </li>
                    </ul>
                    {isLogin != true ?(
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle text-black" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Location
                            </span>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#">Action</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Another action</a>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className='mx-2 my-auto nav-item'>
                            <Link to='#' className="navbar-search right">
                                <img src={process.env.PUBLIC_URL + '/svg/search.svg'} alt="icon search" />
                            </Link>
                        </li>
                        <li className='mx-2 nav-item'>
                            <Link to='/register' className="navbar-photo-profile right">
                                <button className='btn btn-outline-primary'>Sign Up</button>
                            </Link>
                        </li>
                        <li className='mx-2 nav-item'>              
                            <Link to='/login' className="navbar-photo-profile right">
                                <button className='btn btn-purple'>Sign In</button>
                            </Link>
                        </li>
                    </ul>
                    ):
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle text-black" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Location
                            </span>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#">Action</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Another action</a>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className='mx-3 my-auto nav-item'>
                            <img src={process.env.PUBLIC_URL + '/svg/search.svg'} alt="icon search" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false"/>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg" aria-labelledby="navbarDropdown2">
                                <li className='dropdown-item'>
                                    <form>
                                        <div className="row mb-3">
                                            <div className='col-12'>
                                                <input type="text" class="form-control" placeholder="Type your email" aria-label="First name"/>
                                            </div>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </li>
                        <li className='mx-3 nav-item'>
                        <li className="nav-item dropdown navbar-photo-profile right">
                            {data.data.photo == undefined || data.data.photo === null ?
                                <img src={process.env.PUBLIC_URL + '/logo/no-photo.png'} alt="profile" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false"/> :
                                <img src={`http://localhost:5000${data.photo}`} alt="profile" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false"/>
                            } 
                           {/*  <img src={process.env.PUBLIC_URL + '/logo/no-photo.png'} alt="profile" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false"/> */}
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown3">
                                <li className='dropdown-item'>
                                    <Link className='no-style fw-bold'>
                                        <span className="text-black">My Profile</span>
                                    </Link>
                                </li>
                                <li className='dropdown-item' onClick={()=>{ if (window.confirm('Are you sure you wish to delete this item?')) dispatch(UserLogout()) } }>
                                    <span className="fw-bold text-danger">Logout</span>
                                </li>
                            </ul>
                        </li>
                        </li>
                    </ul>
                    }
                </div>
            </div>
        </nav>

       /*  <nav className="navbar-top sticky-top">
        <div className="navbar-top-left">
            <Link to='#' className="brand">
                <img src={process.env.PUBLIC_URL + '/svg/logo.svg'} alt="logo tickitz" />
            </Link>
            <ul className="nav">
                <li className="item">
                    <Link to={`/movie`} className="link">Movies</Link>
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
                    <img src={process.env.PUBLIC_URL + '/logo/no-photo.png'} alt="profile" /> :
                    {/* {data.photo === "undefined" || data.photo === null ?
                        <img src={process.env.PUBLIC_URL + '/logo/no-photo.png'} alt="profile" /> :
                        <img src={`http://localhost:5000${data.photo}`} alt="profile" />
                    } 
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
        </nav> */
    )
}

export default Navbar