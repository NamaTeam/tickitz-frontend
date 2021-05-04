import React from 'react';
import './styles/style.css'
import { Footer, Navbar } from '../../components';
import { Link } from "react-router-dom";

export const Payment = () => {

    return (
        <>
        <Navbar />
        <div className="container-fluid bg-grey">
            <div class="container-fluid payment">
                <div className="row main title">
                    <div className="col-md-8 payment-title">
                        <h5>Payment Info</h5>
                    </div>
                    <div className="col-md-4 col-sm-12 personal-title">
                        <h5>Personal Info</h5>
                    </div>
                </div>
                <div className="row main box">
                    <div className="col-md-8 col-sm-12 payment-info">
                        <ul className="info">
                            <li className="title-info">Date & time</li>
                            <li className="info-content">Tuesday, 07 July 2020 at 02:00pm</li>
                        </ul>
                        <ul className="info">
                            <li className="title-info">Movie title</li>
                            <li className="info-content">Spider-Man: Homecoming</li>
                        </ul>
                        <ul className="info">
                            <li className="title-info">Cinema name</li>
                            <li className="info-content">CineOne21 Cinema</li>
                        </ul>
                        <ul className="info">
                            <li className="title-info">Number of tickets</li>
                            <li className="info-content">3 pieces</li>
                        </ul>
                        <ul className="info last">
                            <li className="title-info">Total payment</li>
                            <li className="info-content">$30,00</li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12 personal-info">
                        <div className="group">
                            <label htmlFor="inputName" className="form-label">Full Name</label>
                            <input type="text" defaultValue="-" className="form-control shadow-none" id="inputName" required />
                        </div>
                        <div className="group">
                            <label htmlFor="inputEmail" className="form-label">Email</label>
                            <input type="email" defaultValue="-" className="form-control shadow-none" id="inputName" required />
                        </div>
                        <div className="group">
                            <label htmlFor="inputName" className="form-label">Phone Number</label>
                            <div className="input-group">
                                <span className="code">+62</span>
                                <input type="tel" defaultValue="-" className="form-control shadow-none" id="inputPhone" />
                            </div>
                        </div>
                        <div className="warning-for-required">
                            <img src={process.env.PUBLIC_URL + '/svg/warning.svg'} alt="warning icon" />
                            <span>Fill your data correctly</span>
                        </div>
                    </div>
                </div>
                <div className="row main method">
                    <div className="col-md-8 method-title">
                        <h5 className="md-show">Choose a <span className="sm-show">Payment Method</span></h5>
                    </div>
                    <div className="col-md-8 payment-method">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 method-list">
                                <img src={process.env.PUBLIC_URL + '/svg/google-pay.svg'} alt="g-pay icon" />
                            </div>
                            <div className="col-md-3 col-sm-6 method-list">
                                <img src={process.env.PUBLIC_URL + '/svg/visa.svg'} alt="visa icon" />
                            </div>
                            <div className="col-md-3 col-sm-6 method-list">
                                <img src={process.env.PUBLIC_URL + '/svg/gopay.svg'} alt="gopay icon" />
                            </div>
                            <div className="col-md-3 col-sm-6 method-list">
                                <img src={process.env.PUBLIC_URL + '/svg/paypal.svg'} alt="paypal icon" />
                            </div>
                            <div className="col-md-3 col-sm-6 method-list">
                                <img src={process.env.PUBLIC_URL + '/svg/dana.svg'} alt="dana icon" />
                            </div>
                            <div className="col-md-3 col-sm-6 method-list">
                                <img src={process.env.PUBLIC_URL + '/svg/bca.svg'} alt="bca icon" />
                            </div>
                            <div className="col-md-3 col-sm-6 method-list">
                                <img src={process.env.PUBLIC_URL + '/svg/bank-bri.svg'} alt="bank bri icon" />
                            </div>
                            <div className="col-md-3 col-sm-6 method-list">
                                <img src={process.env.PUBLIC_URL + '/svg/ovo.svg'} alt="ovo icon" />
                            </div>
                            <div className="col-md-12">
                                <h4><span>or</span></h4>
                            </div>
                            <div className="col-md-12 via-cash">
                                <p>Pay via cash. <Link className="link">See how it work</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row main button">
                    <div className="col-md-8 prev-pay">
                        <div className="previous-btn">
                            <button className="prev">Previous step</button>
                        </div>
                        <div classNam="pay-order-btn">
                            <button className="pay">Pay your order</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}