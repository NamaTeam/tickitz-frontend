import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { FetchUser, UpdateUser } from "../../Redux/Actions/user"
import { Link, useHistory } from "react-router-dom";
import './styles/style2.css'
import { Footer, Navbar } from '../../components';
import { orderHis } from '../../Redux/Actions/order'
import { useForm } from 'react-hook-form';
import moment from 'moment'


export const Profile = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const formData = new FormData()
  const [activeTabs, setActiveTabs] = useState(1);
  const [photo, SetPhoto] = useState([])
  const [readOnly, setReadOnly] = useState(true)
  const { data: userData } = useSelector((state) => state.UserLogin)
  const { data: user } = useSelector((state) => state.FetchUser)
  const { data: order } = useSelector((state) => state.GetOrderHis)
  const { error } = useSelector((state) => state.UpdateUser)

  const { register, handleSubmit, formState: { errors } } = useForm();

  const formatdate = (date) => {
    let dateNow = moment(date, 'YYYYMMDD').format('dddd, Do MMMM YYYY')
    return dateNow
  }
  useEffect(() => {
    dispatch(FetchUser(userData.data))
  }, [dispatch, userData, photo])

  // const onSubmit = data => console.log(data)
  useEffect(() => {
    formData.append('photo', photo[0])
    dispatch(UpdateUser(userData.data, formData))
    console.log(formData)

  }, [photo])

  useEffect(() => {
    dispatch(orderHis(userData.data.id));
  }, [])

  const onSubmit = (data) => {
    if (data.password !== '') {
      if (data.password !== data.confirm) {
        alert('Password doesn`t match')
        return;
      }
      dispatch(UpdateUser(userData.data, data))
      dispatch(FetchUser(userData.data))
    } else {
      dispatch(UpdateUser(userData.data, data))
      dispatch(FetchUser(userData.data))
    }
    setReadOnly(true)
  }

  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='row g-3'>
          <div className='col-12 col-md-3'>
            <div className='card mt-5 card-rounded'>
              <div className='d-flex justify-content-between mx-5 mt-3'>
                <p className='pt-3'>INFO</p>
                <img src={process.env.PUBLIC_URL + '/svg/menu-bar.svg'} alt='icon-menu' />
              </div>
              <div className='w-100 d-flex justify-content-center mt-3 photo-profile'>
                <label>
                  <input type="file" name="photo" accept="image/*" multiple onChange={(e) => SetPhoto(e.target.files)} />
                  <img width='130px' height='130px' className='rounded-circle' src={(user.photo) ? `${process.env.REACT_APP_API_IMG_URL}${user.photo}` : `${process.env.PUBLIC_URL}/logo/no-photo.png`} alt='profile' />
                </label>
              </div>
              <div className='w-100 d-flex justify-content-center mt-2 name'>
                {user.first_name !== null || user.last_name !== null ? (
                  <p className='name-text'>{`${user.first_name || ''} ${user.last_name || ''}`}</p>
                ) : (
                  <p className='name-text'>No Name</p>
                )}
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
                <form className='mt-3 mx-5 mb-5 row form-user' onSubmit={handleSubmit(onSubmit)}>
                  <div className='mt-4 col-12 col-md-6'>
                    <label htmlFor="inputFirstName" className="mb-3">First Name</label>
                    <input type="text" defaultValue={user.first_name || register.first_name} className={`form-control py-3 px-4 form-input profile ${errors.first_name ? 'is-invalid' : ''}`} id="inputFirstName" {...register('first_name', { required: 'First name required' })} readOnly={readOnly} />
                    <small className='text-danger ms-3 mt-2'>{errors?.first_name?.message}</small>
                  </div>
                  <div className='mt-4 col-12 col-md-6'>
                    <label htmlFor="inputLastName" className="mb-3">Last Name</label>
                    <input type="text" defaultValue={user.last_name || register.last_name} className={`form-control py-3 px-4 form-input profile ${errors.last_name ? 'is-invalid' : ''}`} id="inputLastName" {...register('last_name', { required: 'Last name required' })} readOnly={readOnly} />
                    <small className='text-danger ms-3 mt-2'>{errors?.last_name?.message}</small>
                  </div>
                  <div className='mt-4 col-12 col-md-6'>
                    <label htmlFor="inputEmail" className="mb-3">Email</label>
                    <input type="email" defaultValue={user.email || register.email} className={`form-control py-3 px-4 form-input profile ${errors.email ? 'is-invalid' : ''}`} id="inputEmail" {...register('email', { required: 'Email required' })} readOnly={readOnly} />
                    <small className='text-danger ms-3 mt-2'>{errors?.email?.message}</small>
                  </div>
                  <div className='mt-4 col-12 col-md-6'>
                    <label htmlFor="inputPhone" className="mb-3">Phone</label>
                    <div className="input-group">
                      <span className="input-group-text ps-4 group-text">+62</span>
                      <input type="text" defaultValue={user.phone || register.phone} className={`form-control py-3 px-4 form-input-group profile ${errors.phone ? 'is-invalid' : ''}`} id="inputPhone" {...register('phone', { required: 'Phone required' })} readOnly={readOnly} />
                      <small className='text-danger ms-3 mt-2'>{errors?.password?.message}</small>
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
                    <label htmlFor="inputPassword" className="mb-3">Password</label>
                    <input type="password" defaultValue='' className="form-control py-3 px-4 form-input" id="inputPassword" {...register('password')} readOnly={readOnly} />
                  </div>
                  <div className='mt-4 col-12 col-md-6'>
                    <label htmlFor="inputConfirm" className="mb-3">Confirm Password</label>
                    <input type="password" defaultValue='' className="form-control py-3 px-4 form-input" id="inputConfirm" {...register('confirm')} readOnly={readOnly} />
                  </div>
                </form>
              </div>
              <button className='mt-3 mx-5 mb-5 px-5 py-2 btn btn-rounded btn-update' onClick={handleSubmit(onSubmit)}>
                Update Changes
              </button>
              <button className='btn btn-rounded float-end px-5 py-2 mx-5 mt-3 btn-edit' onClick={() => setReadOnly(false)} >
                Edit Profile
              </button>
            </div>

            <div className={`${activeTabs === 2 ? 'd-block' : 'd-none'}`} >
              {order.map((item) => {
                return (
                  <div className='mt-3 py-3 card card-rounded order-history'>
                    <div className='d-flex justify-content-between px-5 order-head'>
                      <div className=''>
                        <small>{formatdate(`${item.order_date}`)}</small>
                        <h5 className='mt-2'>{item.movie_title}</h5>
                      </div>
                      <img className='logo-cinema' src={`${process.env.REACT_APP_API_IMG_URL}${item.logo}`} alt='cinema' />
                    </div>
                    <hr className='mx-5 mt-4' />
                    <div id={`collapseOne${item.id}`} className="mx-5 accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <img src={process.env.PUBLIC_URL + '/svg/logo.svg'} alt="logo tickitz" />
                        <div className='row'>
                          <div className='col-12 cols-sm-12 col-md-6'>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item">
                                <h5 className='fw-bold'>Title : </h5>
                                <small>{item.movie_title}</small>
                              </li>
                              <li class="list-group-item">
                                <h5 className='fw-bold'>Date : </h5>
                                <small>{moment(`${item.start_date}`, 'YYYYMMDD').format('dddd, Do MMMM YYYY - hh:mma')}</small>
                              </li>
                            </ul>
                          </div>
                          <div className='col-12 col-sm-12 col-md-6'>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item">
                                <h5 className='fw-bold'>Seat : </h5>
                                <small>{item.seat.length} Pieces</small>
                              </li>
                              <li class="list-group-item">
                                <h5 className='fw-bold'>Number Seat : </h5>
                                <small>{`${item.seat}`}</small>
                              </li>
                            </ul>
                          </div>
                          <div className='col-12 card-body'>
                            <ul class="list-group list-group-flush">
                              <li class='list-group-item'>
                                <div className="d-flex justify-content-between">
                                  <h5 className='fw-bold'>Total :</h5>
                                  <h5>Rp. {item.total_payment}</h5>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mx-5 my-3 d-flex justify-content-between align-items-center'>
                      {(item.status === 'checkout') ? (
                        <div className='py-2 px-2 px-md-5 text-center status-checkout' onClick={() => history.push(`/payment/${item.id.split('-')[1]}`)}>
                          Checkout
                        </div>
                      ) : (
                        <div className='py-2 px-2 px-md-5 text-center status-active' onClick={() => history.push(`/ticket-result/${item.id.split('-')[1]}`)}>
                          Active
                        </div>
                      )
                      }
                      <p className='text-muted d-flex accor-toggle' data-bs-toggle="collapse" data-bs-target={`#collapseOne${item.id}`} aria-expanded="true" aria-controls={`collapseOne${item.id}`}>
                        Show Details
                    <img className='d-none d-sm-block mx-3' src={process.env.PUBLIC_URL + '/svg/arrow-down.svg'} alt='arrow' />
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}