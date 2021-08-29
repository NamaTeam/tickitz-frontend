import axios from "axios";

const gopayChargeReq = () => {
  return {
    type: "GOPAY_CHARGE_REQ",
  };
};

const gopayChargeSuccess = (data) => {
  return {
    type: "GOPAY_CHARGE_SUCCESS",
    payload: data,
  };
};

const gopayChargeError = (err) => {
  return {
    type: "GOPAY_CHARGE_ERROR",
    payload: err,
  };
};

export const gopayCharge = (dataOrder, cb) => {
  return (dispatch) => {
    dispatch(gopayChargeReq());
    return axios({
      url: `${process.env.REACT_APP_API_URL}/payment/gopay`,
      method: "POST",
      data: dataOrder,
    })
      .then((res) => {
        cb.push("/payment_page", res.data);
        dispatch(gopayChargeSuccess(res.data));
      })
      .catch((err) => {
        dispatch(gopayChargeError(err));
      });
  };
};
