import axios from "axios"

const getSchIdReq = () => {
  return {
    type: 'SCH_ID_REQ',
  }
}

const getSchIdSuccess = (data) => {
  return {
    type: 'SCH_ID_SUCCESS',
    payload: data,
  }
}

const getSchIdError = (err) => {
  return {
    type: 'SCH_ID_ERROR',
    payload: err,
  }
}

export const getSchById = (id) => {
  return (dispatch) => {
    dispatch(getSchIdReq())
    return axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/schedules/${id}`,
    }).then(res => {
      dispatch(getSchIdSuccess(res.data.data))
    }).catch(err => {
      dispatch(getSchIdError(err.response))
    })
  }
}