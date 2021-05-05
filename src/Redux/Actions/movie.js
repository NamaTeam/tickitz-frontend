import axios from 'axios'

const FetchMovieRequest = () => {return {type: 'FETCH_MOVIE_REQUEST'}}
const FetchMovieSuccess = (data) => {return {type: 'FETCH_MOVIE_SUCCESS',payload: data}}
const FetchMovieError = (err) => {return {type: 'FETCH_MOVIE_ERROR',payload: err}}

export const FetchMovie = (userData) => {
    return (dispatch) => {
        dispatch(FetchMovieRequest())
        return axios({
            url: `${process.env.REACT_APP_API_URL}/movies`,
            method: 'GET'
        }).then((res) => {
            dispatch(FetchMovieSuccess(res.data.data))
        }).catch((err) => {
            dispatch(FetchMovieError(err))
        })
    }
}

const FetchMoviesByDateRequest = () => {return{type: 'FETCH_MOVIES_BY_DATE_REQUEST'}}
const FetchMoviesByDateSuccess = (data) => {return {type : 'FETCH_MOVIES_BY_DATE_SUCCESS', payload : data}}
const FetchMoviesByDateFailed = (err) => {return {type : 'FETCH_MOVIES_BY_DATE_FAILED', payload : err}}

export const FetchMoviesByDate = (date) => {
    return (dispatch)=>{
        dispatch(FetchMoviesByDateRequest())
        return axios({
            url : `${process.env.REACT_APP_API_URL}/movies/date?start=${date}`,
            method : 'GET'
        }).then((res) =>{
            dispatch(FetchMoviesByDateSuccess(res.data.data))
        }).catch((err)=>{
            dispatch(FetchMoviesByDateFailed(err))
        })
    }
}

const GetMoviesDetailRequest = () => {return{type: 'GET_MOVIES_DETAIL_REQUEST'}}
const GetMoviesDetailSuccess = () => {return{type: 'GET_MOVIES_DETAIL_SUCCESS'}}
const GetMoviesDetailFailed = () => {return{type : 'GET_MOVIES_DETAIL_FAILED'}}

export const GetMovieDetail = (id) =>{
    return (dispatch)=>{
        dispatch(GetMoviesDetailRequest())
        return axios({
            url : `${process.env.REACT_APP_API_URL}/movies/:id=${id}`,
            method : 'GET'
        }).then((res)=>{
            dispatch(GetMoviesDetailSuccess(res.data.data))
        }).catch((err)=>{
            alert('ini errornya',err.message)
            dispatch(GetMoviesDetailFailed(err))
        })
    }
}


