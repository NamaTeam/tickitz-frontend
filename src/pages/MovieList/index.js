import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { FetchMovie, FetchMovieNow, FetchUpcomingMovie } from "../../Redux/Actions/movie"
import { Link } from "react-router-dom";
import './styles/style.css'
import { Footer, Navbar } from '../../components';


export const MovieList = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const [activeTabs, setActiveTabs] = useState(1);

    const { data: movieDataNow } = useSelector((state) => state.FetchMovieNow)
    const { data: movieDataUpcoming } = useSelector((state) => state.FetchUpcomingMovie)

    let today = new Date().toISOString().slice(0, 10)

    useEffect(() => {
        dispatch(FetchMovieNow(today))
        dispatch(FetchUpcomingMovie())
        dispatch(FetchMovie())
    }, [dispatch, today])


    return (
        <>
         <Navbar/>
        <div className="container-fluid bg-grey">
            <div class="container movies">
                <div className="row">
                    <div className="col-md-12">
                        <div className="movie-box">
                            <div className="box-top">
                                <button className={`box mx-3 py-3 tab ${activeTabs === 1 ? 'active' : ''}`} id="tab1" onClick={() => setActiveTabs(1)}>Now Showing</button>
                                <button className={`box mx-3 py-3 tab ${activeTabs === 2 ? 'active' : ''}`} id="tab2" onClick={() => setActiveTabs(2)}>Upcoming Movies</button>
                            </div>

                            <div className="d-flex">
                                {movieDataUpcoming && movieDataUpcoming.map((item) => {
                                    return (
                                        <div className={`movie-list upcoming ${activeTabs === 2 ? 'd-block' : 'd-none'}`} id="tabs-2" >
                                            <div className="row">
                                                {/* <p>{item.start_date.slice(0, 10)}</p><br /> */}
                                                <div className="col-md-3 col-sm-12 movie-card">
                                                    <div className="movie-img">
                                                        <img src={`http://localhost:5000${item.poster}`} alt="poster" />
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <p>{item.category}</p>
                                                    <button className="btn details" onClick={() => history.push(`/movie-detail/${(item.title.split(' ').join('-')).toLowerCase()}/${item.id}`)}>Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="d-flex">
                                {movieDataNow && movieDataNow.map((item) => {
                                    return (
                                        <div className={`movie-list ${activeTabs === 1 ? 'd-block' : 'd-none'}`} id="tabs-1">
                                            <div className="row">
                                                {/* <p>{item.start_date.slice(0, 10)}</p><br /> */}
                                                <div className="col-md-3 col-sm-12 movie-card">
                                                    <div className="movie-img">
                                                        <img src={`http://localhost:5000${item.poster}`} alt="poster" />
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <p>{item.category}</p>
                                                    <button className="btn details" onClick={() => history.push(`/movie-detail/${(item.title.split(' ').join('-')).toLowerCase()}/${item.id}`)}>Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}