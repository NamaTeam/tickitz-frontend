import { Navbar, Footer} from '../../../components'
import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { FetchCinema} from "../../../Redux/Actions/cinema"
import '../styles/style.css'
import { useParams } from 'react-router'
import { FetchMovieById, UpdateMovie } from '../../../Redux/Actions/movie'
import moment from 'moment'

const EditMovieAdmin = () =>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const [editable, SetEditable] = useState(false)
    const [update, setUpdate] = useState(false)
    const { data: cinemaData } = useSelector((state) => state.FetchCinema)
    const { data:  movieData } = useSelector((state)=>state.FetchMovieById)
    /* const times = movieData.duration.split(" ") */
    /* const { data:movie } */
    useEffect(() => {
        dispatch(FetchCinema())
        dispatch(FetchMovieById(id))
    }, [dispatch, useParams()])

    const confirmedit=(e)=>{
        e.preventDefault()
        dispatch(UpdateMovie(id,))
    }
    return(
        <>
            <Navbar/>
                <section className='container-fluid bg-grey'>
                    <div className='row'>
                        <div className='col-12 col-md-8 my-5 px-5'>
                            <form onSubmit={(e)=>confirmedit(e)}>
                            <h3 className='fw-bold'>Movie Description</h3>
                            <div className='movie-box card-body row shadow-sm'>
                                <div className="col-12 col-md-5 d-flex justify-content-center my-5">
                                    <div className='movie-poster mx-auto'>
                                        <img src={`${process.env.REACT_APP_API_IMG_URL}${movieData.poster}`} alt="poster"/>
                                    </div>
                                </div>
                                <div className='col-12 col-md-7'>
                                    <div className='mt-3 mb-5 row form-user py-3'>
                                                <div className='col-12 col-md-12 mb-3'>
                                                    <label htmlFor="inputFirstName" className="my-4">Movie Name</label>
                                                    <input type="text" className={`form-control py-3 px-4 form-input`} defaultValue={movieData.title} id="inputFirstName" disabled={!editable}/>
                                                </div>
                                                <div className='mt-4 col-12 col-md-12 mb-4'>
                                                    <label htmlFor="inputLastName" className="mb-3">Category</label>
                                                    <input type="text" className={`form-control py-3 px-4 form-input`} defaultValue={movieData.category} id="inputLastName" disabled={!editable}/>
                                                </div>
                                                <div className='mt-4 col-12 col-md-6 mb-4'>
                                                    <label className="mb-3">Release date</label>
                                                    <input type="date" className={`form-control py-3 px-4 date-rounded`} defaultValue={moment(`${movieData.release_date}`, "YYYYMMDD").format(`YYYY-MM-DD`)} id="inputEmail" disabled={!editable}/>
                                                </div>
                                                <div className='mt-4 col-12 col-md-6 mb-4'>
                                                    <label htmlFor="inputPhone" className="mb-3">Duration (hour / minute)</label>
                                                    <div className="row">
                                                        <div className="col">
                                                            <input type="number" className="form-control py-3 px-4 form-input" defaultValue={movieData?.duration?.split(" ")[0] || 0} placeholder="Hour" aria-label="First name" disabled={!editable}/>
                                                        </div>
                                                        <div className="col">
                                                            <input type="number" className="form-control py-3 px-4 form-input" defaultValue={movieData?.duration?.split(" ")[2] || 0} placeholder="Minute" aria-label="Last name" disabled={!editable}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                {(!editable)?(
                                                    <div className='btn btn-rounded px-5 py-2 mt-3 btn-edit' onClick={()=>SetEditable(true)}>
                                                        Edit Movie
                                                    </div>
                                                ):(
                                                    <button className='btn btn-rounded px-5 py-2 mt-3 btn-edit' onClick={(e)=>confirmedit(e)}>
                                                        Confirm
                                                    </button>
                                                )
                                                }
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        <div className='col-12 col-md-4 mt-5 px-5'>
                            <h3 className='fw-bold'>Premiere Location</h3>
                            <section className='movie-box card-body row py-3 shadow-sm'>
                                <form>
                                    <select name="location" id="location" className='select-rounded bg-grey'>
                                    
                                    </select>
                                    <div className='row'>
                                        {cinemaData&&
                                        cinemaData.map((element)=>{
                                            return(
                                                <div className='col-4 my-3'>
                                                <img src={`${process.env.PUBLIC_URL}/logo/ebv.jpg`} alt="logo"/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </form>
                            </section>
                            <h3 className='fw-bold'>Showtimes</h3>
                            <section className='movie-box card-body row shadow-sm'>
                                <form>
                                    <input type="date" className={`form-control py-2 px-4 date-rounded input-sm`} />
                                    <div className='row mt-3'>
                                        <div className='col-3 mt-3 px-1'>
                                            <button className='btn btn-outline-purple btn-sm w-100'><img src={`${process.env.PUBLIC_URL}/svg/plus.svg`}/></button>
                                        </div>
                                        <div className='col-3 mt-3'>
                                            <small>08:30am</small>
                                        </div>
                                        <div className='col-3 mt-3'>
                                            <small>08:30am</small>
                                        </div>
                                        <div className='col-3 mt-3'>
                                            <small>08:30am</small>
                                        </div>
                                        <div className='col-3 mt-3'>
                                            <small>08:30am</small>
                                        </div>
                                        <div className='col-3 mt-3'>
                                            <small>08:30am</small>
                                        </div>
                                        <div className='col-3 mt-3'>
                                            <small>08:30am</small>
                                        </div>
                                    </div>
                                </form>
                            </section>
                        </div>
                        
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default EditMovieAdmin