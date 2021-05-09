import axios from 'axios'

// const FetchMovieRequest = () => { return { type: 'FETCH_MOVIE_REQUEST' } }
// const FetchMovieSuccess = (data) => { return { type: 'FETCH_MOVIE_SUCCESS', payload: data } }
// const FetchMovieError = (err) => { return { type: 'FETCH_MOVIE_ERROR', payload: err } }

// export const FetchMovie = (userData) => {
//     return (dispatch) => {
//         dispatch(FetchMovieRequest())
//         return axios({
//             url: `${process.env.REACT_APP_API_URL}/movies`,
//             method: 'GET'
//         }).then((res) => {
//             dispatch(FetchMovieSuccess(res.data.data))
//         }).catch((err) => {
//             dispatch(FetchMovieError(err))
//         })
//     }
// }

const FetchMovieNowRequest = () => { return { type: 'FETCH_MOVIE_NOW_REQUEST' } }
const FetchMovieNowSuccess = (data) => { return { type: 'FETCH_MOVIE_NOW_SUCCESS', payload: data } }
const FetchMovieNowError = (err) => { return { type: 'FETCH_MOVIE_NOW_ERROR', payload: err } }

export const FetchMovieNow = (today) => {
    console.log(today)
    return (dispatch) => {
        dispatch(FetchMovieNowRequest())
        return axios({
            url: `${process.env.REACT_APP_API_URL}/movies/date?start=${today}`,
            method: 'GET'
        }).then((res) => {
            dispatch(FetchMovieNowSuccess(res.data.data))
        }).catch((err) => {
            dispatch(FetchMovieNowError(err))
        })
    }
}

const FetchUpcomingMovieRequest = () => { return { type: 'FETCH_UPCOMING_MOVIE_REQUEST' } }
const FetchUpcomingMovieSuccess = (data) => { return { type: 'FETCH_UPCOMING_MOVIE_SUCCESS', payload: data } }
const FetchUpcomingMovieError = (err) => { return { type: 'FETCH_UPCOMING_MOVIE_ERROR', payload: err } }

export const FetchUpcomingMovie = () => {
    return (dispatch) => {
        dispatch(FetchUpcomingMovieRequest())
        return axios({
            url: `${process.env.REACT_APP_API_URL}/movies/upcoming`,
            method: 'GET'
        }).then((res) => {
            dispatch(FetchUpcomingMovieSuccess(res.data.data))
        }).catch((err) => {
            dispatch(FetchUpcomingMovieError(err))
        })
    }
}

const FetchMovieByIdRequest = () => { return { type: 'FETCH_MOVIE_BY_ID_REQUEST' } }
const FetchMovieByIdSuccess = (data) => { return { type: 'FETCH_MOVIE_BY_ID_SUCCESS', payload: data } }
const FetchMovieByIdError = (err) => { return { type: 'FETCH_MOVIE_BY_ID_ERROR', payload: err } }

export const FetchMovieById = (id) => {
    return (dispatch) => {
        dispatch(FetchMovieByIdRequest())
        return axios({
            url: `${process.env.REACT_APP_API_URL}/movies/${id}`,
            method: 'GET'
        }).then((res) => {
            dispatch(FetchMovieByIdSuccess(res.data.data))
        }).catch((err) => {
            dispatch(FetchMovieByIdError(err))
        })
    }
}

const FetchMoviesByMonthRequest = () => { return { type: 'FETCH_MOVIE_BY_MONTH_REQUEST' } }
const FetchMoviesByMonthSuccess = (data) => { return { type: 'FETCH_MOVIE_BY_MONTH_SUCCESS', payload: data } }
const FetchMoviesByMonthFailed = (err) => { return { type: 'FETCH_MOVIE_BY_MONTH_FAILED', payload: err } }

export const FetchMoviesByMonth = (month) => {
    return (dispatch) => {
        dispatch(FetchMoviesByMonthRequest())
        return axios({
            url: `${process.env.REACT_APP_API_URL}/movies/month?month=${month}`,
            method: 'GET'
        }).then((res) => {
            dispatch(FetchMoviesByMonthSuccess(res.data.data))
        }).catch((err) => {
            dispatch(FetchMoviesByMonthFailed(err))
        })
    }
}

const FetchMovieResultRequest = () => {return {type: 'FETCH_MOVIE_RESULT_REQUEST'}}
const FetchMovieResultSuccess = (data) => {return {type: 'FETCH_MOVIE_RESULT_SUCCESS',payload: data}}
const FetchMovieResultError = (err) => {return {type: 'FETCH_MOVIE_RESULT_ERROR',payload: err}}

export const FetchMovieResult = (value) => {
    console.log(value)
    return (dispatch) => {
        dispatch(FetchMovieResultRequest())
        return axios({
            url: `${process.env.REACT_APP_API_URL}/movies/search?title=${value}`,
            method: 'GET'
        }).then((res) => {
            dispatch(FetchMovieResultSuccess(res.data.data))
        }).catch((err) => {
            dispatch(FetchMovieResultError(err?.response?.data?.message ?? null))
        })
    }
}


const AllMoviesRequest = () => { return { type: 'ALL_MOVIES_REQUEST' } }
const AllMoviesSuccess = (data) => { return { type: 'ALL_MOVIES_SUCCESS', payload: data } }
const AllMoviesError = (err) => { return { type: 'ALL_MOVIES_ERROR', payload: err } }

export const AllMovies = (data) => {
    return (dispatch) => {
        dispatch(AllMoviesRequest())
        return axios({
            url: `${process.env.REACT_APP_API_URL}/movies?from=${data.from}&to=${data.to}`,
            method: 'GET'
        }).then((res) => {
            dispatch(AllMoviesSuccess(res.data.data))
        }).catch((err) => {
            dispatch(AllMoviesError(err))
        })
    }
}

