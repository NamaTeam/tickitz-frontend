import React, { useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { FetchUser } from "../../Redux/Actions/user"
import { FetchMovieById } from "../../Redux/Actions/movie"
import { Link } from "react-router-dom";
import './styles/style.css';
import { Footer, Navbar } from '../../components';

export const MovieDetail = () => {
    const dispatch = useDispatch()

    const { data: userData } = useSelector((state) => state.UserLogin)
    const { data: movieData } = useSelector((state) => state.FetchMovieById)
    const { data } = useSelector((state) => state.FetchUser)

    const { id } = useParams();

    useEffect(() => {
        dispatch(FetchUser(userData.data))
        dispatch(FetchMovieById(id))
    }, [dispatch, id, userData])

    return (
        <>
            <Navbar />
            <div class="container-fluid bg-grey">
                <section className="row top-details">
                    <div className="col-md-3 col-sm-6 movie-poster">
                        <img src={`http://localhost:5000${movieData.poster}`} alt="poster" />
                    </div>
                    <div className="col-md-9 col-sm-6 description-box">
                        <h4 className="title">{movieData.title}</h4>
                        <p className="genre">{movieData.category}</p>
                        <div className="row information">
                            <div className="col-md-6">
                                <div className="first-column">
                                    <div className="date">
                                        <p className="info-title">Release date</p>
                                        <p className="info">{movieData.release_date}</p>
                                    </div>
                                    <div className="duration">
                                        <p className="info-title">Duration</p>
                                        <p className="info">{movieData.duration}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="second-column">
                                    <div className="directed">
                                        <p className="info-title">Directed by</p>
                                        <p className="info">-</p>
                                    </div>
                                    <div className="cast">
                                        <p className="info-title">Casts</p>
                                        <p className="info">{movieData.actors}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="synopsis">
                            <h5>Synopsis</h5>
                            <p>{movieData.synopsis}</p>
                        </div>
                    </div>
                </section>

                <section className="middle-details">
                    <h5>Showtimes and Tickets</h5>
                    <form>
                        <input id="the-date" type="date" />
                        <select name="location" id="location">
                            <option value="Purwokerto">Purwokerto</option>
                        </select>
                    </form>
                </section>

                <section className="row bottom-details">
                    <div className="col-md-4 col-sm-12 cart">
                        <div className="top-cart">
                            <div className="cinema-logo">
                                <img src={process.env.PUBLIC_URL + '/svg/ebu.svg'} alt="ebu" />
                            </div>
                            <div className="cinema-logo">
                                <h5>ebv.id</h5>
                                <p>Whatever street No.12, South Purwokerto</p>
                            </div>
                        </div>
                        <div className="middle-cart">
                            <div className="schedule-time">
                                <ul>
                                    <li>08:30am</li>
                                    <li>10:30pm</li>
                                    <li>12:00pm</li>
                                    <li>02:00pm</li>
                                    <li>04:30pm</li>
                                    <li>07:00pm</li>
                                    <li>08:30pm</li>
                                </ul>
                            </div>
                            <div className="price">
                                <h6>Price</h6>
                                <h6 className="each-seat">$10.00/seat</h6>
                            </div>
                            <div className="booking-movie">
                                <button type="submit" className="btn book-now">Book now</button>
                                <Link to="#" className="add-cart">Add to cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 cart">
                        <div className="top-cart">
                            <div className="cinema-logo">
                                <img src={process.env.PUBLIC_URL + '/svg/cineone.svg'} alt="cineone" />
                            </div>
                            <div className="cinema-logo">
                                <h5>CineOne21</h5>
                                <p>Downcore street No. 21, East Purwokerto</p>
                            </div>
                        </div>
                        <div className="middle-cart">
                            <div className="schedule-time">
                                <ul>
                                    <li>08:30am</li>
                                    <li>10:30pm</li>
                                    <li>12:00pm</li>
                                    <li>02:00pm</li>
                                    <li>04:30pm</li>
                                    <li>07:00pm</li>
                                    <li>08:30pm</li>
                                </ul>
                            </div>
                            <div className="price">
                                <h6>Price</h6>
                                <h6 className="each-seat">$10.00/seat</h6>
                            </div>
                            <div className="booking-movie">
                                <button type="submit" className="btn book-now">Book now</button>
                                <Link to="#" className="add-cart">Add to cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 cart">
                        <div className="top-cart">
                            <div className="cinema-logo">
                                <img src={process.env.PUBLIC_URL + '/svg/hiflix.svg'} alt="hiflix" />
                            </div>
                            <div className="cinema-logo">
                                <h5>hiflix Cinema</h5>
                                <p>Colonel street No. 2, East Purwokerto</p>
                            </div>
                        </div>
                        <div className="middle-cart">
                            <div className="schedule-time">
                                <ul>
                                    <li>08:30am</li>
                                    <li>10:30pm</li>
                                    <li>12:00pm</li>
                                    <li>02:00pm</li>
                                    <li>04:30pm</li>
                                    <li>07:00pm</li>
                                    <li>08:30pm</li>
                                </ul>
                            </div>
                            <div className="price">
                                <h6>Price</h6>
                                <h6 className="each-seat">$10.00/seat</h6>
                            </div>
                            <div className="booking-movie">
                                <button type="submit" className="btn book-now">Book now</button>
                                <Link to="#" className="add-cart">Add to cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 cart">
                        <div className="top-cart">
                            <div className="cinema-logo">
                                <img src={process.env.PUBLIC_URL + '/svg/ebu.svg'} alt="ebu" />
                            </div>
                            <div className="cinema-logo">
                                <h5>ebv.id</h5>
                                <p>Whatever street No.12, South Purwokerto</p>
                            </div>
                        </div>
                        <div className="middle-cart">
                            <div className="schedule-time">
                                <ul>
                                    <li>08:30am</li>
                                    <li>10:30pm</li>
                                    <li>12:00pm</li>
                                    <li>02:00pm</li>
                                    <li>04:30pm</li>
                                    <li>07:00pm</li>
                                    <li>08:30pm</li>
                                </ul>
                            </div>
                            <div className="price">
                                <h6>Price</h6>
                                <h6 className="each-seat">$10.00/seat</h6>
                            </div>
                            <div className="booking-movie">
                                <button type="submit" className="btn book-now">Book now</button>
                                <Link to="#" className="add-cart">Add to cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 cart">
                        <div className="top-cart">
                            <div className="cinema-logo">
                                <img src={process.env.PUBLIC_URL + '/svg/cineone.svg'} alt="cineone" />
                            </div>
                            <div className="cinema-logo">
                                <h5>CineOne21</h5>
                                <p>Downcore street No. 21, East Purwokerto</p>
                            </div>
                        </div>
                        <div className="middle-cart">
                            <div className="schedule-time">
                                <ul>
                                    <li>08:30am</li>
                                    <li>10:30pm</li>
                                    <li>12:00pm</li>
                                    <li>02:00pm</li>
                                    <li>04:30pm</li>
                                    <li>07:00pm</li>
                                    <li>08:30pm</li>
                                </ul>
                            </div>
                            <div className="price">
                                <h6>Price</h6>
                                <h6 className="each-seat">$10.00/seat</h6>
                            </div>
                            <div className="booking-movie">
                                <button type="submit" className="btn book-now">Book now</button>
                                <Link to="#" className="add-cart">Add to cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 cart">
                        <div className="top-cart">
                            <div className="cinema-logo">
                                <img src={process.env.PUBLIC_URL + '/svg/hiflix.svg'} alt="hiflix" />
                            </div>
                            <div className="cinema-logo">
                                <h5>hiflix Cinema</h5>
                                <p>Colonel street No. 2, East Purwokerto</p>
                            </div>
                        </div>
                        <div className="middle-cart">
                            <div className="schedule-time">
                                <ul>
                                    <li>08:30am</li>
                                    <li>10:30pm</li>
                                    <li>12:00pm</li>
                                    <li>02:00pm</li>
                                    <li>04:30pm</li>
                                    <li>07:00pm</li>
                                    <li>08:30pm</li>
                                </ul>
                            </div>
                            <div className="price">
                                <h6>Price</h6>
                                <h6 className="each-seat">$10.00/seat</h6>
                            </div>
                            <div className="booking-movie">
                                <button type="submit" className="btn book-now">Book now</button>
                                <Link to="#" className="add-cart">Add to cart</Link>
                            </div>
                        </div>
                    </div>
                    <h4><span>view more</span></h4>
                </section>
                <Footer />
            </div>
        </>
    )
}