import { Navbar, Footer} from '../../../components'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { FetchCinema} from "../../../Redux/Actions/cinema"
import '../styles/style.css'

const PageMoviesAdmin = () =>{
    const dispatch = useDispatch()
    const { data: cinemaData } = useSelector((state) => state.FetchCinema)

    useEffect(() => {
        dispatch(FetchCinema())
    }, [dispatch])

    return(
        <>
            <Navbar/>
                <section className='container-fluid bg-grey'>
                    <div className='row'>
                        <div className='col-12 col-md-7 my-5 px-5'>
                            <h3 className='fw-bold'>Movie Description</h3>
                            <div className='movie-box card-body row shadow-sm'>
                                <div className="col-12 col-md-5 d-flex justify-content-center my-5">
                                    <div className='movie-poster mx-auto'>
                                        <img src={`${process.env.PUBLIC_URL}movie2.png`} alt="poster"/>
                                    </div>
                                </div>
                                <div className='col-12 col-md-7'>
                                    <form className='mt-3 mb-5 row form-user py-3'>
                                        <div className='col-12 col-md-12 mb-3'>
                                            <label htmlFor="inputFirstName" className="my-4">Movie Name</label>
                                            <input type="text" className={`form-control py-3 px-4 form-input`} id="inputFirstName" />
                                        </div>
                                        <div className='mt-4 col-12 col-md-12 mb-4'>
                                            <label htmlFor="inputLastName" className="mb-3">Category</label>
                                            <input type="text" className={`form-control py-3 px-4 form-input`} id="inputLastName" />
                                        </div>
                                        <div className='mt-4 col-12 col-md-6 mb-4'>
                                            <label className="mb-3">Release date</label>
                                            <input type="date" className={`form-control py-3 px-4 date-rounded`} id="inputEmail"/>
                                        </div>
                                        <div className='mt-4 col-12 col-md-6 mb-4'>
                                            <label htmlFor="inputPhone" className="mb-3">Duration (hour / minute)</label>
                                            <div className="row">
                                                <div className="col">
                                                    <input type="number" className="form-control py-3 px-4 form-input" placeholder="Hour" aria-label="First name" />
                                                </div>
                                                <div className="col">
                                                    <input type="number" className="form-control py-3 px-4 form-input" placeholder="Minute" aria-label="Last name" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-5 mt-5 px-5'>
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

export default PageMoviesAdmin