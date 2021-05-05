import React from "react";
import { Footer, Navbar } from "../../components/Partials";
import Seat from "./component/Seat";
import SeatMobile from "./component/SeatMobile";
import "./style.css";

const Order = ({ mobile }) => {
	return (
		<>
			<Navbar />
			{/* Movie Selected */}
			<div className="d-none d-md-flex justify-content-between align-items-center py-2 px-5 movies-selected">
				<div className="pt-3">
					<p className="text-white fw-bold">Spider-Man: Homecoming</p>
				</div>
				<div className="py-3">
					<button className="btn bg-white btn-rounded px-4 py-1 btn-change-movie">Change movie</button>
				</div>
			</div>

			{/* Seat Choose */}
			<Seat />
			<SeatMobile />


			<Footer />
		</>
	);
};

export default Order;
