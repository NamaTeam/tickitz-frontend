import { combineReducers } from 'redux'
import { UserLogin, UserRegister, UserVerify, UserForgotPassword, UserForgotPasswordVerify, UserUpdatePassword } from './auth'
import { FetchUser, UpdateUser } from './user'
import { FetchMovie, FetchMovieNow, FetchUpcomingMovie, FetchMovieById, FetchMoviesByMonth, FetchMovieResult } from './movie'
import { Seat } from './seat'
import { ScheduleById } from './schedule'
import { AddOrder, GetOrderById, UpdateOrder, GetOrderHis } from './order'
import { FetchCinema, FetchCinemaByLocation } from './cinema'

const reducers = combineReducers({
    UserLogin, UserRegister, UserVerify, UserForgotPassword, UserForgotPasswordVerify, UserUpdatePassword, FetchUser,
    UpdateUser, FetchMovie, Seat, ScheduleById, AddOrder, FetchMovieNow, FetchUpcomingMovie, FetchMovieById, FetchCinema,
    FetchCinemaByLocation, GetOrderById, UpdateOrder, GetOrderHis, FetchMoviesByMonth, FetchMovieResult
})

export default reducers