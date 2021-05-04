import React from 'react'

const Seat = () => {
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
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="text-center fw-bold row-name">1</div>
									</div>

									<div className="">
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="text-center fw-bold row-name">2</div>
									</div>

									<div className="">
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="text-center fw-bold row-name">3</div>
									</div>

									<div className="">
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="text-center fw-bold row-name">4</div>
									</div>

									<div className="">
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="text-center fw-bold row-name">5</div>
									</div>

									<div className="">
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="text-center fw-bold row-name">6</div>
									</div>

									<div className="">
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="text-center fw-bold row-name">7</div>
									</div>
								</div>

								<div className="d-flex ms-3 cinema-seats right">
									<div className="">
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="text-center fw-bold row-name">8</div>
									</div>

									<div className="">
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="text-center fw-bold row-name">9</div>
									</div>

									<div className="">
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="text-center fw-bold row-name">10</div>
									</div>

									<div className="">
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="text-center fw-bold row-name">11</div>
									</div>

									<div className="">
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="text-center fw-bold row-name">12</div>
									</div>

									<div className="">
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="text-center fw-bold row-name">13</div>
									</div>

									<div className="">
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="seat"></div>
										<div className="text-center fw-bold row-name">14</div>
									</div>
								</div>
							</div>
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
						<button className='btn btn-rounded px-5 py-2 btn-change-movie'>Change your movie</button>
						<button className='btn btn-rounded px-5 py-2 btn-checkout'>Checkout now</button>
					</div>
				</div>
				<div className="col-12 mt-3 mt-lg-0 col-lg-4">
					<h5>Order Info</h5>
					<div className="card border-0 mt-5 px-4 order-info">
						<img
							className="logo mx-auto mb-1"
							src={process.env.PUBLIC_URL + "/svg/cineone.svg"}
							alt=""
						></img>
						<h2 className="mx-auto mb-4">CineOne 21 Cinema</h2>
						<div className="d-flex justify-content-between">
							<p className="text-muted">Movie selected</p>
							<p className="fw-bold">Spider-Man: Homecoming</p>
						</div>
						<div className="d-flex justify-content-between">
							<p className="text-muted">Tuesday, 07 July 20201</p>
							<p className="fw-bold">02:00pm</p>
						</div>
						<div className="d-flex justify-content-between">
							<p className="text-muted">One ticket price</p>
							<p className="fw-bold">$10</p>
						</div>
						<div className="d-flex justify-content-between">
							<p className="text-muted">Seat choosed</p>
							<p className="fw-bold">C4, C5, C6</p>
						</div>
						<div className="d-flex justify-content-between pt-4 pb-3 mt-4 total-payment">
							<p className='fw-bold'>Total Payment</p>
							<p className='price'>$30</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Seat
