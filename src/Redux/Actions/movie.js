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