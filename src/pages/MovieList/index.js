import React, { useEffect } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { FetchUser } from "../../Redux/Actions/user"
import { FetchMovie } from "../../Redux/Actions/movie"
import { Link } from "react-router-dom";
import './styles/style.css'


export const MovieList = () => {
    const dispatch = useDispatch()

    const { data: userData } = useSelector((state) => state.UserLogin)
    const { data } = useSelector((state) => state.FetchUser)
    const { data: movieData } = useSelector((state) => state.FetchMovie)

    useEffect(() => {
        dispatch(FetchUser(userData.data))
        dispatch(FetchMovie())
    }, [dispatch, userData])

    const load = () => {
        document.getElementById('tabs-2').style.display = "none";
    }

    let today = new Date().toISOString().slice(0, 10)

    const openBox = (tab, tabTitle) => {
        var i;
        var x = document.getElementsByClassName("movie-list");
        var y = document.getElementsByClassName("box");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < y.length; i++) {
            y[i].classList.remove("active")
        }
        document.getElementById(tab).style.display = "block";
        document.getElementById(tabTitle).classList.add('active');
        
    }

    return (
        <div className="container-fluid bg-grey">
            <nav className="navbar-top fixed-top">
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
                <div className="navbar-top-right">
                    <Link to='#' className="dropdown-toggle right">Location</Link>
                    <Link to='#' className="navbar-search right">
                        <img src={process.env.PUBLIC_URL + '/svg/search.svg'} alt="icon search" />
                    </Link>
                    <Link to='#' className="navbar-photo-profile right">
                        {data.photo === "undefined" || data.photo === null ?
                            <img src={process.env.PUBLIC_URL + '/logo/no-photo.png'} alt="profile" /> :
                            <img src={`http://localhost:5000${data.photo}`} alt="profile" />
                        }
                    </Link>
                </div>
            </nav>

            <div class="container movies">
                <div className="row main">
                    <div className="col-md-12">
                        <div className="movie-box">
                            <div className="box-top">
                                <button className="box active" id="tab1" onClick={() => openBox('tabs-1', 'tab1')}>Now Showing</button>
                                <button className="box" id="tab2" onClick={() => openBox('tabs-2', 'tab2')}>Upcoming Movies</button>
                            </div>

                            {movieData && movieData.map((item) => {
                                if (item.release_date.slice(0, 10) > today) {
                                    return (
                                        <div className="movie-list upcoming" id="tabs-2" onLoad={() => load()}>
                                            <div className="row">
                                                <p>{item.release_date.slice(0, 10)}</p><br />
                                                <div className="col-md-3 col-sm-12 movie-card">
                                                    <div className="movie-img">
                                                        <img src={`http://localhost:5000${item.poster}`} alt="poster" />
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <p>{item.category}</p>
                                                    <button className="btn details">Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else if (item.release_date.slice(0, 10) <= today){
                                    return (
                                        <div className="movie-list" id="tabs-1">
                                            <div className="row">
                                                {/* <p>{item.release_date.slice(0, 10)}</p><br /> */}
                                                <div className="col-md-3 col-sm-12 movie-card">
                                                    <div className="movie-img">
                                                        <img src={`http://localhost:5000${item.poster}`} alt="poster" />
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <p>{item.category}</p>
                                                    <button className="btn details">Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } 
                                // else if (item.release_date.slice(0, 10) != today) {
                                //     return (
                                //         <div className="movie-list" id="tabs-1">
                                //             <div className="row">
                                //                 <p>Data is empty</p><br />
                                //             </div>
                                //         </div>
                                //     )
                                // }
                            })}

                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="row footer-info">
                    <div className="first-div col-md-3 col-sm-12">
                        <img src={process.env.PUBLIC_URL + '/svg/logo.svg'} alt="" />
                        <p>Stop waiting in line. Buy tickets <br />
                          conveniently, watch movies quietly</p>
                    </div>
                    <div className="second-div col-md-3 col-sm-12">
                        <h6>Explore</h6>
                        <ul className="footer-nav">
                            <li className="item">
                                <Link to='#' className="link">Cinemas</Link>
                            </li>
                            <li className="item">
                                <Link to='#' className="link">Movies List</Link>
                            </li>
                            <li className="item">
                                <Link to='#' className="link">My Ticket</Link>
                            </li>
                            <li className="item">
                                <Link to='#' className="link">Notification</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="third-div col-md-3 col-sm-12">
                        <h6>Our Sponsor</h6>
                        <ul className="footer-nav">
                            <li className="item">
                                <Link to='#' className="link">
                                    <img src={process.env.PUBLIC_URL + '/svg/ebu.svg'} alt="ebu id cinema" />
                                </Link>
                            </li>
                            <li className="item">
                                <Link to='#' className="link">
                                    <img id="cineone" src={process.env.PUBLIC_URL + '/svg/cineone.svg'} alt="cineone cinema" />
                                </Link>
                            </li>
                            <li className="item">
                                <Link to='#' className="link">
                                    <img id="hiflix" src={process.env.PUBLIC_URL + '/svg/hiflix.svg'} alt="hiflix cinema" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="fourth-div col-md-3 col-sm-12">
                        <h6>Follow us</h6>
                        <ul className="footer-nav">
                            <li className="item">
                                <img src={process.env.PUBLIC_URL + '/svg/facebook.svg'} alt="facebook icon" />
                                <Link to='#' className="link">Tickitz Cinema id</Link>
                            </li>
                            <li className="item">
                                <img src={process.env.PUBLIC_URL + '/svg/instagram.svg'} alt="instagram icon" />
                                <Link to='#' className="link">tickitz.id</Link>
                            </li>
                            <li className="item">
                                <img src={process.env.PUBLIC_URL + '/svg/twitter.svg'} alt="twitter icon" />
                                <Link to='#' className="link">tickitz.id</Link>
                            </li>
                            <li className="item">
                                <img src={process.env.PUBLIC_URL + '/svg/youtube.svg'} alt="youtube icon" />
                                <Link to='#' className="link">Tickitz Cinema id</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    © 2021 Tickitz. All Rights Reserved
                </div>
            </footer>
        </div>
    )
}