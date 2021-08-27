import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { UserVerify } from '../../../Redux/Actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/style.css';

const VerifyRegister = () =>{
  const dispatch = useDispatch()
  const [loginLoading, setRegisterLoading] = useState(false)
  const [formData, setFormData] = useState({
    token : '-'
  })

  const processVerify = (e)=>{
      e.preventDefault()
      dispatch(UserVerify(formData, setRegisterLoading))
  }

    return(
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
                    <h1 className="fw-bold">One step again for complete registration</h1>
                    <span className="caption">Chek your email to get token !
                    </span>
                  </div>
                  <div className="position-relative m-4">
                    <div className="progress" style={{height: '1px'}}>
                      <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <button type="button" className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-block bg-white rounded-pill" style={{width: '2rem', height: '2rem'}}>1</button>
                    <button type="button" className="position-absolute top-0 start-50 translate-middle btn btn-sm bg-white rounded-pill" style={{width: '2rem', height: '2rem'}}>2</button>
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
            <h4 className="fw-bold">One Step again to get your account</h4>
            <small> Chek your email ! </small>
          </div>
          <form onSubmit={(e)=>processVerify(e)}>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Token</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>setFormData({ ...formData, token: e.target.value })} required></textarea>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-purple btn-block btn-rounded btn-lg py-3">
                Join for free now
              </button>
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

export default VerifyRegister