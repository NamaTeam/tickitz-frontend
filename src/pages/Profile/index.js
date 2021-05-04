import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { FetchUser, UpdateUser } from "../../Redux/Actions/user"
import { Link } from "react-router-dom";
import './styles/style2.css'
import { Footer, Navbar } from '../../components';


export const Profile = () => {
  const dispatch = useDispatch()
  const [activeTabs, setActiveTabs] = useState(1);

  const { data: userData } = useSelector((state) => state.UserLogin)
  const { data } = useSelector((state) => state.FetchUser)
  const { error } = useSelector((state) => state.UpdateUser)

  useEffect(() => {
    dispatch(FetchUser(userData.data))
  }, [dispatch, userData])

  // const [formData, setFormData] = useState({
  //   first_name: `${data.first_name}`,
  //   last_name: `${data.last_name}`,
  //   email: `${data.email}`,
  //   phone: `${data.phone}`,
  //   password: '',
  //   confirm_password: '',
  //   err: null,
  //   message: ''
  // })

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   if (formData.password === '' || formData.confirm_password === '') {
  //     alert("password is required")
  //   } else if (formData.password !== formData.confirm_password) {
  //     alert("both passwords are not matching")
  //   } else {
  //     let myData = {
  //       first_name: formData.first_name === "undefined" ? data?.first_name : formData.first_name,
  //       last_name: formData.last_name === "undefined" ? data?.last_name : formData.last_name,
  //       email: formData.email === "undefined" ? data?.email : formData.email,
  //       phone: formData.phone === "undefined" ? data?.phone : formData.phone,
  //       password: formData.password === "undefined" ? '' : formData.password,
  //     }

  //     dispatch(UpdateUser(userData.data, myData))
  //     dispatch(FetchUser(userData.data))
  //     if (error) {
  //       alert("Updating Failed")
  //     } else {
  //       alert("Updating Success")
  //     }
  //   }
  // }

  // const test = (e) => {
  //   console.log(e)
  // }

  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='row g-3'>
          <div className='col-12 col-md-3'>
            <div className='card mt-5 card-rounded'>
              <div className='d-flex justify-content-between mx-5 mt-3'>
                <p className='pt-3'>INFO</p>
                <img src={process.env.PUBLIC_URL + '/svg/menu-bar.svg'} />
              </div>
              <div className='w-100 d-flex justify-content-center mt-3 photo-profile'>
                <img width='130px' height='130px' className='rounded-circle' src={process.env.PUBLIC_URL + '/logo/no-photo.png'} alt='profile' />
              </div>
              <div className='w-100 d-flex justify-content-center mt-2 name'>
                <p className='name-text'>{`${data.first_name || 'No'} ${data.last_name || 'Name'}`}</p>
              </div>
              <div className='d-flex justify-content-center w-100'>
                <p>Moviegers</p>
              </div>
              <hr className='mx-5' />
            </div>
          </div>

          <div className='col-12 col-md-9'>
            <div className='card card-rounded mt-5 border-bottom nav-tab'>
              <div className='w-100 d-flex justify-content-start'>
                <div className={`mx-3 py-3 tab ${activeTabs === 1 ? 'active' : ''}`} onClick={() => setActiveTabs(1)} >Account Settings</div>
                <div className={`mx-3 py-3 tab ${activeTabs === 2 ? 'active' : ''}`} onClick={() => setActiveTabs(2)} >Order History</div>
              </div>
            </div>
            <div className={`mx-3 py-3 tab ${activeTabs === 1 ? 'd-block' : 'd-none'}`}>
              <div className='card card-rounded mt-3 py-3'>
                <div className='mt-3 mx-5 pb-2 border-bottom'>
                  <p>Details information</p>
                </div>
                <form className='mt-3 mx-5 mb-5 row form-user'>
                  <div className='mt-4 col-12 col-md-6'>
                    <label htmlFor="inputLastName" className="mb-3">Last Name</label>
                    <input type="text" value='Test User' className="form-control py-3 px-4 form-input" id="inputLastName" required />
                  </div>
                  <div className='mt-4 col-12 col-md-6'>
                    <label htmlFor="inputLastName" className="mb-3">Last Name</label>
                    <input type="text" value='Test User' className="form-control py-3 px-4 form-input" id="inputLastName" required />
                  </div>
                  <div className='mt-4 col-12 col-md-6'>
                    <label htmlFor="inputLastName" className="mb-3">Last Name</label>
                    <input type="text" value='Test User' className="form-control py-3 px-4 form-input" id="inputLastName" required />
                  </div>
                  <div className='mt-4 col-12 col-md-6'>
                    <label htmlFor="inputLastName" className="mb-3">Last Name</label>
                    <div className="input-group">
                      <span className="input-group-text ps-4 group-text">+62</span>
                      <input type="tel" value='Test User' className="form-control py-3 px-2 form-input-group" id="inputPhone" required />
                    </div>
                  </div>
                </form>
              </div>
              <div className='card card-rounded mt-3 py-3'>
                <div className='mt-3 mx-5 pb-2 border-bottom'>
                  <p>Account and Privacy</p>
                </div>
                <form className='mt-3 mx-5 mb-5 row form-user'>
                  <div className='mt-4 col-12 col-md-6'>
                    <label htmlFor="inputLastName" className="mb-3">Last Name</label>
                    <input type="password" value='' className="form-control py-3 px-4 form-input" id="inputLastName" required />
                  </div>
                  <div className='mt-4 col-12 col-md-6'>
                    <label htmlFor="inputLastName" className="mb-3">Last Name</label>
                    <input type="password" value='' className="form-control py-3 px-4 form-input" id="inputLastName" required />
                  </div>
                </form>
              </div>
              <button className='mt-3 mx-5 mb-5 px-5 py-2 btn btn-rounded btn-update'>
                Update Changes
              </button>
            </div>
            <div className={`${activeTabs === 2 ? 'd-block' : 'd-none'}`} >
              <div className='mt-3 py-3 card card-rounded order-history'>
                <div className='d-flex justify-content-between px-5 order-head'>
                  <div className=''>
                    <small>Tuesday, 07 July 2020 - 04:30pm</small>
                    <h5 className='mt-2'>Spider-Man: Homecoming</h5>
                  </div>
                  <img className='logo-cinema' src={process.env.PUBLIC_URL + '/svg/cineone.svg'} alt='cinema' />
                </div>
                <hr className='mx-5 mt-4' />

                <div id="collapseOne" className="mx-5 accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Accordion active
                  </div>
                </div>

                <div className='mx-5 my-3 d-flex justify-content-between align-items-center'>
                  <div className='py-2 px-2 px-md-5 text-center status-active'>
                    Ticket is active
                  </div>
                  <p className='text-muted d-flex accor-toggle' data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Show Details
                    <img className='d-none d-sm-block mx-3' src={process.env.PUBLIC_URL + '/svg/arrow-down.svg'} alt='arrow' />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}