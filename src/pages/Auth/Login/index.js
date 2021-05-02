import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { UserLogin } from '../../../Redux/Actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/style.css';

const Login = () =>{
    const dispatch = useDispatch()
    const [loginLoading, setLoginLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { data,error} = useSelector((state)=> state.UserLogin)
    const processlogin = (e)=>{
        e.preventDefault()
        dispatch(UserLogin(formData, setLoginLoading))
    }
    return(
    <div className='bg-light'>
        <section className="container-fluid">
            <div className="row">
                <div className="d-none d-sm-none d-md-block col-xl-7 p-0">
                    <div className="side-form">
                        <div className="content">
                            <div className="card-body mx-5">
                                <div className="align-items-center p-5 m-5">
                                    <div className="d-flex justify-content-center mt-5">
                                        <img src={process.env.PUBLIC_URL + '/svg/tickitz.svg'} className="img-fluid" />
                                    </div>
                                    <div className="text-white mt-4">
                                        <div className="mx-1">
                                            <div className="mt-1 mx-1 text-center text-white">
                                                <h1>wait, watch, wow!</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-auth d-block col-xl-5 bg-white justify-content-center">
                    <div className="mx-5">
                        <div className="card-body">
                            <div className="mt-4 mb-2 caption">
                                <h1 className="fw-bold">Sign In</h1>
                                <small>Sign in with your data that you entered during your registration</small>
                            </div>
                            <form onSubmit={(e)=>processlogin(e)}>
                                <div className="form-group mb-2">
                                    <small>Email</small>
                                    <div className="input-group input-group-lg mt-3">
                                        <input type="email" className="username form-control bg-light" aria-label="Email" aria-describedby="basic-addon2" onChange={(e)=>setFormData({ ...formData, email: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="form-group mb-5">
                                    <small htmlFor="exampleInputPassword1" className="mb-3">Password</small>
                                    <div className="input-group input-group-lg mt-3">
                                        <input type="password" className="password form-control bg-light" aria-label="Password" aria-describedby="basic-addon2" onChange={(e)=>setFormData({ ...formData, password: e.target.value })} required />
                                        <div className="input-group-text bg-light">
                                            <img src={process.env.PUBLIC_URL + '/svg/eye.svg'} />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-grid gap-2">
                                {loginLoading ? (
                                    <button type="submit" className="btn btn-purple btn-block btn-rounded btn-lg py-3" disabled >
                                        Loading....
                                    </button>
                                ):(
                                    <button type="submit" className="btn btn-purple btn-block btn-rounded btn-lg py-3" onClick={(e)=>processlogin(e)}>
                                        Sign In
                                    </button>
                                )}
                                </div>
                            </form>
                            <div className="justify-content-center text-center mt-2">
                                <span className="text-muted">Forgot your password? <Link to="./forgot-password" className="text-purple fw-bold"> Reset now</Link></span>
                            </div>
                            <div className="line my-5">
                                <span className="text-muted">Or</span>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-6 col-md-6 col-lg-6 col-xl-6">
                                    <button className="btn btn-block btn-rounded shadow-lg p-3 btn-icon text-muted"><img src={process.env.PUBLIC_URL + '/svg/rounded-google.svg'} /><span className="ms-2 d-none d-lg-inline-block">Google</span></button>
                                </div>
                                <div className="col-6 col-md-6 col-lg-6 col-xl-6">
                                    <button className="btn btn-block btn-rounded shadow-lg p-3 btn-icon text-muted"><img src={process.env.PUBLIC_URL + '/svg/rounded-facebook.svg'} /><span className="ms-2 d-none d-md-inline-block">Facebook</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Login