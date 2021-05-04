import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { FetchUser, UpdateUser } from "../../Redux/Actions/user"
import { Link } from "react-router-dom";
import './styles/style.css'
import { Footer, Navbar } from '../../components';


export const Profile = () => {
    const dispatch = useDispatch()

    const { data: userData } = useSelector((state) => state.UserLogin)
    const { data } = useSelector((state) => state.FetchUser)
    const { error } = useSelector((state) => state.UpdateUser)

    useEffect(() => {
        dispatch(FetchUser(userData.data))
    }, [dispatch, userData])

    const [formData, setFormData] = useState({
        first_name: `${data.first_name}`,
        last_name: `${data.last_name}`,
        email: `${data.email}`,
        phone: `${data.phone}`,
        password: '',
        confirm_password: '',
        err: null,
        message: ''
    })

    const onSubmit = (e) => {
        e.preventDefault();

        if (formData.password === '' || formData.confirm_password === '') {
            alert("password is required")
        } else if (formData.password !== formData.confirm_password) {
            alert("both passwords are not matching")
        } else {
            let myData = {
                first_name: formData.first_name === "undefined" ? data?.first_name : formData.first_name,
                last_name: formData.last_name === "undefined" ? data?.last_name : formData.last_name,
                email: formData.email === "undefined" ? data?.email : formData.email,
                phone: formData.phone === "undefined" ? data?.phone : formData.phone,
                password: formData.password === "undefined" ? '' : formData.password,
            }

            dispatch(UpdateUser(userData.data, myData))
            dispatch(FetchUser(userData.data))
            if (error) {
                alert("Updating Failed")
            } else {
                alert("Updating Success")
            }
        }
    }


    const openBox = (tab, tabTitle) => {
        var i;
        var x = document.getElementsByClassName("settings");
        var y = document.getElementsByClassName("box");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            y[i].classList.remove("active")
        }
        // for (i = 0; i < y.length; i++) {
        //     y[i].classList.remove("active")
        // }
        document.getElementById(tab).style.display = "block";
        document.getElementById(tabTitle).classList.add('active');
    }

    return (
        <>
            <Navbar />
            <div className="container-fluid bg-grey">
                <main className="row main">
                    <div className="col-md-3 col-sm-12 profile-card">
                        <div className="card-top">
                            <h6>INFO</h6>
                            <img src={process.env.PUBLIC_URL + '/svg/menu-bar.svg'} alt="menu bar" />
                        </div>
                        <div className="card-middle">
                            {data.photo === "undefined" || data.photo === null ?
                                <img src={process.env.PUBLIC_URL + '/logo/no-photo.png'} alt="profile" /> :
                                <img src={`http://localhost:5000${data.photo}`} alt="profile" />
                            }
                            {data.first_name === "undefined" || data.first_name === null ?
                                <h5>-</h5> : <h5>{data.first_name} {data.last_name}</h5>
                            }
                            {data.username === "undefined" || data.username === null ?
                                <p>-</p> : <p>{data.username}</p>
                            }
                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <div className="profile-box">
                            <div className="box-top">
                                <button className="box active" id="tab1" onClick={() => openBox('tabs-1', 'tab1')}>Account Settings</button>
                                <button className="box" id="tab2" onClick={() => openBox('tabs-2', 'tab2')}>Order History</button>
                            </div>
                            <div className="settings" id="tabs-1">
                                <div className="title-detail">
                                    <p>Details information</p>
                                </div>
                                <form onSubmit={(e) => onSubmit(e)} className="row user-detail" autoComplete="off">
                                    <div className="col-md-6 left">
                                        <label htmlFor="inputFirstName" className="form-label">First Name</label>
                                        {data.first_name === "undefined" || data.first_name === null ?
                                            <input type="text" defaultValue="-" className="form-control shadow-none" id="inputFirstName" required onChange={(e) => {
                                                setFormData({ ...formData, first_name: e.target.value })
                                            }} /> :
                                            <input type="text" defaultValue={data.first_name} className="form-control shadow-none" id="inputFirstName" required onChange={(e) => {
                                                setFormData({ ...formData, first_name: e.target.value })
                                            }} />
                                        }
                                    </div>
                                    <div className="col-md-6 right">
                                        <label htmlFor="inputLastName" className="form-label">Last Name</label>
                                        {data.last_name === "undefined" || data.last_name === null ?
                                            <input type="text" defaultValue="-" className="form-control shadow-none" id="inputLastName" required onChange={(e) => {
                                                setFormData({ ...formData, last_name: e.target.value })
                                            }} /> :
                                            <input type="text" defaultValue={data.last_name} className="form-control shadow-none" id="inputLastName" required onChange={(e) => {
                                                setFormData({ ...formData, last_name: e.target.value })
                                            }} />
                                        }
                                    </div>
                                    <div className="col-md-6 left">
                                        <label htmlFor="inputEmail" className="form-label">E-mail</label>
                                        {data.email === "undefined" || data.email === null ?
                                            <input type="email" defaultValue="-" className="form-control shadow-none" id="inputEmail" required onChange={(e) => {
                                                setFormData({ ...formData, email: e.target.value })
                                            }} /> :
                                            <input type="email" defaultValue={data.email} className="form-control shadow-none" id="inputEmail" required onChange={(e) => {
                                                setFormData({ ...formData, email: e.target.value })
                                            }} />
                                        }
                                    </div>
                                    <div className="col-md-6 right">
                                        <label htmlFor="inputPhone" className="form-label">Phone Number</label>
                                        <div className="input-group">
                                            <span className="input-group-text">+62</span>
                                            {data.phone === "undefined" || data.phone === null ?
                                                <input type="tel" defaultValue="-" className="form-control shadow-none" id="inputPhone" required onChange={(e) => {
                                                    setFormData({ ...formData, phone: e.target.value })
                                                }} /> :
                                                <input type="tel" defaultValue={data.phone} className="form-control shadow-none" id="inputPhone" required onChange={(e) => {
                                                    setFormData({ ...formData, phone: e.target.value })
                                                }} />
                                            }
                                        </div>
                                    </div>
                                    <div className="title-account">
                                        <p>Account and Privacy</p>
                                    </div>
                                    <div className="col-md-6 left">
                                        <label htmlFor="inputPassword1" className="form-label">New Password</label>
                                        <input type="password" className="form-control shadow-none" id="inputPassword1" required onChange={(e) => {
                                            setFormData({ ...formData, password: e.target.value })
                                        }} />
                                    </div>
                                    <div className="col-md-6 right">
                                        <label htmlFor="inputPassword2" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control shadow-none" id="inputPassword2" required onChange={(e) => {
                                            setFormData({ ...formData, confirm_password: e.target.value })
                                        }} />
                                    </div>
                                    <div className="update-profile">
                                        <button type="submit" className="btn" onClick={(e) => onSubmit(e)} >Update changes</button>
                                    </div>
                                </form>
                            </div>
                            <div className="settings order" id="tabs-2">

                                <div className="row cinema-detail">
                                    <div className="col-md-6 schedule">
                                        <p>Tuesday, 07 July 2020</p>
                                        <h4>Spider-Man: Homecoming</h4>
                                    </div>
                                    <div className="col-md-6 logo">
                                        <img src={process.env.PUBLIC_URL + '/svg/cineone.svg'} alt="cineone" />
                                    </div>
                                    <div className="col-md-6 status">
                                        <button disabled type="submit" className="btn book-now">Book now</button>
                                    </div>
                                    <div className="col-md-6 show-details">
                                        <img src={process.env.PUBLIC_URL + '/svg/cineone.svg'} alt="cineone" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}