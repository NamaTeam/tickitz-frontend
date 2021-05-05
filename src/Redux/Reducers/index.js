import { combineReducers } from 'redux'
import {UserLogin, UserRegister,UserVerify,UserForgotPassword, UserForgotPasswordVerify, UserUpdatePassword} from './auth'
import { FetchUser, UpdateUser } from './user'
import { FetchMovie, FetchMovieNow, FetchUpcomingMovie, FetchMovieById } from './movie'

const reducers = combineReducers({
    UserLogin, UserRegister,UserVerify, UserForgotPassword, UserForgotPasswordVerify, UserUpdatePassword, FetchUser, UpdateUser, FetchMovie, FetchMovieNow, FetchUpcomingMovie, FetchMovieById
})

export default reducers