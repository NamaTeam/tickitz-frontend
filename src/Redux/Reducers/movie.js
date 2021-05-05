const initialState = {
    data: [],
    loading: false
}

const FetchMovie = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'FETCH_MOVIE_REQUEST':
            return {
                ...state,
                loading: true
            }    
        case 'FETCH_MOVIE_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }    
        case 'FETCH_MOVIE_ERROR':
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

export{
    FetchMovie,
    FetchMovieNow,
    FetchUpcomingMovie,
    FetchMovieById
}