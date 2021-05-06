import axios from 'axios'

const FetchCinemaRequest = () => {return {type: 'FETCH_CINEMA_REQUEST'}}
const FetchCinemaSuccess = (data) => {return {type: 'FETCH_CINEMA_SUCCESS',payload: data}}
const FetchCinemaError = (err) => {return {type: 'FETCH_CINEMA_ERROR',payload: err}}

export const FetchCinema = () => {
    return (dispatch) => {
        dispatch(FetchCinemaRequest())
        return axios({
            url: `${process.env.REACT_APP_API_URL}/cinemas/all`,
            method: 'GET'
        }).then((res) => {
            dispatch(FetchCinemaSuccess(res.data.data))
        }).catch((err) => {
            dispatch(FetchCinemaError(err))
        })
    }
}
const FetchCinemaByLocationRequest = () => {return {type: 'FETCH_CINEMA_BY_LOCATION_REQUEST'}}
const FetchCinemaByLocationSuccess = (data) => {return {type: 'FETCH_CINEMA_BY_LOCATION_SUCCESS',payload: data}}
const FetchCinemaByLocationError = (err) => {return {type: 'FETCH_CINEMA_BY_LOCATION_ERROR',payload: err}}

export const FetchCinemaByLocation = (myData, id) => {
    return (dispatch) => {
        dispatch(FetchCinemaByLocationRequest())
        return axios({
            url: `${process.env.REACT_APP_API_URL}/cinemas/list/${id}`,
            method: 'POST',
            data: myData
        }).then((res) => {
            dispatch(FetchCinemaByLocationSuccess(res.data.data.schedule))
        }).catch((err) => {
            dispatch(FetchCinemaByLocationError(err))
        })
    }
}