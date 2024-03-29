import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { UserLogin, UserLogout } from "../../Redux/Actions/auth"
import { FetchUser } from "../../Redux/Actions/user"
import "./styles/style.css";
// import { FetchMovieResult } from '../../Redux/Actions/movie'

const Navbar = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { isLogin, data } = useSelector((state) => state.UserLogin)
    const { data: user } = useSelector((state) => state.FetchUser)
    const { data: movieResult } = useSelector((state) => state.FetchMovieResult)

    useEffect(() => {
        if (isLogin === true) {
            dispatch(FetchUser(data.data))
        }
    }, [])

    const [formData, setFormData] = useState({
        title: ''
    })

    console.log(movieResult)
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if(formData.title !== ''){
                history.push(`/movie/search?title=${formData.title}`)
            }
        }
    }
    const onClick = (e) => {
        if(formData.title !== ''){
            e.preventDefault();
            if(formData.title !== ''){
                history.push(`/movie/search?title=${formData.title}`)
            }
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <img src={process.env.PUBLIC_URL + '/svg/logo.svg'} alt="logo tickitz" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-toggler-custom-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className='navbar-nav d-flex d-sm-flex d-md-none'>
                        <form>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <input required autoComplete="off" id="input" type="text" class="form-control" placeholder="Search Movie..." aria-label="search" onInput={(e) => {
                                        setFormData({ ...formData, title: e.target.value })
                                    }} onKeyPress={(e) => onKeyPress(e)} />
                                </div>
                            </div>
                        </form>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="mx-3 nav-item text-center">
                            <Link to={`/movie`} className="nav-link text-black">Movies</Link>
                        </li>
                        <li className="mx-3 nav-item text-center">
                            <Link to='/cinema' className="nav-link text-black">Cinemas</Link>
                        </li>
                        <li className="mx-3 nav-item text-center">
                            <Link to='/payment' className="nav-link text-black">Buy Ticket</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item dropdown text-center">
                            <span className="nav-link dropdown-toggle text-black" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Location
                            </span>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <span className="dropdown-item text-center">Action</span>
                                </li>
                                <li>
                                    <span className="dropdown-item text-center">Another action</span>
                                </li>
                                <li><span className="dropdown-item text-center">Something else here</span></li>
                            </ul>
                        </li>
                        <div className='d-none d-sm-none d-md-flex'>
                            <li className='mx-2 my-auto nav-item dropstart'>
                                <img src={process.env.PUBLIC_URL + '/svg/search.svg'} alt="icon search" className='nav-link dropdown-toggle' id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                    onClick={(e) => onClick(e)} />
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg" aria-labelledby="navbarDropdown2">
                                    <li>
                                        <form>
                                            <div className="row mb-3">
                                                <div className="col-12">
                                                    <input required autoComplete="off" id="input" type="text" class="form-control" placeholder="Search Movie..." aria-label="search" onInput={(e) => {
                                                        setFormData({ ...formData, title: e.target.value })
                                                    }} onKeyPress={(e) => onKeyPress(e)} />
                                                </div>
                                            </div>
                                        </form>
                                    </li>
                                </ul>
                            </li>
                            {isLogin != true ? (
                                <>
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
                                </>
                            ) :
                                <li className="nav-item dropdown navbar-photo-profile right">
                                    {user.photo == undefined || user.photo == null ?
                                        <img src={process.env.PUBLIC_URL + '/logo/no-photo.png'} alt="profile" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false" /> :
                                        <img src={`${process.env.REACT_APP_API_IMG_URL}${user.photo}`} alt="profile" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false" />
                                    }
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown3">
                                        <Link className='no-style' to='/profile'>
                                            <li className='dropdown-item fw-bold'>
                                                <span className="text-black">My Profile</span>
                                            </li>
                                        </Link>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li className='dropdown-item' onClick={() => { if (window.confirm('Are you sure? ')) dispatch(UserLogout()); history.replace('/') }}>
                                            <span className="fw-bold text-danger">Logout</span>
                                        </li>
                                    </ul>
                                </li>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar