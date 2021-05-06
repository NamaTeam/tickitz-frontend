import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getSeat } from '../../../Redux/Actions/seat';
import { addOrder } from '../../../Redux/Actions/order';

const Seat = ({ schedule }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { data: seat } = useSelector(state => state.Seat)
	const { data: auth } = useSelector(state => state.UserLogin)
	// const [seatSelected, setSeatSelected] = useState([]);
	const [dataOrder, setDataOrder] = useState({
		id: `TICKITZ-${new Date().getTime()}${Math.floor(Math.random() * 100)}`,
		user_id: auth.data.id,
		schedule_id: schedule.id,
		total: '',
		seat: [],
		status: 'checkout',
	})
	let sold = []

	const addOrderhandler = () => {
		if (dataOrder.seat.length !== 0) {
			dispatch(addOrder(dataOrder, history))
		} else {
			alert('Please choose seats')
		}
	}

	const addSelectedSeat = e => {
		// setSeatSelected([...seatSelected, e.target.id])
		setDataOrder({ ...dataOrder, schedule_id: schedule.id, seat: [...dataOrder.seat, e.target.id] })
	};

	const reset = () => {
		dataOrder.seat.map(e => {
			let seat = document.getElementById(e);
			seat.removeAttribute("disabled");
			seat.classList.remove("selected");
		})
		setDataOrder({ ...dataOrder, seat: [], total: 0 })
	}

	useEffect(() => {
		dispatch(getSeat(6))
	}, [])

	useEffect(() => {
		dataOrder.seat.map(e => {
			let seat = document.getElementById(e);
			seat.setAttribute("disabled", true);
			seat.classList.add("selected");
		})
		setDataOrder({ ...dataOrder, total: `${dataOrder.seat.length * schedule.price}` })
	}, [dataOrder.seat])

	useEffect(() => {
		seat.map(e => {
			e.seat.map(g => {
				sold.push(g)
			})
		})
		sold.map(e => {
			let seat = document.getElementById(e);
			seat.setAttribute("disabled", true);
			seat.classList.add("sold");
		})
	}, [seat])

	return (
		<>
			<div className="d-none d-md-flex row justify-content-between gx-5 mx-3 px-5 mt-5">
				<div className="col-12 col-lg-8">
					<h5>Choose Your Seat</h5>
					<div className='card mt-3 card-seats'>
						<div className='cinema-theatre mb-5'>
							<div className='d-flex justify-content-between seat-spread'>
								<div className="d-flex">
									<div className="">
										<p className='text-center fw-bold row-name'>A</p>
										<p className='text-center fw-bold row-name'>B</p>
										<p className='text-center fw-bold row-name'>C</p>
										<p className='text-center fw-bold row-name'>D</p>
										<p className='text-center fw-bold row-name'>E</p>
										<p className='text-center fw-bold row-name'>F</p>
										<p className='text-center fw-bold row-name'>G</p>
									</div>
								</div>
								<div className="d-flex me-3 cinema-seats left">
									<div className="">
										<option id='A1' className="seat" onClick={e => addSelectedSeat(e)} ></option>
										<option id='B1' className="seat" onClick={e => addSelectedSeat(e)} ></option>
										<option id='C1' className="seat" onClick={e => addSelectedSeat(e)} ></option>
										<option id='D1' className="seat" onClick={e => addSelectedSeat(e)} ></option>
										<option id='E1' className="seat" onClick={e => addSelectedSeat(e)} ></option>
										<option id='F1' className="seat" onClick={e => addSelectedSeat(e)} ></option>
										<option id='G1' className="seat" onClick={e => addSelectedSeat(e)} ></option>
										<div className="text-center fw-bold row-name">1</div>
									</div>

									<div className="">
										<option id='A2' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='B2' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='C2' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='D2' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='E2' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='F2' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='G2' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<div className="text-center fw-bold row-name">2</div>
									</div>

									<div className="">
										<option id='A3' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='B3' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='C3' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='D3' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='E3' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='F3' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='G3' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<div className="text-center fw-bold row-name">3</div>
									</div>

									<div className="">
										<option id='A4' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='B4' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='C4' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='D4' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='E4' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='F4' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='G4' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<div className="text-center fw-bold row-name">4</div>
									</div>

									<div className="">
										<option id='A5' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='B5' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='C5' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='D5' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='E5' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='F5' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='G5' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<div className="text-center fw-bold row-name">5</div>
									</div>

									<div className="">
										<option id='A6' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='B6' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='C6' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='D6' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='E6' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='F6' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='G6' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<div className="text-center fw-bold row-name">6</div>
									</div>

									<div className="">
										<option id='A7' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='B7' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='C7' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='D7' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='E7' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='F7' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='G7' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<div className="text-center fw-bold row-name">7</div>
									</div>
								</div>

								<div className="d-flex ms-3 cinema-seats right">
									<div className="">
										<option id='A8' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='B8' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='C8' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='D8' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='E8' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='F8' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='G8' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<div className="text-center fw-bold row-name">8</div>
									</div>

									<div className="">
										<option id='A9' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='B9' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='C9' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='D9' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='E9' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='F9' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='G9' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<div className="text-center fw-bold row-name">9</div>
									</div>

									<div className="">
										<option id='A10' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='B10' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='C10' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='D10' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='E10' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='F10' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='G10' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<div className="text-center fw-bold row-name">10</div>
									</div>

									<div className="">
										<option id='A11' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='B11' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='C11' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='D11' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='E11' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='F11' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='G11' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<div className="text-center fw-bold row-name">11</div>
									</div>

									<div className="">
										<option id='A12' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='B12' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='C12' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='D12' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='E12' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='F12' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='G12' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<div className="text-center fw-bold row-name">12</div>
									</div>

									<div className="">
										<option id='A13' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='B13' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='C13' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='D13' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='E13' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='F13' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='G13' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<div className="text-center fw-bold row-name">13</div>
									</div>

									<div className="">
										<option id='A14' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='B14' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='C14' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='D14' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='E14' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='F14' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<option id='G14' className="seat" onClick={e => addSelectedSeat(e)}></option>
										<div className="text-center fw-bold row-name">14</div>
									</div>
								</div>
							</div>
							<p className='text-danger my-3 fw-bold ms-5 reset-seat' onClick={() => reset()}>Reset Selected</p>
							<div className='mt-3'>
								<h5 className='text-muted seating-key'>Seating key</h5>
								<div className='d-flex justify-content-start mt-4 ms-1 ms-md-2 ms-xl-3 ms-xxl-5'>
									<div className='d-flex ms-1 ms-md-2 ms-xl-3 ms-xxl-5'>
										<div className='seat-status'></div>
										<p className='ms-3'>Available</p>
									</div>
									<div className='d-flex ms-1 ms-md-2 ms-xl-3 ms-xxl-5'>
										<div className='seat-status selected'></div>
										<p className='ms-3'>Selected</p>
									</div>
									<div className='d-flex ms-1 ms-md-2 ms-xl-3 ms-xxl-5'>
										<div className='seat-status love'></div>
										<p className='ms-3'>Love</p>
									</div>
									<div className='d-flex ms-1 ms-md-2 ms-xl-3 ms-xxl-5'>
										<div className='seat-status sold'></div>
										<p className='ms-3'>Sold</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='d-flex justify-content-between mt-5 mx-4'>
						<button className='btn btn-rounded px-5 py-2 bg-white btn-change-movie'>Change your movie</button>
						<button className='btn btn-rounded px-5 py-2 btn-checkout' onClick={() => addOrderhandler()}>Checkout now</button>
					</div>
				</div>
				<div className="col-12 mt-3 mt-lg-0 col-lg-4">
					<h5>Order Info</h5>
					<div className="card border-0 mt-5 px-4 order-info">
						<img
							className="logo mx-auto mb-1"
							src={process.env.REACT_APP_IMG_URL + `${schedule.logo}`}
							alt=""
						></img>
						<h2 className="mx-auto mb-4">{schedule.name}</h2>
						<div className="d-flex justify-content-between">
							<p className="text-muted">Movie selected</p>
							<p className="fw-bold">{schedule.title}</p>
						</div>
						<div className="d-flex justify-content-between">
							<p className="text-muted">{schedule.start_date}</p>
							<p className="fw-bold">{schedule.start_time}</p>
						</div>
						<div className="d-flex justify-content-between">
							<p className="text-muted">One ticket price</p>
							<p className="fw-bold">Rp. {schedule.price}</p>
						</div>
						<div className="d-flex justify-content-between">
							<p className="text-muted">Seat choosed</p>
							<p className="fw-bold">{`${dataOrder.seat}` || 'Not Selected'}</p>
						</div>
						<div className="d-flex justify-content-between pt-4 pb-3 mt-4 total-payment">
							<p className='fw-bold'>Total Payment</p>
							<p className='price'>{`Rp. ${schedule.price * dataOrder.seat.length}`}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Seat
