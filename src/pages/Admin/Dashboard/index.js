import moment from 'moment'
import React from 'react'
import { Footer, Navbar } from '../../../components'
import './style/style.css'

export const DashboardAdmin = () => {
	return (
		<>
			<Navbar />
			<main className='mt-5'>
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
											<h4 class="card-title">1,294</h4>
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
											<h4 class="card-title">1,294</h4>
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
											<h4 class="card-title">1,294</h4>
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
											<h4 class="card-title">1,294</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='mx-2 mx-md-4 mt-5 movie-info'>
					<div className='card shadow-sm card-movie'>
						<div className='card-header header-custom'>
							<div className='row justify-content-between mx-3'>
								<div className='col-12 col-md-4'>
									<h4 className='text-muted pt-2'>Movie List</h4>
								</div>
								<div className='col-12 col-md-8'>
									<div className='row g-0'>
										<div className='col-12 col-lg-6 d-flex justify-content-center'>
											<p className='mx-1 text-muted pt-2'>From</p>
											<input type='date' defaultValue={moment().subtract(30, 'days').format('YYYY-MM-DD')} />
										</div>
										<div className='col-12 col-lg-6 d-flex justify-content-center'>
											<p className='mx-1 text-muted pt-2'>To</p>
											<input type='date' defaultValue={moment().format('YYYY-MM-DD')} />
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
												<img width='100px' height='140px' src={process.env.PUBLIC_URL + '/logo/movie-a.png'} alt="..." />
											</div>
											<div class="col-12 col-lg-8">
												<div class="card-body ms-3">
													<h5 class="card-title">{'Spiderman'}</h5>
													<p class="card-text">{'This is a wider card with supporting text below as a natural lead-in to additional content.'}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='col-12 col-md-6 col-lg-4'>
									<div class="card mb-3 py-3 movie">
										<div class="row g-0 justify-content-center">
											<div class="col-12 col-lg-4 d-flex justify-content-center align-items-center ">
												<img width='100px' height='140px' src={process.env.PUBLIC_URL + '/logo/movie-a.png'} alt="..." />
											</div>
											<div class="col-12 col-lg-8">
												<div class="card-body ms-3">
													<h5 class="card-title">{'Spiderman'}</h5>
													<p class="card-text">{'This is a wider card with supporting text below as a natural lead-in to additional content.'}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='col-12 col-md-6 col-lg-4'>
									<div class="card mb-3 py-3 movie">
										<div class="row g-0 justify-content-center">
											<div class="col-12 col-lg-4 d-flex justify-content-center align-items-center ">
												<img width='100px' height='140px' src={process.env.PUBLIC_URL + '/logo/movie-a.png'} alt="..." />
											</div>
											<div class="col-12 col-lg-8">
												<div class="card-body ms-3">
													<h5 class="card-title">{'Spiderman'}</h5>
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

				<div className='mx-2 mx-md-4 mt-5 cinema-info'>
					<div className='card shadow-sm card-movie'>
						<div className='card-header header-custom'>
							<div className='row justify-content-between mx-3'>
								<div className='col-12 col-md-10'>
									<h4 className='text-muted pt-2'>Cinema List</h4>
								</div>
								<div className='col-12 col-md-2'>
									<div className='row g-0'>
										<div className='col-12 d-flex justify-content-center'>
											<p className='mx-1 text-muted pt-2'>Page</p>
											<select>
												<option value='1'>1</option>
												<option value='2'>2</option>
												<option value='3'>3</option>
												<option value='4'>4</option>
												<option value='5'>5</option>
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
								<div className='col-12 col-md-6 col-lg-4'>
									<div class="card mb-3 py-3 movie">
										<div class="row g-0 justify-content-center">
											<div class="col-12 col-lg-4 d-flex justify-content-center align-items-center ">
												<img width='100px' height='140px' src={process.env.PUBLIC_URL + '/svg/cineone.svg'} alt="..." />
											</div>
											<div class="col-12 col-lg-8">
												<div class="card-body ms-3">
													<h5 class="card-title">{'Cineone 21'}</h5>
													<p class="card-text">{'This is a wider card with supporting text below as a natural lead-in to additional content.'}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='col-12 col-md-6 col-lg-4'>
									<div class="card mb-3 py-3 movie">
										<div class="row g-0 justify-content-center">
											<div class="col-12 col-lg-4 d-flex justify-content-center align-items-center ">
												<img width='100px' height='140px' src={process.env.PUBLIC_URL + '/svg/hiflix.svg'} alt="..." />
											</div>
											<div class="col-12 col-lg-8">
												<div class="card-body ms-3">
													<h5 class="card-title">{'Hiflix'}</h5>
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
			</main>
			<Footer />
		</>
	)
}
