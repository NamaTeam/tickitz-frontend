import React,{useState} from 'react'
import { Link,useHistory, useParams } from 'react-router-dom'
import '../styles/style.css';
import { useDispatch, useSelector } from 'react-redux'
import { UserUpdatePassword } from '../../../Redux/Actions/auth'

const UpdatePassword = () =>{
    const dispatch = useDispatch()
    const {id} = useParams()
    let history = useHistory();
    const [updateLoading, setUpdateLoading] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [formData, setFormData] = useState({
        id: id,
        password: '-',
        confirm : '-'
      })

    const matchingPassword = (e) =>{
        e.preventDefault()
        formData.confirm = e.target.value
        if(formData.password == formData.confirm){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    }

    const processUpdate = (e)=>{
        e.preventDefault()
        dispatch(UserUpdatePassword(formData, setUpdateLoading, history))
    }
    return (
        <div className='bg-light'>
            <section className="container-fluid">
                <div className="row">
                    <div className="d-none d-sm-none d-md-block col-xl-7 p-0">
                        <div className="side-form">
                            <div className="content">
                                <div className="card-body">
                                    <div className="align-items-start m-5">
                                        <div className="d-flex justify-content-start pb-5">
                                            <img src={process.env.PUBLIC_URL + '/svg/tickitz.svg'} className="logo" />
                                        </div>
                                        <div className="text-white mt-4">
                                            <div className="mx-1">
                                                <div className="mt-1 mx-1 text-white">
                                                    <h1 className="fw-bold">Lets build your account</h1>
                                                    <small className="caption">To be able to use your account again, please</small><br />
                                                    <small className="caption">complete the following steps.</small>
                                                </div>
                                                <div className="position-relative m-4">
                                                    <div className="progress" style={{height: '1px'}}>
                                                        <div className="progress-bar" role="progressbar" style={{width: '33%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <button type="button" className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-block bg-white rounded-pill" style={{width: '2rem', height: '2rem'}}>1</button>
                                                    <button type="button" className="position-absolute top-0 start-33 translate-middle btn btn-sm bg-white rounded-pill" style={{width: '2rem', height: '2rem'}}>2</button>
                                                    <button type="button" className="position-absolute top-0 start-66 translate-middle btn btn-sm btn-secondary rounded-pill" style={{width: '2rem', height: '2rem'}}>3</button>
                                                    <button type="button" className="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style={{width: '2rem', height: '2rem'}}>4</button>
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
                                <div className="mt-5 mb-3 text-break">
                                    <h4 className="fw-bold">Lets reset your password</h4>
                                    <small className="text-muted">To be able to use your account again, please</small>
                                </div>
                                <form onSubmit={(e)=>processUpdate(e)}>
                                    <div className="form-group mb-5">
                                        <small htmlFor="exampleInputPassword1" className="mb-3">Password</small>
                                        <div className="input-group input-group-lg mt-3">
                                            <input type="password" className="password form-control bg-light" aria-label="Password" aria-describedby="basic-addon2" onChange={(e)=>setFormData({ ...formData, password: e.target.value })}/>
                                            <div className="input-group-text bg-light">
                                                <img src={process.env.PUBLIC_URL + '/svg/eye.svg'} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-5">
                                        <small htmlFor="exampleInputPassword1" className="mb-3">Confirm Password</small>
                                        <div className="input-group input-group-lg mt-3">
                                            <input type="password" className="password form-control bg-light" aria-label="Password" aria-describedby="basic-addon2" onChange={(e)=>matchingPassword(e)}/>
                                            <div className="input-group-text bg-light">
                                                <img src={process.env.PUBLIC_URL + '/svg/eye.svg'} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2">
                                    {buttonDisabled ?
                                        <button type="submit" className="btn btn-purple btn-block btn-rounded btn-lg py-3" disabled >
                                            Activate now
                                        </button>
                                    :
                                    <button type="submit" className="btn btn-purple btn-block btn-rounded btn-lg py-3">
                                            Activate now
                                    </button>
                                    }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UpdatePassword