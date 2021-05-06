import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSeat } from '../../../Redux/Actions/seat';

const SeatMobile = () => {
  const dispatch = useDispatch();
  const { data: seat } = useSelector(state => state.Seat)
  const [seatSelected, setSeatSelected] = useState([]);
  let sold = ['A1'];

  const addSelectedSeat = e => setSeatSelected([...seatSelected, e.target.id]);

  const reset = () => {
    seatSelected.map(e => {
      let seat = document.getElementById(e);
      seat.removeAttribute("disabled");
      seat.classList.remove("selected");
    })
    setSeatSelected([])
  }

  useEffect(() => {
    dispatch(getSeat(1))
  }, [])

  useEffect(() => {
    seatSelected.map(e => {
      let id = `${e}-mobile`
      let seat = document.getElementById(id);
      seat.classList.add("selected");
    })
  }, [seatSelected])

  useEffect(() => {
    seat.map(e => {
      e.seat.map(g => {
        sold.push(g)
      })
    })

    sold.map(e => {
      let id = `${e}-mobile`
      let seat = document.getElementById(id);
      seat.classList.add("sold");
    })

  }, [seat])
  return (
    <>
      <div className='d-block d-md-none mt-5 mx-3'>
        <h6 className='ms-3 mb-5'>Choose your seat</h6>
        <div className='card card-seats-mobile pt-2'>
          <div className='cinema-theatre-mobile pt-3 mb-5'>
            <div className='d-flex justify-content-between seat-spread-mobile'>
              <div className="d-flex me-3 cinema-seats-mobile left">
                <div className="">
                  <div id='A1-mobile' className="seat-mobile"></div>
                  <div id='B1-mobile' className="seat-mobile"></div>
                  <div id='C1-mobile' className="seat-mobile"></div>
                  <div id='D1-mobile' className="seat-mobile"></div>
                  <div id='E1-mobile' className="seat-mobile"></div>
                  <div id='F1-mobile' className="seat-mobile"></div>
                  <div id='G1-mobile' className="seat-mobile"></div>
                </div>

                <div className="">
                  <div id='A2-mobile' className="seat-mobile"></div>
                  <div id='B2-mobile' className="seat-mobile"></div>
                  <div id='C2-mobile' className="seat-mobile"></div>
                  <div id='D2-mobile' className="seat-mobile"></div>
                  <div id='E2-mobile' className="seat-mobile"></div>
                  <div id='F2-mobile' className="seat-mobile"></div>
                  <div id='G2-mobile' className="seat-mobile"></div>
                </div>

                <div className="">
                  <div id='A3-mobile' className="seat-mobile"></div>
                  <div id='B3-mobile' className="seat-mobile"></div>
                  <div id='C3-mobile' className="seat-mobile"></div>
                  <div id='D3-mobile' className="seat-mobile"></div>
                  <div id='E3-mobile' className="seat-mobile"></div>
                  <div id='F3-mobile' className="seat-mobile"></div>
                  <div id='G3-mobile' className="seat-mobile"></div>
                </div>

                <div className="">
                  <div id='A4-mobile' className="seat-mobile"></div>
                  <div id='B4-mobile' className="seat-mobile"></div>
                  <div id='C4-mobile' className="seat-mobile"></div>
                  <div id='D4-mobile' className="seat-mobile"></div>
                  <div id='E4-mobile' className="seat-mobile"></div>
                  <div id='F4-mobile' className="seat-mobile"></div>
                  <div id='G4-mobile' className="seat-mobile"></div>
                </div>

                <div className="">
                  <div id='A5-mobile' className="seat-mobile"></div>
                  <div id='B5-mobile' className="seat-mobile"></div>
                  <div id='C5-mobile' className="seat-mobile"></div>
                  <div id='D5-mobile' className="seat-mobile"></div>
                  <div id='E5-mobile' className="seat-mobile"></div>
                  <div id='F5-mobile' className="seat-mobile"></div>
                  <div id='G5-mobile' className="seat-mobile"></div>
                </div>

                <div className="">
                  <div id='A6-mobile' className="seat-mobile"></div>
                  <div id='B6-mobile' className="seat-mobile"></div>
                  <div id='C6-mobile' className="seat-mobile"></div>
                  <div id='D6-mobile' className="seat-mobile"></div>
                  <div id='E6-mobile' className="seat-mobile"></div>
                  <div id='F6-mobile' className="seat-mobile"></div>
                  <div id='G6-mobile' className="seat-mobile"></div>
                </div>

                <div className="">
                  <div id='A7-mobile' className="seat-mobile"></div>
                  <div id='B7-mobile' className="seat-mobile"></div>
                  <div id='C7-mobile' className="seat-mobile"></div>
                  <div id='D7-mobile' className="seat-mobile"></div>
                  <div id='E7-mobile' className="seat-mobile"></div>
                  <div id='F7-mobile' className="seat-mobile"></div>
                  <div id='G7-mobile' className="seat-mobile"></div>
                </div>
              </div>

              <div className="d-flex ms-3 cinema-seats right">
                <div className="">
                  <div id='A8-mobile' className="seat-mobile"></div>
                  <div id='B8-mobile' className="seat-mobile"></div>
                  <div id='C8-mobile' className="seat-mobile"></div>
                  <div id='D8-mobile' className="seat-mobile"></div>
                  <div id='E8-mobile' className="seat-mobile"></div>
                  <div id='F8-mobile' className="seat-mobile"></div>
                  <div id='G8-mobile' className="seat-mobile"></div>
                </div>

                <div className="">
                  <div id='A9-mobile' className="seat-mobile"></div>
                  <div id='B9-mobile' className="seat-mobile"></div>
                  <div id='C9-mobile' className="seat-mobile"></div>
                  <div id='D9-mobile' className="seat-mobile"></div>
                  <div id='E9-mobile' className="seat-mobile"></div>
                  <div id='F9-mobile' className="seat-mobile"></div>
                  <div id='G9-mobile' className="seat-mobile"></div>
                </div>

                <div className="">
                  <div id='A10-mobile' className="seat-mobile"></div>
                  <div id='B10-mobile' className="seat-mobile"></div>
                  <div id='C10-mobile' className="seat-mobile"></div>
                  <div id='D10-mobile' className="seat-mobile"></div>
                  <div id='E10-mobile' className="seat-mobile"></div>
                  <div id='F10-mobile' className="seat-mobile"></div>
                  <div id='G10-mobile' className="seat-mobile"></div>
                </div>

                <div className="">
                  <div id='A11-mobile' className="seat-mobile"></div>
                  <div id='B11-mobile' className="seat-mobile"></div>
                  <div id='C11-mobile' className="seat-mobile"></div>
                  <div id='D11-mobile' className="seat-mobile"></div>
                  <div id='E11-mobile' className="seat-mobile"></div>
                  <div id='F11-mobile' className="seat-mobile"></div>
                  <div id='G11-mobile' className="seat-mobile"></div>
                </div>

                <div className="">
                  <div id='A12-mobile' className="seat-mobile"></div>
                  <div id='B12-mobile' className="seat-mobile"></div>
                  <div id='C12-mobile' className="seat-mobile"></div>
                  <div id='D12-mobile' className="seat-mobile"></div>
                  <div id='E12-mobile' className="seat-mobile"></div>
                  <div id='F12-mobile' className="seat-mobile"></div>
                  <div id='G12-mobile' className="seat-mobile"></div>
                </div>

                <div className="">
                  <div id='A13-mobile' className="seat-mobile"></div>
                  <div id='B13-mobile' className="seat-mobile"></div>
                  <div id='C13-mobile' className="seat-mobile"></div>
                  <div id='D13-mobile' className="seat-mobile"></div>
                  <div id='E13-mobile' className="seat-mobile"></div>
                  <div id='F13-mobile' className="seat-mobile"></div>
                  <div id='G13-mobile' className="seat-mobile"></div>
                </div>

                <div className="">
                  <div id='A14-mobile' className="seat-mobile"></div>
                  <div id='B14-mobile' className="seat-mobile"></div>
                  <div id='C14-mobile' className="seat-mobile"></div>
                  <div id='D14-mobile' className="seat-mobile"></div>
                  <div id='E14-mobile' className="seat-mobile"></div>
                  <div id='F14-mobile' className="seat-mobile"></div>
                  <div id='G14-mobile' className="seat-mobile"></div>
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
              <option value="6">6</option>
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
        <button className='col-12 mt-3 btn btn-rounded bg-white btn-change-movie'>Add Seat</button>
        <button className='col-12 mt-3 btn btn-rounded btn-checkout'>Checkout Now</button>
      </div>
    </>
  )
}

export default SeatMobile
