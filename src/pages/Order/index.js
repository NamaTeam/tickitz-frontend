import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Footer, Navbar } from "../../components/Partials";
import { getSchById } from "../../Redux/Actions/schedule";
import Seat from "./component/Seat";
import SeatMobile from "./component/SeatMobile";
import "./style.css";

const Order = () => {
	const { id } = useParams()
	const dispatch = useDispatch();
	const { data: sch } = useSelector(state => state.ScheduleById)

	useEffect(() => {
		dispatch(getSchById(id))
	}, [])

	console.log(sch, 'sch')

	return (
		<>
			<Navbar />
			{/* Movie Selected */}
			{sch && (
				<div className="d-none d-md-flex justify-content-between align-items-center py-2 px-5 movies-selected">
					<div className="pt-3">
						<p className="text-white fw-bold">{sch.title}</p>
					</div>
					<div className="py-3">
						<button className="btn bg-white btn-rounded px-4 py-1 btn-change-movie">Change movie</button>
					</div>
				</div>
			)}

			{/* Seat Choose */}
			{sch && <Seat schedule={sch} id={id} />}
			{sch && <SeatMobile schedule={sch} id={id} />}

			<Footer />
		</>
	);
};

export default Order;
