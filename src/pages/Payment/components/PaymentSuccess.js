import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateOrder } from "../../../Redux/Actions/order";

const PaymentSuccess = () => {
  const history = useHistory();
  const id = new URLSearchParams(history.location.search).get("order_id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateOrder({ id: id, status: "paid" }));
  }, []);

  return (
    <div
      className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100"
      style={{ height: "" }}
    >
      <h1 className="text-purple">Payment Success</h1>

      <div style={{ marginTop: "50px" }}>
        <img
          width="300px"
          height="300px"
          src={process.env.PUBLIC_URL + "/svg/ticket-check.svg"}
        />
        <i />
      </div>

      <div className="d-flex justify-content-center mt-5">
        <button
          style={{ width: "200px" }}
          className="btn btn-rounded px-5 py-2 mx-1 bg-white btn-change-movie"
          onClick={() => history.push(`/ticket-result/${id.split("-")[1]}`)}
        >
          Check Ticket
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
