import React from 'react'
import { Link } from 'react-router-dom'
import './styles/style.css'

const Footer = () =>{
    return(
        <footer>
            <div className="row footer-info">
                <div className="first-div col-md-3 col-sm-12">
                    <img src={process.env.PUBLIC_URL + '/svg/logo.svg'} alt="" />
                    <p>Stop waiting in line. Buy tickets <br />
                    conveniently, watch movies quietly</p>
                </div>
                <div className="second-div col-md-3 col-sm-12">
                    <h6>Explore</h6>
                    <ul className="footer-nav">
                        <li className="item">
                            <Link to='#' className="link">Cinemas</Link>
                        </li>
                        <li className="item">
                            <Link to='#' className="link">Movies List</Link>
                        </li>
                        <li className="item">
                            <Link to='#' className="link">My Ticket</Link>
                        </li>
                        <li className="item">
                            <Link to='#' className="link">Notification</Link>
                        </li>
                    </ul>
                </div>
                <div className="third-div col-md-3 col-sm-12">
                    <h6>Our Sponsor</h6>
                    <ul className="footer-nav">
                        <li className="item">
                            <Link to='#' className="link">
                                <img src={process.env.PUBLIC_URL + '/svg/ebu.svg'} alt="ebu id cinema" />
                            </Link>
                        </li>
                        <li className="item">
                            <Link to='#' className="link">
                                <img id="cineone" src={process.env.PUBLIC_URL + '/svg/cineone.svg'} alt="cineone cinema" />
                            </Link>
                        </li>
                        <li className="item">
                            <Link to='#' className="link">
                                <img id="hiflix" src={process.env.PUBLIC_URL + '/svg/hiflix.svg'} alt="hiflix cinema" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="fourth-div col-md-3 col-sm-12">
                    <h6>Follow us</h6>
                    <ul className="footer-nav">
                        <li className="item">
                            <img src={process.env.PUBLIC_URL + '/svg/facebook.svg'} alt="facebook icon" />
                            <Link to='#' className="link">Tickitz Cinema id</Link>
                        </li>
                        <li className="item">
                            <img src={process.env.PUBLIC_URL + '/svg/instagram.svg'} alt="instagram icon" />
                            <Link to='#' className="link">tickitz.id</Link>
                        </li>
                        <li className="item">
                            <img src={process.env.PUBLIC_URL + '/svg/twitter.svg'} alt="twitter icon" />
                            <Link to='#' className="link">tickitz.id</Link>
                        </li>
                        <li className="item">
                            <img src={process.env.PUBLIC_URL + '/svg/youtube.svg'} alt="youtube icon" />
                            <Link to='#' className="link">Tickitz Cinema id</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                © 2021 Tickitz. All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer