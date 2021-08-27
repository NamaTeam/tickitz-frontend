import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { AllCinema, DeleteCinema } from '../../../../Redux/Actions/cinema';

const CinemaList = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [update, setUpdate] = useState(false)
  const { data: cinema } = useSelector(state => state.AllCinema)
  const [pages, setPages] = useState([])
  const [data, setData] = useState({
    limit: 6,
    page: 1,
    city: 'purwokerto'
  })

  useEffect(() => {
    dispatch(AllCinema(data))
  }, [data,update])

  useEffect(() => {
    let total = []
    if (cinema.total_pages > 0) {
      for (let x = 0; x < cinema.total_pages; x++) {
        total.push(x + 1)
      }
    }
    setPages([...total])
  }, [cinema,update])


  return (
    <>
      <div className='mx-2 mx-md-4 mt-5 cinema-info'>
        <div className='card shadow-sm card-movie'>
          <div className='card-header header-custom'>
            <div className='row justify-content-between mx-3'>
              <div className='col-12 col-md-6'>
                <h4 className='text-muted pt-2'>Cinema List</h4>
              </div>
              <div className='col-12 col-md-6'>
                <div className='row'>
                  <div className='col-12 col-md-4 d-flex justify-content-center'>
                    <p className='mx-1 text-muted pt-2'>Location</p>
                    <input type='text' placeholder='purwokerto' onChange={e => setData({ ...data, city: e.target.value })} />
                  </div>
                  <div className='col-12 col-md-4 d-flex justify-content-center'>
                    <p className='mx-1 text-muted pt-2'>Page</p>
                    <select onChange={e => setData({ ...data, page: e.target.value })}>
                      {pages !== [] && pages?.map(e => {
                        return (
                          <option value={e} >{e}</option>
                        )
                      })}
                    </select>
                  </div>
                  <div className='col-12 col-md-4 d-flex justify-content-center'>
                    <Link to='/add-cinema'>
                      <button className='btn btn-outline-purple'> ADD </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card-body'>
            <div className='row'>
              {cinema && cinema?.cinemas?.map(e => {
                return (
                  <div className='col-12 col-md-6 col-lg-4'>
                    <div class="card mb-3 py-3 movie" style={{ minHeight: '150px' }} data-bs-toggle="collapse" data-bs-target={`#cinema${e.id}`} aria-expanded="true" aria-controls={`cinema${e.id}`}>
                      <div class="row g-0 justify-content-center">
                        <div class="col-12 col-lg-4 d-flex justify-content-center align-items-center ">
                          <img width='80px' height='40px' src={`${process.env.REACT_APP_API_IMG_URL}${e.logo}`} alt="..." />
                        </div>
                        <div class="col-12 col-lg-8">
                          <div class="card-body ms-3">
                            <h5 class="card-title">{e.name}</h5>
                            <p class="card-text">{`${e.street} No. ${e.street_number}, ${e.city}`}</p>
                          </div>
                        </div>
                      </div>
                      <div id={`cinema${e.id}`} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className='row pt-2 g-0 justify-content-center border border-top border-bottom-0'>
                          <div className='col-6 text-center text-success fw-bold border-end' onClick={() => history.push(`/edit-cinema/${e.id}`)}>
                            Edit
                            </div>
                          <div className='col-6 text-center text-danger fw-bold' onClick={() => { if (window.confirm('Are you sure? ')) dispatch(DeleteCinema(e.id,setUpdate)) }}>
                            Delete
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CinemaList
