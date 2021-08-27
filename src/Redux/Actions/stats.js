import axios from "axios"

const getAllStatsReq = () => {
  return {
    type: 'ALL_STATS_REQ',
  }
}

const getAllStatsSuccess = (data) => {
  return {
    type: 'ALL_STATS_SUCCESS',
    payload: data
  }
}

const getAllStatsError = (err) => {
  return {
    type: 'ALL_STATS_ERROR',
    payload: err
  }
}

export const getAllStats = () => {
  return (dispatch) => {
    dispatch(getAllStatsReq())
    return axios({
      url: `${process.env.REACT_APP_API_URL}/stats/all`,
      method: 'GET'
    }).then(res => {
      dispatch(getAllStatsSuccess(res.data.data))
    }).catch(err => {
      dispatch(getAllStatsError(err.response))
    })
  }
}