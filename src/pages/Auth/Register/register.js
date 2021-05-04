import React,{useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
import { UserRegister } from '../../../Redux/Actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/style.css';

const Register = () =>{
  const dispatch = useDispatch()
  let history = useHistory();
  const [loginLoading, setRegisterLoading] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [formData, setFormData] = useState({
    email: '-',
    password: '-',
    acc : false
  })
  const { data,error} = useSelector((state)=> state.UserRegister)

  const handleChange = (e) => {
    const { checked } = e.target
    formData.acc = checked
    if(checked){
      setButtonDisabled(false)
    }else{
      setButtonDisabled()
    }
  }

  const processregister = (e)=>{
      e.preventDefault()
      dispatch(UserRegister(formData, setRegisterLoading, history))
  }
  return(
    <div className='bg-light'>
      <section className="container-fluid">
        <div className="row">
          <div className="d-none d-sm-none d-md-block col-xl-7 p-0">
            <div className="side-form">
              <div className="content">
                <div className="card-body mx-5">
                  <div className="align-items-start m-5">
                    <div className="d-flex justify-content-start pb-5">
                      <img src={process.env.PUBLIC_URL + '/svg/tickitz.svg'} className="logo" />
                    </div>
                    <div className="text-white mt-4">
                      <div className="mx-1">
                        <div className="mt-1 mx-1 text-white">
                          <h1 className="fw-bold">Lets build your account</h1>
                          <span className="caption">To be a loyal moviegoer and access all of features,
                            your details are required.
                          </span>
                        </div>
                        <div className="position-relative m-4">
                          <div className="progress" style={{height: '1px'}}>
                            <div className="progress-bar" role="progressbar" style={{width: '0%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                          <button type="button" className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-block bg-white rounded-pill" style={{width: '2rem', height: '2rem'}}>1</button>
                          <button type="button" className="position-absolute top-0 start-50 translate-middle btn btn-sm btn-secondary rounded-pill" style={{width: '2rem', height: '2rem'}}>2</button>
                          <button type="button" className="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style={{width: '2rem', height: '2rem'}}>3</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-auth d-flex col-xl-5 bg-white justify-content-center">
            <div className="mx-3">
              <div className="card-body">
                <div className="my-5 text-break">
                  <h4 className="fw-bold">Fill your additional details</h4>
                </div>
                <form onSubmit={(e)=>processregister(e)}>
                  <div className="form-group mb-2">
                    <small>Email</small>
                    <div className="input-group input-group-lg mt-3">
                      <input type="email" className="username form-control bg-light" aria-label="Email" aria-describedby="basic-addon2" onChange={(e)=>setFormData({ ...formData, email: e.target.value })} required />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <small htmlFor="exampleInputPassword1" className="mb-3">Password</small>
                    <div className="input-group input-group-lg mt-3">
                      <input type="password" className="password form-control bg-light" aria-label="Password" aria-describedby="basic-addon2" onChange={(e)=>setFormData({ ...formData, password: e.target.value })} required />
                      <div className="input-group-text bg-light">
                        <img src={process.env.PUBLIC_URL + '/svg/eye.svg'} />
                      </div>
                    </div>
                  </div>
                  <div className="form-check ms-2 mb-3">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked"  onChange={e => handleChange(e)}/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      I agree to terms &amp; conditions
                    </label>
                  </div>
                  <div className="d-grid gap-2">
                  {formData.acc ? (
                    <button type="submit" className="btn btn-purple btn-block btn-rounded btn-lg py-3" onClick={(e)=>processregister(e)}>
                      Join for free now
                    </button>
                  ):(
                    <button type="submit" className="btn btn-purple btn-block btn-rounded btn-lg py-3" disabled >
                      Join for free now
                    </button>
                  )}
                  </div>
                </form>
                <div className="justify-content-center text-center mt-4">
                  <span className="text-muted">Do you already have an account? <Link to='./login' className="text-purple fw-bold">Log in</Link></span>
                </div>
                <div className="line my-5">
                  <span className="text-muted">Or</span>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-6 col-md-6 col-lg-6 col-xl-6">
                    <button className="btn btn-block shadow-lg p-3 btn-icon btn-rounded text-muted"><img src={process.env.PUBLIC_URL + '/svg/rounded-google.svg'} /><span className="ms-2 d-none d-lg-inline-block">Google</span></button>
                  </div>
                  <div className="col-6 col-md-6 col-lg-6 col-xl-6">
                    <button className="btn btn-block shadow-lg p-3 btn-icon btn-rounded text-muted"><img src={process.env.PUBLIC_URL + '/svg/rounded-facebook.svg'} /><span className="ms-2 d-none d-md-inline-block">Facebook</span></button>
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

export default Register