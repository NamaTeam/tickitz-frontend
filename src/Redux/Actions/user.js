import axios from 'axios'

const FetchUserRequest = () => {return {type: 'FETCH_USER_REQUEST'}}
const FetchUserSuccess = (data) => {return {type: 'FETCH_USER_SUCCESS',payload: data}}
const FetchUserError = (err) => {return {type: 'FETCH_USER_ERROR',payload: err}}

export const FetchUser = (userData) => {
    return (dispatch) => {
        dispatch(FetchUserRequest())
        return axios({
            url: `${process.env.REACT_APP_API_URL}/users/${userData.id}`,
            method: 'GET'
        }).then((res) => {
            dispatch(FetchUserSuccess(res.data.data))
        }).catch((err) => {
            dispatch(FetchUserError(err))
        })
    }
}

const UpdateUserRequest = () => {return {type: 'UPDATE_USER_REQUEST'}}
const UpdateUserSuccess = (data) => {return {type: 'UPDATE_USER_SUCCESS',payload: data}}
const UpdateUserError = (err) => {return {type: 'UPDATE_USER_ERROR',payload: err}}

export const UpdateUser = (userData, myData) => {
    return (dispatch) => {
        dispatch(UpdateUserRequest())
        console.log(myData)
        return axios({
            method: 'PATCH',
            url: `${process.env.REACT_APP_API_URL}/users/${userData.id}`,
            data: myData
        }).then((res) => {
            dispatch(UpdateUserSuccess(res.data.data))
        }).catch((err) => {
            dispatch(UpdateUserError(err?.response?.data?.message ?? null))
        })
    }
}