import { combineReducers } from 'redux'
import {UserLogin, UserRegister,UserVerify,UserForgotPassword, UserForgotPasswordVerify, UserUpdatePassword} from './auth'
import { FetchUser, UpdateUser } from './user'
import { FetchMovie } from './movie'

const reducers = combineReducers({
    UserLogin, UserRegister,UserVerify, UserForgotPassword, UserForgotPasswordVerify, UserUpdatePassword, FetchUser, UpdateUser, FetchMovie
})

export default reducers