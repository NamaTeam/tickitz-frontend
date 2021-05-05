import React from 'react';
import './styles/style.css'
import { Footer, Navbar } from '../../components';

export const TicketResult = () => {

    return (<>
        <Navbar />
        <div className="container-fluid bg-purple">
            <div class="container ticket-result">
                <center className="row main ticket">
                    <div className="ticket-proof">
                        <h5>Proof of Payment</h5>
                        <div className="ticket-sheet">
                            <div className="row top-sheet">
                                <div className="col-md-8 top-left">
                                    <div className="top-logo-left">
                                        <img src={process.env.PUBLIC_URL + '/svg/logo-white.svg'} alt="logo icon" />
                                    </div>
                                    <div className="top-text-left">
                                        <h6>Admin One</h6>
                                    </div>
                                    <div className="round-grey"></div>
                                </div>
                                <div className="col-md-4 top-right">
                                    <center>
                                        <img src={process.env.PUBLIC_URL + '/svg/logo-white.svg'} alt="logo icon" />
                                    </center>
                                </div>
                            </div>
                            <div className="row bottom-sheet">
                                <div className="col-md-8 bottom-left">
                                    <div className="top">
                                        <p>Movie</p>
                                        <h6>Spider-Man: Homecoming</h6>
                                    </div>
                                    <div className="row middle">
                                        <div className="col-md-4">
                                            <p>Date</p>
                                            <h6>07 July</h6>
                                        </div>
                                        <div className="col-md-4">
                                            <p>Time</p>
                                            <h6>02:00pm</h6>
                                        </div>
                                        <div className="col-md-4">
                                            <p>Category</p>
                                            <h6>PG-13</h6>
                                        </div>
                                    </div>
                                    <div className="row bottom">
                                        <div className="col-md-4">
                                            <p>Count</p>
                                            <h6>3 pieces</h6>
                                        </div>
                                        <div className="col-md-4">
                                            <p>Seats</p>
                                            <h6>C4, C5, C6</h6>
                                        </div>
                                        <div className="col-md-4">
                                            <p>Price</p>
                                            <h6>$30.00</h6>
                                        </div>
                                    </div>
                                    <div className="round-grey-bottom"></div>
                                </div>
                                <div className="col-md-4 bottom-right">
                                    <div className="row">
                                        <div className="col-md-10 top">
                                            <p>Movie</p>
                                            <h6>Spider-Man: Homecoming</h6>
                                            <div className="row middle">
                                                <div className="col-md-4">
                                                    <p>Date</p>
                                                    <h6>07 July</h6>
                                                </div>
                                                <div className="col-md-8">
                                                    <p>Time</p>
                                                    <h6>02:00pm</h6>
                                                </div>
                                            </div>
                                            <div className="row bottom-1">
                                                <div className="col-md-4">
                                                    <p>Count</p>
                                                    <h6>3 pieces</h6>
                                                </div>
                                                <div className="col-md-8">
                                                    <p>Seats</p>
                                                    <h6>C4, C5, C6</h6>
                                                </div>
                                            </div>
                                            <div className="row bottom-2">
                                                <div className="col-md-4">
                                                </div>
                                                <div className="col-md-8">
                                                    <p>Category</p>
                                                    <h6>PG-13</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="barcode-ticket">
                                                <div className="barcode-result">
                                                    <img src={process.env.PUBLIC_URL + '/svg/bitmap-1.svg'} alt="bitmap 1" />
                                                </div>
                                                <div className="barcode-result">
                                                    <img src={process.env.PUBLIC_URL + '/svg/bitmap-2.svg'} alt="bitmap 2" />
                                                </div>
                                                <div className="barcode-result">
                                                    <img src={process.env.PUBLIC_URL + '/svg/bitmap-3.svg'} alt="bitmap 3" />
                                                </div>
                                                <div className="barcode-result">
                                                    <img src={process.env.PUBLIC_URL + '/svg/bitmap-4.svg'} alt="bitmap 4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-button">
                            <div className="download-ticket">
                                <button className="button-1">
                                    <img src={process.env.PUBLIC_URL + '/svg/download.svg'} alt="download icon" />
                                    Download
                                </button>
                            </div>
                            <div className="print-ticket">
                                <button className="button-2">
                                    <img src={process.env.PUBLIC_URL + '/svg/printer.svg'} alt="printer icon" />
                                    Print
                                </button>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
            <div class="container ticket-result-sm">
                <center className="row main note">
                    <div className="ticket-proof">
                        <div className="top-ticket">
                            <img src={process.env.PUBLIC_URL + '/svg/ticket-check.svg'} alt="check icon" />
                            <h1>Thank You!</h1>
                            <p>Your transaction was successful</p>
                            <div className="round-grey-sm-1"></div>
                            <div className="round-grey-sm-2"></div>
                        </div>
                        <div className="bottom-ticket">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="barcode-ticket">
                                        <div className="barcode-result">
                                            <img src={process.env.PUBLIC_URL + '/svg/bitmap-1.svg'} alt="bitmap 1" />
                                        </div>
                                        <div className="barcode-result">
                                            <img src={process.env.PUBLIC_URL + '/svg/bitmap-2.svg'} alt="bitmap 2" />
                                        </div>
                                        <div className="barcode-result">
                                            <img src={process.env.PUBLIC_URL + '/svg/bitmap-3.svg'} alt="bitmap 3" />
                                        </div>
                                        <div className="barcode-result">
                                            <img src={process.env.PUBLIC_URL + '/svg/bitmap-4.svg'} alt="bitmap 4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="info-ticket">
                                    <div className="info first">
                                        <p>Movie</p>
                                        <h6>Spider-Man</h6>
                                    </div>
                                    <div className="info">
                                        <p>Category</p>
                                        <h6>PG-13</h6>
                                    </div>
                                </div>
                                <div className="info-ticket">
                                    <div className="info first">
                                        <p>Date</p>
                                        <h6>07 Jul</h6>
                                    </div>
                                    <div className="info">
                                        <p>Time</p>
                                        <h6>2:00pm</h6>
                                    </div>
                                </div>
                                <div className="info-ticket">
                                    <div className="info first">
                                        <p>Count</p>
                                        <h6>3 pcs</h6>
                                    </div>
                                    <div className="info">
                                        <p>Seats</p>
                                        <h6>C4, C5, C6</h6>
                                    </div>
                                </div>
                                <div className="info-ticket">
                                    <div className="info first last">
                                        <h6>Total</h6>
                                    </div>
                                    <div className="info last">
                                        <h6>$30.00</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
            <Footer />
        </div>
    </>)
}

