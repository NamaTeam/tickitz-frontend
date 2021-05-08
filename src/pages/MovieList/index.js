import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { FetchMovieNow, FetchUpcomingMovie } from "../../Redux/Actions/movie"
// import { Link } from "react-router-dom";
import './styles/style.css'
import { Footer, Navbar } from '../../components';
import { FetchMovieResult } from '../../Redux/Actions/movie'


export const MovieList = () => {
    let history = useHistory();
    let location = useLocation()
    const dispatch = useDispatch()
    const [activeTabs, setActiveTabs] = useState(1);

    const { data: movieDataNow } = useSelector((state) => state.FetchMovieNow)
    const { data: movieDataUpcoming } = useSelector((state) => state.FetchUpcomingMovie)
    const { data: movieResult, error } = useSelector((state) => state.FetchMovieResult)

    let today = new Date().toISOString().slice(0, 10)
    let query = new URLSearchParams(location?.search).get('title')

    useEffect(() => {
        dispatch(FetchMovieNow(today))
        dispatch(FetchUpcomingMovie())
        if (query !== null) {
            dispatch(FetchMovieResult(query))
        }
    }, [dispatch, query, today])

    return (
        <>
            <Navbar />
            <div className="container-fluid bg-grey">
                <div class="container movies">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="movie-box">
                                {movieResult?.length !== 0 ?
                                    <div className="d-flex box-column">
                                        {movieResult.map((item) => {
                                            return (
                                                <div className="movie-list d-block">
                                                    <div className="row">
                                                        {/* <p>{item.start_date.slice(0, 10)}</p><br /> */}
                                                        <div className="col-md-3 col-sm-12 movie-card">
                                                            <div className="movie-img">
                                                                <img src={`${process.env.REACT_APP_API_IMG_URL}${item.poster}`} alt="poster" />
                                                            </div>
                                                            <h5>{item.title}</h5>
                                                            <p>{item.category}</p>
                                                            <button className="btn details" onClick={() => history.push(`/movie-detail/${item.id}`)}>Details</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    :
                                    query !== null && movieResult?.length === 0 ?
                                        <div className="d-flex box-column">
                                            <div className="movie-list d-block">
                                                <div className="row">
                                                    <h5 className="search-error">{error}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div className="movie-box">
                                            <div className="box-top">
                                                <button className={`box tab ${activeTabs === 1 ? 'active' : ''}`} id="tab1" onClick={() => setActiveTabs(1)}>Now Showing</button>
                                                <button className={`box tab ${activeTabs === 2 ? 'active' : ''}`} id="tab2" onClick={() => setActiveTabs(2)}>Upcoming Movies</button>
                                            </div>

                                            <div className="d-flex box-column">
                                                {movieDataUpcoming && movieDataUpcoming.map((item) => {
                                                    return (
                                                        <div className={`movie-list upcoming ${activeTabs === 2 ? 'd-block' : 'd-none'}`} id="tabs-2" >
                                                            <div className="row">
                                                                {/* <p>{item.start_date.slice(0, 10)}</p><br /> */}
                                                                <div className="col-md-3 col-sm-12 movie-card">
                                                                    <div className="movie-img">
                                                                        <img src={`${process.env.REACT_APP_API_IMG_URL}${item.poster}`} alt="poster" />
                                                                    </div>
                                                                    <h5>{item.title}</h5>
                                                                    <p>{item.category}</p>
                                                                    <button className="btn details" onClick={() => history.push(`/movie-detail/${item.id}`)}>Details</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                            <div className="d-flex box-column">
                                                {movieDataNow && movieDataNow.map((item) => {
                                                    return (
                                                        <div className={`movie-list ${activeTabs === 1 ? 'd-block' : 'd-none'}`} id="tabs-1">
                                                            <div className="row">
                                                                {/* <p>{item.start_date.slice(0, 10)}</p><br /> */}
                                                                <div className="col-md-3 col-sm-12 movie-card">
                                                                    <div className="movie-img">
                                                                        <img src={`${process.env.REACT_APP_API_IMG_URL}${item.poster}`} alt="poster" />
                                                                    </div>
                                                                    <h5>{item.title}</h5>
                                                                    <p>{item.category}</p>
                                                                    <button className="btn details" onClick={() => history.push(`/movie-detail/${item.id}`)}>Details</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-sm">
                <Footer />
            </div>
        </>
    )
}