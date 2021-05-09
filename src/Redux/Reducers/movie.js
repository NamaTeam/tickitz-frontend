const initialState = {
    data: [],
    loading: false
}

const AllMovies = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ALL_MOVIES_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'ALL_MOVIES_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case 'ALL_MOVIES_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }
        default:
            return state
    }
}
const FetchMovieNow = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'FETCH_MOVIE_NOW_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_MOVIE_NOW_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case 'FETCH_MOVIE_NOW_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }
        default:
            return state
    }
}
const FetchUpcomingMovie = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'FETCH_UPCOMING_MOVIE_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_UPCOMING_MOVIE_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case 'FETCH_UPCOMING_MOVIE_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }
        default:
            return state
    }
}
const FetchMovieById = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'FETCH_MOVIE_BY_ID_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_MOVIE_BY_ID_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case 'FETCH_MOVIE_BY_ID_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }
        default:
            return state
    }
}
const FetchMoviesByMonth = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'FETCH_MOVIE_BY_MONTH_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_MOVIE_BY_MONTH_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case 'FETCH_MOVIE_BY_MONTH_FAILED':
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }
        default:
            return state
    }
}
const FetchMovieResult = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'FETCH_MOVIE_RESULT_REQUEST':
            return {
                ...state,
                loading: true
            }    
        case 'FETCH_MOVIE_RESULT_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }    
        case 'FETCH_MOVIE_RESULT_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }    
        default:
            return state
    }
}
const AddMovie = (state = initialState, action={})=>{
    switch (action.type) {
        case 'ADD_MOVIE_REQUEST':
            return {
                ...state,
                loading: true
            }    
        case 'ADD_MOVIE_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }    
        case 'ADD_MOVIE_FAILED':
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }    
        default:
            return state
    }
}
const DeleteMovie = (state = initialState, action={})=>{
    switch (action.type) {
        case 'DELETE_MOVIE_REQUEST':
            return {
                ...state,
                loading: true
            }    
        case 'DELETE_MOVIE_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }    
        case 'DELETE_MOVIE_FAILED':
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }    
        default:
            return state
    }
}

const UpdateMovie = (state = initialState, action={})=>{
    switch (action.type){
        case 'UPDATE_MOVIE_REQUEST':
            return{
                ...state,
                loading : true
            }
        case 'UPDATE_MOVIE_SUCCESS':
            return{
                ...state,
                loading : false,
                data : action.payload
            }
        case 'UPDATE_MOVIE_FAILED':
            return{
                ...state,
                loading:false,
                error:action.payload,
                data:[]
            }
        default:
            return state
    }
}
export {
    AllMovies,
    FetchMovieNow,
    FetchUpcomingMovie,
    FetchMovieById,
    FetchMoviesByMonth,
    FetchMovieResult,
    AddMovie,
    DeleteMovie,
    UpdateMovie
}