import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateOrder } from "../../../Redux/Actions/order";

const PaymentPages = ({ ...props }) => {
  // const { data: payment } = useSelector((state) => state.Payment);
  const dispatch = useDispatch();
  const history = useHistory();
  const payment = history.location.state;

  const cancelPayment = () => {
    axios({
      url: payment?.actions[3]?.url,
      method: "POST",
    }).then((res) => {
      console.log(res);
      dispatch(updateOrder({ id: payment?.order_id }));
    });
  };

  console.log(payment, "PAY");
  return (
    <>
      {payment && (
        <div
          className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100"
          style={{ height: "" }}
        >
          <h1 className="text-purple">Continue Payment</h1>

          <div style={{}}>
            <img width="300px" height="300px" src={payment?.actions[0].url} />
          </div>

          <div className="d-flex justify-content-center mt-5">
            <button
              style={{ width: "200px" }}
              className="btn btn-rounded px-5 py-2 mx-1 bg-white btn-change-movie"
            >
              Pay Later
            </button>
            <button
              style={{ width: "200px" }}
              className="btn btn-rounded px-5 py-2 mx-1 btn-checkout"
              onClick={() => {
                window.location.assign(payment?.actions[1].url);
              }}
            >
              Redirect
            </button>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <button
              style={{ width: "300px" }}
              className="btn btn-rounded px-5 py-2 mx-1 bg-white border-danger text-danger"
              onClick={() => cancelPayment()}
            >
              Cancel Payment
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentPages;
