import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllStats } from '../../../../Redux/Actions/stats'

const Stats = () => {
  const dispatch = useDispatch()
  const { data: stats } = useSelector(state => state.allStats)

  useEffect(() => {
    dispatch(getAllStats())
  }, [])
  return (
    <>
      {stats && (

        <div className='row justify-content-center mx-2 mx-md-4 stats'>
          <div class="col-md-3 mb-3">
            <div class="card card-stats card-warning">
              <div class="card-body ">
                <div class="row">
                  <div class="col-5">
                    <div class="icon-big text-center">
                      <img width='60px' src={process.env.PUBLIC_URL + '/svg/user.svg'} alt='user'></img>
                    </div>
                  </div>
                  <div class="col-7 d-flex align-items-center">
                    <div class="numbers">
                      <p class="card-category">Users</p>
                      <h4 class="card-title">{stats.users}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="card card-stats card-blue">
              <div class="card-body ">
                <div class="row">
                  <div class="col-5">
                    <div class="icon-big text-center">
                      <img width='60px' src={process.env.PUBLIC_URL + '/svg/video-solid.svg'} alt='movie'></img>
                    </div>
                  </div>
                  <div class="col-7 d-flex align-items-center">
                    <div class="numbers">
                      <p class="card-category">Movies</p>
                      <h4 class="card-title">{stats.movies}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="card card-stats card-danger">
              <div class="card-body ">
                <div class="row">
                  <div class="col-5">
                    <div class="icon-big text-center">
                      <img width='60px' src={process.env.PUBLIC_URL + '/svg/warehouse-solid.svg'} alt='cinema'></img>
                    </div>
                  </div>
                  <div class="col-7 d-flex align-items-center">
                    <div class="numbers">
                      <p class="card-category">Cinemas</p>
                      <h4 class="card-title">{stats.cinemas}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="card card-stats card-green">
              <div class="card-body ">
                <div class="row">
                  <div class="col-5">
                    <div class="icon-big text-center">
                      <img width='60px' src={process.env.PUBLIC_URL + '/svg/check-circle.svg'} alt='order'></img>
                    </div>
                  </div>
                  <div class="col-7 d-flex align-items-center">
                    <div class="numbers">
                      <p class="card-category">Orders</p>
                      <h4 class="card-title">{stats.orders}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Stats
