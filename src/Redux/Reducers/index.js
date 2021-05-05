import { combineReducers } from 'redux'
import {UserLogin, UserRegister,UserVerify,UserForgotPassword, UserForgotPasswordVerify, UserUpdatePassword} from './auth'
import { FetchUser, UpdateUser } from './user'
import { FetchMovie,FetchMoviesByDate,GetMovieDetail } from './movie'

const reducers = combineReducers({
    UserLogin, UserRegister,UserVerify, UserForgotPassword, UserForgotPasswordVerify, UserUpdatePassword, FetchUser, UpdateUser, FetchMovie, FetchMoviesByDate
    ,GetMovieDetail
})

export default reducers