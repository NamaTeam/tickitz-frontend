import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { FetchUser } from "../../Redux/Actions/user"
import { Link } from "react-router-dom";
import './style/style.css';
import { Footer, Navbar } from '../../components';

export const Admin = () => {
    // const dispatch = useDispatch()

    // const { data: userData } = useSelector((state) => state.UserLogin)
    // const { data } = useSelector((state) => state.FetchUser)

    // useEffect(() => {
    //     dispatch(FetchUser(userData.data))
    // }, [dispatch, userData])

    return (
        <div class="container-fluid h-100">
        <Navbar/>
            <div className="row d-flex justify-content-arounde">
            <p className=" d-flex fs-3 fw-bold text-update">Movie Description</p>
            <div className="row d-flex col-6 mb-5 my-5 d-flex mx-5 movie_desc">
            <div className="row col-md-3 d-flex justify-content-between movie-poster-dsc">
                    <img src={process.env.PUBLIC_URL + '/logo/movie-a.png'} alt="poster" />
                </div>
        <form className="float-end">

            <div div className="form-group mb-3">
            <label className="mb-2" htmlFor="nama">Movies Name</label>
            <input type="text" id="nama" className="form-control " placeholder="" />
            </div>
            <div className="form-group">
            <label className="mb-2" htmlFor="umur">Category</label>
            <input type="text" id="umur" className="form-control " placeholder="" />
            </div>
            
        </form>


    <form className="float-end d-flex form-update-middle">
        
        <div div className="form_group1">
        <label className="mb-2" htmlFor="nama">Release Date</label>
        <input type="text" id="nama" className="form-control " placeholder="" />
        </div>
        <div className="form_group2 mx-lg-3">
        <label className="mb-2" htmlFor="text-update-movies">Duration(hour/minutes)</label>
        <input type="" id="umur" className="form-control" placeholder="" />
        </div>
        <div className="form_group3">
        <label htmlFor="umur"></label>
        <input type="" id="umur" className="form-control mt-2" placeholder="" />
        </div>
        
    </form>
    <form className="d-flex ">
        
        <div div className="form-update-bottom">
        <label className="mb-2" htmlFor="nama">Director</label>
        <input type="text" id="nama" className="form-control " placeholder="" />
        </div>
        <div className=" form-update-bottom mx-lg-3">
        <label className="mb-2" htmlFor="text-update-movies">Casts</label>
        <input type="" id="umur" className="form-control" placeholder="" />
        </div>
        
    </form>

    <form className="d-flex ">
        
        <div div className="form-update-bottom-2">
        <label className="mb-2" htmlFor="nama">Synopsis</label>
        <input type="text" id="nama" className="form-control " placeholder="" />
        </div>
        
    </form>    
            </div>
            

            </div>
            <div className="row mb-5 my-5 d-flex flex-column float-end premier_location">
              
                <input type="date" className="form-date">
                </input>
                <button type="button" className="btn-date btn btn-primary">+</button>

            <div className="row mb-5 my-5 d-flex flex-column float-end show_time">
                <p className="d-flex fs-3 fw-blod fw-bold text-update1">Premier Location</p>
                <select className="select-form align-items-center mb-3 my-lg-2" placeholder="Location">Location</select>
                <div className="boxoffice-location justify-content-between align-items-center">
                <img
                  className="mx-4"
                  src={process.env.PUBLIC_URL + "/svg/ebu.svg"}
                  alt="ebu id cinema"
                />
                <img
                className="mx-4"
                  id="cineone"
                  src={process.env.PUBLIC_URL + "/svg/cineone.svg"}
                  alt="cineone cinema"
                />
                <img
                className="mx-4"
                  id="hiflix"
                  src={process.env.PUBLIC_URL + "/svg/hiflix.svg"}
                  alt="hiflix cinema"
                />
                </div>

            </div>


            <p>Sales Chart</p>
            <div className="row d-sm-block w-100 h-100">
                <div className="align-content-sm-betweencard-bootom bg-primary">
                    <h1>ini card</h1>
                </div>

            </div>
            </div>
        <Footer/>    

        </div>
        
    )
}