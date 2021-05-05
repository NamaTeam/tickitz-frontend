import { combineReducers } from 'redux'
import { UserLogin, UserRegister, UserVerify, UserForgotPassword, UserForgotPasswordVerify, UserUpdatePassword } from './auth'
import { FetchUser, UpdateUser } from './user'
import { FetchMovie, FetchMovieNow, FetchUpcomingMovie, FetchMovieById } from './movie'
import { Seat } from './seat'
import { ScheduleById } from './schedule'
import { AddOrder } from './order'

const reducers = combineReducers({
    UserLogin, UserRegister, UserVerify, UserForgotPassword, UserForgotPasswordVerify, UserUpdatePassword, FetchUser, UpdateUser, FetchMovie, Seat, ScheduleById, AddOrder, FetchMovieNow, FetchUpcomingMovie, FetchMovieById
})

export default reducers