import axios from "axios";

const getSeatRequest = () => {
  return {
    type: 'GET_SEAT_REQUEST',
  }
};

const getSeatSuccess = (data) => {
  return {
    type: 'GET_SEAT_SUCCESS',
    payload: data,
  }
};

const getSeatFailed = (err) => {
  return {
    type: 'GET_SEAT_FAILED',
    payload: err,
  }
};

export const getSeat = (id) => {
  return (dispatch) => {
    dispatch(getSeatRequest());
    return axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/orders/schedule/${id}`,
    }).then(res => {
      dispatch(getSeatSuccess(res.data.data));
    }).catch(err => {
      dispatch(getSeatFailed(err.response))
    })
  }
}