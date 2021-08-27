import React from 'react'
import { Footer, Navbar } from '../../../components'
import CinemaList from './component/CinemaList'
import MovieList from './component/MovieList'
import Stats from './component/Stats'
import './style/style.css'

export const DashboardAdmin = () => {
	return (
		<>
			<Navbar />
			<main className='mt-5'>
				<Stats />
				<MovieList />
				<CinemaList />
			</main>
			<Footer />
		</>
	)
}
