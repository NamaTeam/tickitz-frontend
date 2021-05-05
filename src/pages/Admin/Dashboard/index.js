import React from 'react';
import { Footer, Navbar } from '../../../components/Partials'
import './style/style.css'

const DashboardAdmin = () => {

    return (
        <>
        <Navbar/>
        <div class="container-fluid">
            <section className='banner pb-5'>
                <div className='mt-5'>
                    <div className='row mt-5'>
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
                    <p className="p-5 text-purple">view all</p>
                </div>
                <div className="d-flex justify-content-center flex-row bd-highlight mt-3 mb-5">
                    <div className='photo-layout ms-3'>
                        <div className="accordion" id="accordionFlushExample1">
                            <div className="accordion-item bg-transparent">
                                <div class="card bg-white py-3 align-items-center">
                                    <div id='1'>
                                        <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto' data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapse1"/>
                                    </div>
                                    <div id="flush-collapse1" className="accordion-collapse collapse" aria-labelledby="1" data-bs-parent="#accordionFlushExample1">
                                        <div className="accordion-body">
                                            <div className='d-flex flex-column justify-content-center mt-1'>
                                                <p className='fw-bold'>Spider-Man: Homecoming</p>
                                                <small className='text-muted'>Action, Adventure, Sci-Fi</small>
                                                <button className='btn btn-outline-primary my-2'>Details</button>
                                                <button className='btn btn-purple my-2'>Book Now</button>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                    <div className='photo-layout ms-3'>
                        <div className="accordion" id="accordionFlushExample2">
                            <div className="accordion-item bg-transparent">
                                <div class="card bg-white py-3 align-items-center">
                                    <div id='2'>
                                        <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto' data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2"/>
                                    </div>
                                    <div id="flush-collapse2" className="accordion-collapse collapse" aria-labelledby="2" data-bs-parent="#accordionFlushExample2">
                                        <div className="accordion-body">
                                            <div className='d-flex flex-column justify-content-center mt-1'>
                                                <p className='fw-bold'>Spider-Man: Homecoming</p>
                                                <small className='text-muted'>Action, Adventure, Sci-Fi</small>
                                                <button className='btn btn-outline-primary my-2'>Details</button>
                                                <button className='btn btn-purple my-2'>Book Now</button>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                    <div className='photo-layout ms-3'>
                        <div className="accordion" id="accordionFlushExample3">
                            <div className="accordion-item bg-transparent">
                                <div class="card bg-white py-3 align-items-center">
                                    <div id='3'>
                                        <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto' data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3"/>
                                    </div>
                                    <div id="flush-collapse3" className="accordion-collapse collapse" aria-labelledby="3" data-bs-parent="#accordionFlushExample3">
                                        <div className="accordion-body">
                                            <div className='d-flex flex-column justify-content-center mt-1'>
                                                <p className='fw-bold'>Spider-Man: Homecoming</p>
                                                <small className='text-muted'>Action, Adventure, Sci-Fi</small>
                                                <button className='btn btn-outline-primary my-2'>Details</button>
                                                <button className='btn btn-purple my-2'>Book Now</button>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                    <div className='photo-layout ms-3'>
                        <div className="accordion" id="accordionFlushExample4">
                            <div className="accordion-item bg-transparent">
                                <div class="card bg-white py-3 align-items-center">
                                    <div id='4'>
                                        <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto' data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4"/>
                                    </div>
                                    <div id="flush-collapse4" className="accordion-collapse collapse" aria-labelledby="4" data-bs-parent="#accordionFlushExample4">
                                        <div className="accordion-body">
                                            <div className='d-flex flex-column justify-content-center mt-1'>
                                                <p className='fw-bold'>Spider-Man: Homecoming</p>
                                                <small className='text-muted'>Action, Adventure, Sci-Fi</small>
                                                <button className='btn btn-outline-primary my-2'>Details</button>
                                                <button className='btn btn-purple my-2'>Book Now</button>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </main>
            <section className='banner'>
                <div class="d-flex justify-content-between horizontal-list py-5 px-3">
                    <button className='mx-3 btn btn-purple'>January</button>
                    <button className='mx-3 btn btn-outline-primary'>Februariy</button>
                    <button className='mx-3 btn btn-outline-primary'>March</button>
                    <button className='mx-3 btn btn-outline-primary'>April</button>
                    <button className='mx-3 btn btn-outline-primary'>May</button>
                    <button className='mx-3 btn btn-outline-primary'>June</button>
                    <button className='mx-3 btn btn-outline-primary'>July</button>
                    <button className='mx-3 btn btn-outline-primary'>August</button>
                    <button className='mx-3 btn btn-outline-primary'>September</button>
                    <button className='mx-3 btn btn-outline-primary'>October</button>
                    <button className='mx-3 btn btn-outline-primary'>November</button>
                    <button className='mx-3 btn btn-outline-primary'>December</button>
                </div>
                <div class="d-flex justify-content-center horizontal-list py-5 px-3 mb-5">
                    <div class="d-flex flex-row mb-3">
                        <div className='photo-layout ms-3'>
                            <div class="card bg-white p-3">
                                <img src={process.env.PUBLIC_URL + '/movie2.png'} className='m-auto'/>
                                <div className='d-flex flex-column justify-content-center mt-1'>
                                    <p className='fw-bold'>Black Widow</p>
                                    <small className='text-muted'>Action, Adventure, Sci-Fi</small>
                                    <button className='btn btn-outline-primary my-2'>Details</button>
                                </div> 
                            </div>   
                        </div>
                        <div className='photo-layout ms-3'>
                            <div class="card bg-white p-3">
                                <img src={process.env.PUBLIC_URL + '/movie2.png'} className='m-auto'/>
                                <div className='d-flex flex-column justify-content-center mt-1'>
                                    <p className='fw-bold'>Black Widow</p>
                                    <small className='text-muted'>Action, Adventure, Sci-Fi</small>
                                    <button className='btn btn-outline-primary my-2'>Details</button>
                                </div> 
                            </div>   
                        </div>
                        <div className='photo-layout ms-3'>
                            <div class="card bg-white p-3">
                                <img src={process.env.PUBLIC_URL + '/movie2.png'} className='m-auto'/>
                                <div className='d-flex flex-column justify-content-center mt-1'>
                                    <p className='fw-bold'>Black Widow</p>
                                    <small className='text-muted'>Action, Adventure, Sci-Fi</small>
                                    <button className='btn btn-outline-primary my-2'>Details</button>
                                </div> 
                            </div>   
                        </div>
                        <div className='photo-layout ms-3'>
                            <div class="card bg-white p-3">
                                <img src={process.env.PUBLIC_URL + '/movie2.png'} className='m-auto'/>
                                <div className='d-flex flex-column justify-content-center mt-1'>
                                    <p className='fw-bold'>Black Widow</p>
                                    <small className='text-muted'>Action, Adventure, Sci-Fi</small>
                                    <button className='btn btn-outline-primary my-2'>Details</button>
                                </div> 
                            </div>   
                        </div>
                        <div className='photo-layout ms-3'>
                            <div class="card bg-white p-3">
                                <img src={process.env.PUBLIC_URL + '/movie2.png'} className='m-auto'/>
                                <div className='d-flex flex-column justify-content-center mt-1'>
                                    <p className='fw-bold'>Black Widow</p>
                                    <small className='text-muted'>Action, Adventure, Sci-Fi</small>
                                    <button className='btn btn-outline-primary my-2'>Details</button>
                                </div> 
                            </div>   
                        </div>
                        <div className='photo-layout ms-3'>
                            <div class="card bg-white p-3">
                                <img src={process.env.PUBLIC_URL + '/movie2.png'} className='m-auto'/>
                                <div className='d-flex flex-column justify-content-center mt-1'>
                                    <p className='fw-bold'>Black Widow</p>
                                    <small className='text-muted'>Action, Adventure, Sci-Fi</small>
                                    <button className='btn btn-outline-primary my-2'>Details</button>
                                </div> 
                            </div>   
                        </div>
                        <div className='photo-layout ms-3'>
                            <div class="card bg-white p-3">
                                <img src={process.env.PUBLIC_URL + '/movie2.png'} className='m-auto'/>
                                <div className='d-flex flex-column justify-content-center mt-1'>
                                    <p className='fw-bold'>Black Widow</p>
                                    <small className='text-muted'>Action, Adventure, Sci-Fi</small>
                                    <button className='btn btn-outline-primary my-2'>Details</button>
                                </div> 
                            </div>   
                        </div>
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

export default DashboardAdmin

