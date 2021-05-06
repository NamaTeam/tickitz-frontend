import React, { useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { FetchUser } from "../../Redux/Actions/user"
import { FetchMovieById } from "../../Redux/Actions/movie"
import { FetchCinema, FetchCinemaByLocation } from "../../Redux/Actions/cinema"
import { Link } from "react-router-dom";
import './styles/style.css';
import { Footer, Navbar } from '../../components';

export const MovieDetail = () => {
    const dispatch = useDispatch()
    let history = useHistory();

    const { data: userData } = useSelector((state) => state.UserLogin)
    const { data: movieData } = useSelector((state) => state.FetchMovieById)
    const { data: cinemaData } = useSelector((state) => state.FetchCinema)
    const { data: scheduleData } = useSelector((state) => state.FetchCinemaByLocation)
    const { data } = useSelector((state) => state.FetchUser)

    const { id } = useParams();

    useEffect(() => {
        dispatch(FetchCinema())
        dispatch(FetchUser(userData.data))
        dispatch(FetchMovieById(id))
    }, [dispatch, id, userData])

    const unique = [...new Set(cinemaData?.map(item => item.city))]
    console.log(scheduleData)

    const location = () => {
        let city = document.getElementById("location").value
        let myData = {
            location: city
        }
        dispatch(FetchCinemaByLocation(myData, id))
    }

    return (
        <>
            <Navbar />
            <div class="container-fluid bg-grey">
                <section className="row top-details">
                    <div className="col-md-3 col-sm-6 movie-poster">
                        <img src={`${process.env.REACT_APP_API_IMG_URL}${movieData.poster}`} alt="poster" />
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
                        <select name="location" id="location" onChange={() => location()}>
                            <option id="city" value='default'>Choose Location</option>
                            {unique.map((item) => {
                                return (
                                    <option id="city" value={item}>{item}</option>
                                )
                            })}
                        </select>
                    </form>
                </section>

                <section className="row bottom-details">
                    {scheduleData && scheduleData.map((item) => {
                        return (
                            <div className="col-md-4 col-sm-12 cart">
                                <div className="top-cart">
                                    <div className="cinema-logo">
                                        <img src={`${process.env.REACT_APP_API_IMG_URL}${item.logo}`} alt=" " />
                                    </div>
                                    <div className="cinema-logo">
                                        <h5>{item.name}</h5>
                                        <p>{item.street} No.{item.street_number}, {item.city}</p>
                                    </div>
                                </div>
                                <div className="middle-cart">
                                    <div className="schedule-time">
                                        <ul>
                                            <li>{item.start_time}</li>
                                        </ul>
                                    </div>
                                    <div className="price">
                                        <h6>Price</h6>
                                        <h6 className="each-seat">{item.price}/seat</h6>
                                    </div>
                                    <div className="booking-movie">
                                        <button type="submit" className="btn book-now" onClick={() => history.push(`/order/${item.schedule_id}`)}>Book now</button>
                                        <Link to="#" className="add-cart">Add to cart</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <h4><span>view more</span></h4>
                </section>
            </div>
            <Footer />
        </>
    )
}