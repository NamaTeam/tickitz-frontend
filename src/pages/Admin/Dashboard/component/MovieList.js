import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AllMovies,DeleteMovie } from '../../../../Redux/Actions/movie'
import {Link, useHistory} from 'react-router-dom'
const MovieList = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [update, setUpdate] = useState(false)
  const { data: movies } = useSelector(s => s.AllMovies)
  const [data, setData] = useState({
    from: `${moment().subtract(30, 'days').format('YYYY-MM-DD')}`,
    to: `${moment().format('YYYY-MM-DD')}`
  })

  useEffect(() => {
    dispatch(AllMovies(data))
  }, [data])

  const editmovie=(e)=>{
    history.push(`/edit-movie/${e}`);
  }

  return (
    <>
      <div className='mx-2 mx-md-4 mt-5 movie-info'>
        <div className='card shadow-sm card-movie'>
          <div className='card-header header-custom'>
            <div className='row justify-content-between mx-3'>
              <div className='col-12 col-md-4'>
                <h4 className='text-muted pt-2'>Movie List</h4>
              </div>
              <div className='col-12 col-md-8'>
                <div className='row g-0'>
                  <div className='col-12 col-lg-5 d-flex justify-content-center'>
                    <p className='mx-1 text-muted pt-2'>From</p>
                    <input type='date' defaultValue={moment().subtract(30, 'days').format('YYYY-MM-DD')} onChange={(e) => {
                      setData({
                        ...data, from: `${e.target.value}`
                      })
                    }} />
                  </div>
                  <div className='col-12 col-lg-5 d-flex justify-content-center'>
                    <p className='mx-1 text-muted pt-2'>To</p>
                    <input type='date' defaultValue={moment().format('YYYY-MM-DD')} onChange={(e) => {
                      setData({
                        ...data, to: `${e.target.value}`
                      })
                    }} />
                  </div>
                  <div className='col-12 col-lg-2 d-flex justify-content-center'>
                    <Link to='/add-movie' className='no-style'>
                      <button className='btn btn-outline-purple d-block'>Tambah</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card-body'>
            <div className='row justify-content-center'>
              {movies.length < 1 && (
                <div className='col-12 mt-3 text-center text-danger'>Movie Not Found!</div>
              )}
              {movies &&
                movies.map(e => {
                  return (
                    <div className='col-12 col-md-6 col-lg-4'>
                      <div class="card mb-3 py-3 movie" data-bs-toggle="collapse" data-bs-target={`#movie${e.id}`} aria-expanded="true" aria-controls={`movie${e.id}`}>
                        <div class="row g-0 justify-content-center mb-3 border-end  ">
                          <div class="col-12 col-lg-4 d-flex justify-content-center align-items-center ">
                            <img width='100px' height='140px' src={`${process.env.REACT_APP_API_IMG_URL}${e.poster}`} alt="..." />
                          </div>
                          <div class="col-12 col-lg-8">
                            <div class="card-body ms-3">
                              <h5 class="card-title">{e.title}</h5>
                              <small className='text-muted'>{e.category}</small>
                              <p class="card-text">{e.synopsis.substr(0, 100) + '...'}</p>
                              <small className='text-muted float-end'>Release: {moment(`${e.release_date}`, "YYYYMMDD").format(`YYYY-MM-DD`)}</small>
                            </div>
                          </div>
                        </div>
                        <div id={`movie${e.id}`} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className='row pt-2 g-0 justify-content-center border border-top border-bottom-0'>
                            <div className='col-6 text-center text-success fw-bold border-end' onClick={()=>editmovie(e.id)}>
                              Edit
                            </div>
                            <div className='col-6 text-center text-danger fw-bold' onClick={() => { if (window.confirm('Are you sure? '))dispatch(DeleteMovie(e.id)); history.replace('/') }}>
                              Delete
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieList
