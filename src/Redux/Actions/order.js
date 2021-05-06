import axios from "axios";

const addOrderReq = () => {
  return {
    type: 'ADD_ORDER_REQ',
  }
};

const addOrderSuccess = () => {
  return {
    type: 'ADD_ORDER_SUCCESS',
  }
}

const addOrderError = (err) => {
  return {
    type: 'ADD_ORDER_ERROR',
    payload: err
  }
}

export const addOrder = (data, cb) => {
  return (dispatch) => {
    dispatch(addOrderReq());
    return axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}/orders/${data.user_id}`,
      data: data
    }).then(res => {
      dispatch(addOrderSuccess())
      cb.push(`/payment/${res.data.data.split('-')[1]}`)
    }).catch(err => {
      dispatch(addOrderError(err.response))
    })
  }
}

const getOrderByIdReq = () => {
  return {
    type: 'ORDER_BYID_REQ'
  }
}

const getOrderByIdSuccess = (data) => {
  return {
    type: 'ORDER_BYID_SUCCESS',
    payload: data
  }
}

const getOrderByIdError = (err) => {
  return {
    type: 'ORDER_BYID_ERROR',
    payload: err
  }
}

export const getOrderById = (id) => {
  return (dispatch) => {
    dispatch(getOrderByIdReq())
    return axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/orders/${id}`
    }).then(res => {
      dispatch(getOrderByIdSuccess(res.data.data))
    }).catch(err => {
      dispatch(getOrderByIdError(err.response))
    })
  }
}