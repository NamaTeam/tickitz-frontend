import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AllCinema } from '../../../../Redux/Actions/cinema';

const CinemaList = () => {
  const dispatch = useDispatch();
  const { data: cinema } = useSelector(state => state.AllCinema)
  const [pages, setPages] = useState([])
  const [data, setData] = useState({
    limit: 2,
    page: 1,
    city: 'purwokerto'
  })

  useEffect(() => {
    dispatch(AllCinema(data))
  }, [data])

  // useEffect(() => {
  //   if (cinema) {
  //     for (let i = 1; i <= parseInt(cinema.total_pages); i++) {
  //       setPages([...pages, i])
  //     }
  //   }
  // }, [cinema])

  console.log(pages)

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
                  <div className='col-12 col-md-6 d-flex justify-content-center'>
                    <p className='mx-1 text-muted pt-2'>Location</p>
                    <input type='text' placeholder='Input a location' />
                  </div>
                  <div className='col-12 col-md-6 d-flex justify-content-center'>
                    <p className='mx-1 text-muted pt-2'>Page</p>
                    <select>
                      {pages !== [] && pages?.map(e => {
                        return (
                          <option value={e} >{e}</option>
                        )
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card-body'>
            <div className='row'>
              <div className='col-12 col-md-6 col-lg-4'>
                <div class="card mb-3 py-3 movie">
                  <div class="row g-0 justify-content-center">
                    <div class="col-12 col-lg-4 d-flex justify-content-center align-items-center ">
                      <img width='100px' height='140px' src={process.env.PUBLIC_URL + '/svg/ebu.svg'} alt="..." />
                    </div>
                    <div class="col-12 col-lg-8">
                      <div class="card-body ms-3">
                        <h5 class="card-title">{'Ebu .id'}</h5>
                        <p class="card-text">{'This is a wider card with supporting text below as a natural lead-in to additional content.'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CinemaList
