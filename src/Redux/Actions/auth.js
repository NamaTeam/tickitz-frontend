import axios from 'axios'
import { Redirect } from 'react-router'

const UserLoginRequest = () => {return {type : 'USER_LOGIN_REQUEST'}}
const UserLoginSuccess = (data) => {return {type : 'USER_LOGIN_SUCCESS', payload : data}}
const UserLoginError = (err) => {return {type : 'USER_LOGIN_ERROR',payload : err}}
export const UserLogout = () =>{return{type : 'USER_LOGOUT'}}

export const UserLogin = (formData, cb)=>{
    return (dispatch)=>{
        cb(true)
        dispatch(UserLoginRequest())
        return axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/auth/login`,
            data: formData
        }).then((res)=>{
            console.log(res.data.data.role)
            dispatch(UserLoginSuccess(res.data))
            cb(false)
        }).catch((err)=>{
            alert(err.response.data.message)
            dispatch(UserLoginError(err))
            cb(false)
        })
    }
}

const UserRegisterRequest = () => {return {type : 'USER_REGISTER_REQUEST'}}
const UserRegisterSuccess = (data) => {return {type : 'USER_REGISTER_SUCCESS', payload : data}}
const UserRegisterFailed  = (err) => {return {type : 'USER_REGISTER_FAILED', payload : err}}

export const UserRegister = (formData, cb, cb2)=>{
    return (dispatch)=>{
        cb(true)
        dispatch(UserRegisterRequest())
        return axios({
            method : 'POST',
            url : `${process.env.REACT_APP_API_URL}/auth/register`,
            data : formData
        }).then((res)=>{
            dispatch(UserRegisterSuccess(res.data))
            cb(false)
            cb2.push('/register/verify')
        }).catch((err)=>{
            alert(err)
            dispatch(UserRegisterFailed(err))
            cb(false)
        })
    }
}

const UserVerifyRequest = () =>{return {type: 'USER_VERIFY_REQUEST'}}
const UserVerifySuccess = (data) => {return {type : 'USER_VERIFY_SUCCESS', payload : data}}
const UserVerifyFailed = (err) => {return {type : 'USER_VERIFY_FAILED', payload : err}}

export const UserVerify = (formData, cb)=>{
    return (dispatch)=>{
        cb(true)
        dispatch(UserVerifyRequest())
        return axios({
            method : 'POST',
            url : `${process.env.REACT_APP_API_URL}/auth/register/email-verify`,
            data : formData
        }).then((res)=>{
            cb(false)
            dispatch(UserVerifySuccess(res.data))
            dispatch(UserLogin(res.data.decoded.request, cb))
        }).catch((err)=>{
            alert(err)
            dispatch(UserVerifyFailed(err))
            cb(false)
        })
    }
}

const UserForgotPasswordRequest = () => {return {type : 'FORGOT_PASSWORD_REQUEST'}}
const UserForgotPasswordSuccess = (data) => {return {type : 'FORGOT_PASSWORD_SUCCESS', payload : data}}
const UserForgotPasswordFailed  = (err) => {return {type : 'FORGOT_PASSWORD_FAILED', payload : err}}

export const UserForgotPassword = (formData, cb, cb2)=>{
    return (dispatch)=>{
        cb(true)
        dispatch(UserForgotPasswordRequest())
        return axios({
            method : 'POST',
            url : `${process.env.REACT_APP_API_URL}/auth/forgot-password`,
            data : formData
        }).then((res)=>{
            cb(false)
            dispatch(UserForgotPasswordSuccess(res.data))
            cb2.push('forgot-password/verify')
        }).catch((err)=>{
            alert(err)
            dispatch(UserForgotPasswordFailed(err))
            cb(false)
        })
    }
}

const UserForgotPasswordVerifyRequest = () => {return {type : 'FORGOT_PASSWORD_VERIFY_REQUEST'}}
const UserForgotPasswordVerifySuccess = (data) => {return {type : 'FORGOT_PASSWORD_VERIFY_SUCCESS', payload : data}}
const UserForgotPasswordVerifyFailed  = (err) => {return {type : 'FORGOT_PASSWORD_VERIFY_FAILED', payload : err}}

export const UserForgotPasswordVerify = (formData, cb, cb2)=>{
    return (dispatch)=>{
        cb(true)
        dispatch(UserForgotPasswordVerifyRequest())
        return axios({
            method : 'POST',
            url : `${process.env.REACT_APP_API_URL}/auth/forgot-password/email-verify`,
            data : formData
        }).then((res)=>{
            cb(false)
            dispatch(UserForgotPasswordVerifySuccess(res.data))
            cb2.push(`/update-password/${res.data.data}`)
        }).catch((err)=>{
            alert(err)
            dispatch(UserForgotPasswordVerifyFailed(err))
            cb(false)
        })
    }
}

const UserUpdatePasswordRequest = ()=>{return {type : 'UPDATE_PASSWORD_REQUEST'}}
const UserUpdatePasswordSuccess = (data) => {return {type : 'UPDATE_PASSWORD_SUCCESS', payload : data}}
const UserUpdatePasswordFailed = (err) => {return {type : 'UPDATE_PASSWORD_FAILED', payload : err}}

export const UserUpdatePassword = (formData, cb, cb2)=>{
    return (dispatch)=>{
        cb(true)
        dispatch(UserUpdatePasswordRequest())
        return axios({
            method : 'POST',
            url : `${process.env.REACT_APP_API_URL}/auth/change-password`,
            data : formData
        }).then((res)=>{
            cb(false)
            alert('success')
            dispatch(UserUpdatePasswordSuccess(res.data))
            cb2.push('/login')
        }).catch((err)=>{
            alert(err)
            dispatch(UserUpdatePasswordFailed(err))
            cb(false)
        })
    }
}
