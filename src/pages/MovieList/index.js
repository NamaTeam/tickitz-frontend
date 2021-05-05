import React, { useEffect } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { FetchMovie } from "../../Redux/Actions/movie"
import { Link } from "react-router-dom";
import './styles/style.css'
import { Footer, Navbar } from '../../components';


export const MovieList = () => {
    const dispatch = useDispatch()

    const { data: userData } = useSelector((state) => state.UserLogin)
    const { data: movieData } = useSelector((state) => state.FetchMovie)

    useEffect(() => {
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
        <>
         <Navbar/>
        <div className="container-fluid bg-grey">
            <div class="container movies">
                <div className="row">
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
        </div>
        <Footer/>
        </>
    )
}