import React from 'react'

const SeatMobile = () => {
  return (
    <>
      <div className='d-block d-md-none mx-3'>
        <h6 className='ms-3 mb-5'>Choose your seat</h6>
        <div className='card card-seats-mobile pt-2'>
          <div className='cinema-theatre-mobile pt-3 mb-5'>
            <div className='d-flex justify-content-between seat-spread-mobile'>
              <div className="d-flex me-3 cinema-seats-mobile left">
                <div className="">
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                </div>

                <div className="">
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                </div>

                <div className="">
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                </div>

                <div className="">
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                </div>

                <div className="">
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                </div>

                <div className="">
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                </div>

                <div className="">
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                </div>
              </div>

              <div className="d-flex ms-3 cinema-seats right">
                <div className="">
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                </div>

                <div className="">
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                </div>

                <div className="">
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                </div>

                <div className="">
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                </div>

                <div className="">
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                </div>

                <div className="">
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                </div>

                <div className="">
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                  <div className="seat-mobile"></div>
                </div>
              </div>
            </div>
            <div className='mt-3'>
              <h5 className='text-muted seating-key'>Seating key</h5>
              <div className='row mt-4 ms-1 ms-md-2 ms-xl-3 ms-xxl-5'>
                <div className='col-6 d-flex'>
                  <img className='pb-3' src={process.env.PUBLIC_URL + '/svg/forward-arrow.svg'} alt='row' />
                  <p className='status-mobile ms-3'>A - G</p>
                </div>
                <div className='col-6 d-flex'>
                  <img className='pb-3' src={process.env.PUBLIC_URL + '/svg/forward-arrow2.svg'} alt='row' />
                  <p className='status-mobile ms-3'>1 - 14</p>
                </div>
                <div className='col-6 d-flex'>
                  <div className='seat-status-mobile'></div>
                  <p className='status-mobile ms-3'>Available</p>
                </div>
                <div className='col-6 d-flex'>
                  <div className='seat-status-mobile selected'></div>
                  <p className='status-mobile ms-3'>Selected</p>
                </div>
                <div className='col-6 d-flex'>
                  <div className='seat-status-mobile love'></div>
                  <p className='status-mobile ms-3'>Love</p>
                </div>
                <div className='col-6 d-flex'>
                  <div className='seat-status-mobile sold'></div>
                  <p className='status-mobile ms-3'>Sold</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between px-3 pt-3 my-2 card-seat-choosen'>
          <p>Seats Choosen</p>
          <p>C1, C2, C3</p>
        </div>
        <div className='card-seat-choosen mx-2'>
          <div className='row py-2 d-flex justify-content-around'>
            <select class="form-select w-25">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
            <select class="form-select w-25">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6ee</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
            </select>
          </div>
        </div>
        <button className='col-12 mt-3 btn btn-rounded btn-change-movie'>Add Seat</button>
        <button className='col-12 mt-3 btn btn-rounded btn-checkout'>Checkout Now</button>
      </div>
    </>
  )
}

export default SeatMobile
