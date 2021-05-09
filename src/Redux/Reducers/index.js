import { combineReducers } from 'redux'
import { UserLogin, UserRegister, UserVerify, UserForgotPassword, UserForgotPasswordVerify, UserUpdatePassword } from './auth'
import { FetchUser, UpdateUser } from './user'
import { AllMovies, FetchMovieNow, FetchUpcomingMovie, FetchMovieById, FetchMoviesByMonth, FetchMovieResult,AddMovie, DeleteMovie, UpdateMovie } from './movie'
import { Seat } from './seat'
import { ScheduleById } from './schedule'
import { AddOrder, GetOrderById, UpdateOrder, GetOrderHis } from './order'
import { FetchCinema, FetchCinemaByLocation, AllCinema, AddCinema } from './cinema'
import { allStats } from './stats'

const reducers = combineReducers({
    UserLogin, UserRegister, UserVerify, UserForgotPassword, UserForgotPasswordVerify, UserUpdatePassword, FetchUser,
    UpdateUser, AllMovies, Seat, ScheduleById, AddOrder, FetchMovieNow, FetchUpcomingMovie, FetchMovieById, FetchCinema,
    FetchCinemaByLocation, GetOrderById, UpdateOrder, GetOrderHis, FetchMoviesByMonth, FetchMovieResult, AllCinema, allStats,
    AddMovie,DeleteMovie, UpdateMovie, AddCinema
})

export default reducers