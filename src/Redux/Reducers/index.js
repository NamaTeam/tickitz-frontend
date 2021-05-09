import { combineReducers } from 'redux'
import { UserLogin, UserRegister, UserVerify, UserForgotPassword, UserForgotPasswordVerify, UserUpdatePassword } from './auth'
import { FetchUser, UpdateUser } from './user'
import { AllMovies, FetchMovieNow, FetchUpcomingMovie, FetchMovieById, FetchMoviesByMonth, FetchMovieResult } from './movie'
import { Seat } from './seat'
import { ScheduleById } from './schedule'
import { AddOrder, GetOrderById, UpdateOrder, GetOrderHis } from './order'
import { FetchCinema, FetchCinemaByLocation, AllCinema } from './cinema'
import { allStats } from './stats'
import { Gopay } from './payment'

const reducers = combineReducers({
    UserLogin, UserRegister, UserVerify, UserForgotPassword, UserForgotPasswordVerify, UserUpdatePassword, FetchUser,
    UpdateUser, AllMovies, Seat, ScheduleById, AddOrder, FetchMovieNow, FetchUpcomingMovie, FetchMovieById, FetchCinema,
    FetchCinemaByLocation, GetOrderById, UpdateOrder, GetOrderHis, FetchMoviesByMonth, FetchMovieResult, AllCinema, allStats,
    Gopay
})

export default reducers