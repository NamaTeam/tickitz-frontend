import { combineReducers } from 'redux'
import {UserLogin, UserRegister,UserVerify,UserForgotPassword, UserForgotPasswordVerify, UserUpdatePassword} from './auth'
import { FetchUser, UpdateUser } from './user'

const reducers = combineReducers({
    UserLogin, UserRegister,UserVerify, UserForgotPassword, UserForgotPasswordVerify, UserUpdatePassword,FetchUser, UpdateUser
})

export default reducers