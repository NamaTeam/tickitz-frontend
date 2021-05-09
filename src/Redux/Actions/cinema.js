import axios from 'axios'

const FetchCinemaRequest = () => { return { type: 'FETCH_CINEMA_REQUEST' } }
const FetchCinemaSuccess = (data) => { return { type: 'FETCH_CINEMA_SUCCESS', payload: data } }
const FetchCinemaError = (err) => { return { type: 'FETCH_CINEMA_ERROR', payload: err } }

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
const FetchCinemaByLocationRequest = () => { return { type: 'FETCH_CINEMA_BY_LOCATION_REQUEST' } }
const FetchCinemaByLocationSuccess = (data) => { return { type: 'FETCH_CINEMA_BY_LOCATION_SUCCESS', payload: data } }
const FetchCinemaByLocationError = (err) => { return { type: 'FETCH_CINEMA_BY_LOCATION_ERROR', payload: err } }

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

const AllCinemaRequest = () => { return { type: 'ALL_CINEMA_REQUEST' } }
const AllCinemaSuccess = (data) => { return { type: 'ALL_CINEMA_SUCCESS', payload: data } }
const AllCinemaError = (err) => { return { type: 'ALL_CINEMA_ERROR', payload: err } }

export const AllCinema = (data) => {
    return (dispatch) => {
        dispatch(AllCinemaRequest())
        return axios({
            url: `${process.env.REACT_APP_API_URL}/cinemas/all-cinema?city=${data.city}&limit=${data.limit}&page=${data.page}`,
            method: 'GET',
        }).then((res) => {
            dispatch(AllCinemaSuccess(res.data.data))
        }).catch((err) => {
            dispatch(AllCinemaError(err))
        })
    }
}

const AddCinemaRequest = () => {return {type : 'ADD_CINEMA_REQUEST'}}
const AddCinemaSuccess = (data) => {return {type: 'ADD_CINEMA_SUCCESS', payload : data}}
const AddCinemaFailed = (err) => {return {type: 'ADD_CINEMA_FAILED', payload : err}}

export const AddCinema = (formData) => {
    return (dispatch)=>{
        dispatch(AddCinemaRequest)
        return axios({
            url : `${process.env.REACT_APP_API_URL}/cinemas`,
            method : 'POST',
            data : formData
        }).then((res)=>{
            dispatch(AddCinemaSuccess(res))
        }).catch((err)=>{
            dispatch(AddCinemaFailed(err))
        })
    }
}