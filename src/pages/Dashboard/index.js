import moment from 'moment-timezone';
import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import { Footer, Navbar } from '../../components/Partials'
import './style/style.css'
import { useDispatch, useSelector } from "react-redux"
import { FetchMovieNow, FetchMoviesByMonth } from "../../Redux/Actions/movie"

const Dashboard = () => {
    const dispatch = useDispatch();
    const [month, SetMonth] = useState(0)
    const { data: moviesNow } = useSelector((state) => state.FetchMovieNow)
    const { data: moviesMonth } = useSelector((state)=> state.FetchMoviesByMonth)
    useEffect(() => {
        let dateTimezone = moment.tz("Asia/Jakarta")
        let dateNow = dateTimezone.format('YYYY-MM-DD')
        
        dispatch(FetchMovieNow(dateNow))
    }, [])
    const reset = ()=>{
        for(let i=1; i<=12; i++){
            document.getElementById(i).classList.remove('active')
        }
    }
    useEffect(()=>{
        let monthformat = 0;
        if(month == 0){
            let dateTimezone = moment.tz("Asia/Jakarta")
            monthformat = dateTimezone.format('MM')
            let id = parseInt(monthformat)
            document.getElementById(id).classList.add('active')
        }else if(month > 0 && month < 10){
            reset()
            monthformat = '0'+month
            document.getElementById(month).classList.add('active')
        }else{
            reset()
            monthformat = month
            document.getElementById(month).classList.add('active')
        }
        dispatch(FetchMoviesByMonth(monthformat))
    },[month])
    return (
        <>
        <Navbar/>
        <div className="container-fluid">
            <section className='banner pb-5 mx-auto'>
                <div className='mt-5'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 col-xl-6 my-5'>
                            <div className='card-body m-5 justify-content-center'>
                                <h5 className='text-muted'>Nearest Cinema, Newest Movie,</h5>
                                <h1 className='text-purple fw-bold'>Find out now!</h1>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 col-xl-6 row justify-content-center my-0'>
                            <div  className='photo-potrait col-3 mt-5'>
                                <img src={process.env.PUBLIC_URL + '/image.png'} alt='alt'/>
                            </div>
                            <div  className='photo-potrait col-3 mt-3'>
                                <img src={process.env.PUBLIC_URL + '/spiderman.jpg'} alt='alt'/>
                            </div>
                            <div  className='photo-potrait col-3 mt-0'>
                                <img src={process.env.PUBLIC_URL + '/superman.jpg'} alt='alt'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main className='row bg-grey horizontal-list'>
                <div className="d-flex justify-content-between">
                    <p className="p-5 text-purple fw-bold">Now Showing</p>
                    <Link to='/movie'>
                        <p className="p-5 text-purple">view all</p>
                    </Link>
                </div>
                <div className="d-flex justify-content-start flex-row bd-highlight mt-3 mb-5">
                {moviesNow&&
                    moviesNow.map((items)=>{
                    return(
                        <div className='photo-layout ms-3'>
                            <div className="accordion" id={`accordionFlushExample${items.id}`}>
                                <div className="accordion-item bg-transparent">
                                    <div class="card bg-white py-3 align-items-center">
                                        <div id={`${items.id}`}>
                                            <img src={process.env.REACT_APP_API_IMG_URL + `${items.poster}`} className='m-auto' data-bs-toggle="collapse" data-bs-target={`#flush-collapse${items.id}`} aria-expanded="false" aria-controls={`flush-collapse${items.id}`}/>
                                        </div>
                                        <div id={`flush-collapse${items.id}`} className="accordion-collapse collapse" aria-labelledby="1" data-bs-parent={`#accordionFlushExample${items.id}`}>
                                            <div className="accordion-body">
                                                <div className='d-flex flex-column justify-content-center mt-1'>
                                                    <p className='fw-bold'>{items.title}</p>
                                                    <small className='text-muted'>{items.category}</small>
                                                    <Link to={`/movie-detail/${items.id}`} className='my-2 text-center'>
                                                        <button className='btn btn-outline-primary'>Details</button>
                                                    </Link>
                                                    <Link to={`/movie-detail/${items.id}`}>
                                                        <button className='btn btn-purple my-2'>Book Now</button>
                                                    </Link>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    )
                    })
                    }
                </div>
            </main>
            <section className='banner'>
                <div class="d-flex justify-content-start horizontal-list py-5 px-3">
                    <button className='mx-3 btn btn-month btn-outline-purple' id='1' onClick={(e)=>SetMonth(1)}>January</button>
                    <button className='mx-3 btn btn-month btn-outline-purple' id='2' onClick={(e)=>SetMonth(2)}>February</button>
                    <button className='mx-3 btn btn-month btn-outline-purple' id='3' onClick={(e)=>SetMonth(3)}>March</button>
                    <button className='mx-3 btn btn-month btn-outline-purple' id='4' onClick={(e)=>SetMonth(4)}>April</button>
                    <button className='mx-3 btn btn-month btn-outline-purple' id='5' onClick={(e)=>SetMonth(5)}>May</button>
                    <button className='mx-3 btn btn-month btn-outline-purple' id='6' onClick={(e)=>SetMonth(6)}>June</button>
                    <button className='mx-3 btn btn-month btn-outline-purple' id='7' onClick={(e)=>SetMonth(7)}>July</button>
                    <button className='mx-3 btn btn-month btn-outline-purple' id='8' onClick={(e)=>SetMonth(8)}>August</button>
                    <button className='mx-3 btn btn-month btn-outline-purple' id='9' onClick={(e)=>SetMonth(9)}>September</button>
                    <button className='mx-3 btn btn-month btn-outline-purple' id='10' onClick={(e)=>SetMonth(10)}>October</button>
                    <button className='mx-3 btn btn-month btn-outline-purple' id='11' onClick={(e)=>SetMonth(111)}>November</button>
                    <button className='mx-3 btn btn-month btn-outline-purple' id='12' onClick={(e)=>SetMonth(12)}>December</button>
                </div>
                <div class="d-flex justify-content-start horizontal-list py-5 px-3 mb-5">
                    <div class="d-flex flex-row mb-3">
                        {moviesMonth&&
                            moviesMonth.map((item)=>{
                                return(
                                <div className='photo-layout ms-3'>
                                    <div class="card bg-white p-3">
                                        <img src={process.env.REACT_APP_API_IMG_URL + `${item.poster}`} className='m-auto'/>
                                        <div className='d-flex flex-column justify-content-center mt-1'>
                                            <p className='fw-bold'>{item.title}</p>
                                            <small className='text-muted'>{item.category}</small>
                                            <Link to={`/movie-detail/${item.id}`}>
                                                <button className='btn btn-outline-primary my-2'>Details</button>
                                            </Link>
                                        </div> 
                                    </div>   
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className='container shadow-lg mb-5'>
                <div className='card-body'>
                    <div className='text-center my-5'>
                        <h5>Be the vanguard of the</h5>
                        <h1 className='fw-bold text-purple'>Moviegoers</h1>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <form>
                            <div className="row mb-3">
                                <div className="col-8">
                                    <input type="text" class="form-control" placeholder="Type your email" aria-label="First name"/>
                                </div>
                                <div className="col-4">
                                    <button className='btn btn-purple'> Join Now </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='text-center my-5 text-muted'>
                        <span>By joining you as a Tickitz member,</span><br/>
                        <span>we will always send you the latest updates via email .</span>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
        </>
    )
}

export default Dashboard

