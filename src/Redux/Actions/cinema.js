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

const AddCinemaRequest = () => { return { type: 'ADD_CINEMA_REQUEST' } }
const AddCinemaSuccess = (data) => { return { type: 'ADD_CINEMA_SUCCESS', payload: data } }
const AddCinemaFailed = (err) => { return { type: 'ADD_CINEMA_FAILED', payload: err } }

export const AddCinema = (formData) => {
    return (dispatch) => {
        dispatch(AddCinemaRequest)
        return axios({
            url: `${process.env.REACT_APP_API_URL}/cinemas`,
            method: 'POST',
            data: formData
        }).then((res) => {
            dispatch(AddCinemaSuccess(res))
        }).catch((err) => {
            dispatch(AddCinemaFailed(err))
        })
    }
}

const DeleteCinemaRequest = () => { return { type: 'DELETE_CINEMA_REQUEST' } }
const DeleteCinemaSuccess = () => { return { type: 'DELETE_CINEMA_SUCCESS' } }
const DeleteCinemaFailed = (err) => { return { type: 'DELETE_CINEMA_FAILED', payload: err } }

export const DeleteCinema = (id, cb) => {
    return (dispatch) => {
        dispatch(DeleteCinemaRequest())
        return axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API_URL}/cinemas/${id}`,
        }).then((res) => {
            dispatch(DeleteCinemaSuccess(res.data))
        }).catch((err) => {
            dispatch(DeleteCinemaFailed(err))
        })
    }
}

const FetchCinemaByIdRequest = () => { return { type: 'FETCH_CINEMAS_BY_ID_REQUEST' } }
const FetchCinemaByIdSuccess = (data) => { return { type: 'FETCH_CINEMAS_BY_ID_SUCCESS', payload: data } }
const FetchCinemaByIdError = (err) => { return { type: 'FETCH_CINEMAS_BY_ID_ERROR', payload: err } }

export const FetchCinemaById = (id) => {
    return (dispatch) => {
        dispatch(FetchCinemaByIdRequest())
        return axios({
            url: `${process.env.REACT_APP_API_URL}/cinemas/${id}`,
            method: 'GET'
        }).then((res) => {
            dispatch(FetchCinemaByIdSuccess(res.data.data))
        }).catch((err) => {
            dispatch(FetchCinemaByIdError(err))
        })
    }
}

const UpdateCinemaRequest = () => { return { type: 'UPDATE_CINEMA_REQUEST' } }
const UpdateCinemaSuccess = () => { return { type: 'UPDATE_CINEMA_SUCCESS' } }
const UpdateCinemaFailed = (err) => { return { type: 'UPDATE_CINEMA_FAILED', payload: err } }

export const UpdateCinema = (id, formData, cb) => {
    return (dispatch) => {
        dispatch(UpdateCinemaRequest())
        return axios({
            method: 'PATCH',
            url: `${process.env.REACT_APP_API_URL}/cinemas/${id}`,
            data: formData
        }).then((res) => {
            dispatch(UpdateCinemaSuccess(res.data))
        }).catch((err) => {
            dispatch(UpdateCinemaFailed(err))
        })
    }
}