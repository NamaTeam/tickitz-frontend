import React from 'react';
import { Link } from "react-router-dom";
import { Footer, Navbar } from '../../components/Partials'
import './style/style.css'

const Dashboard = () => {

    return (
        <div class="container-fluid">
            <Navbar/>
            <section className='banner py-5'>
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
            <main className='row bg-grey horizontal-list my-5 pb-5'>
                <div class="d-flex flex-row bd-highlight m-3 pt-5">
                    <div className='photo-layout ms-3'>
                        <div class="card bg-transparent p-3">
                            <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto'/>
                        </div>   
                    </div>
                    <div className='photo-layout ms-3'>
                        <div class="card bg-transparent p-3">
                            <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto'/>
                        </div>   
                    </div>
                    <div className='photo-layout ms-3'>
                        <div class="card bg-transparent p-3">
                            <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto'/>
                        </div>   
                    </div>
                    <div className='photo-layout ms-3'>
                        <div class="card bg-transparent p-3">
                            <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto'/>
                        </div>   
                    </div>
                    <div className='photo-layout ms-3'>
                        <div class="card bg-transparent p-3">
                            <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto'/>
                        </div>   
                    </div>
                    <div className='photo-layout ms-3'>
                        <div class="card bg-transparent p-3">
                            <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto'/>
                        </div>   
                    </div>
                    <div className='photo-layout ms-3'>
                        <div class="card bg-transparent p-3">
                            <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto'/>
                        </div>   
                    </div>
                </div>
            </main>
            <section className='banner'>
                <div className='row mt-5'>
                        <div class="d-flex flex-row bd-highlight mb-3">
                        <div className='photo-layout ms-3'>
                        <div class="card bg-transparent p-3">
                            <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto'/>
                        </div>   
                    </div>
                    <div className='photo-layout ms-3'>
                        <div class="card bg-transparent p-3">
                            <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto'/>
                        </div>   
                    </div>
                    <div className='photo-layout ms-3'>
                        <div class="card bg-transparent p-3">
                            <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto'/>
                        </div>   
                    </div>
                    <div className='photo-layout ms-3'>
                        <div class="card bg-transparent p-3">
                            <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto'/>
                        </div>   
                    </div>
                    <div className='photo-layout ms-3'>
                        <div class="card bg-transparent p-3">
                            <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto'/>
                        </div>   
                    </div>
                    <div className='photo-layout ms-3'>
                        <div class="card bg-transparent p-3">
                            <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto'/>
                        </div>   
                    </div>
                    <div className='photo-layout ms-3'>
                        <div class="card bg-transparent p-3">
                            <img src={process.env.PUBLIC_URL + '/Rectangle 119.png'} className='m-auto'/>
                        </div>   
                    </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Dashboard

