const initialState = {
    data: [],
    loading: false
}

export const FetchMovie = (state = initialState, action = {}) => {
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

export const FetchMoviesByDate = (state = initialState, action = {})=>{
    switch (action.type){
        case 'FETCH_MOVIES_BY_DATE_REQUEST':
            return{
                ...state,
                loading: false
            }
        case 'FETCH_MOVIES_BY_DATE_SUCCESS':
            return{
                ...state,
                loading : false,
                data : action.payload
            }
        case 'FETCH_MOVIES_BY_DATE_FAILED':
            return{
                ...state,
                loading : false,
                error : action.payload,
                data : []
            }
        default:
            return state
    }
}

export const GetMovieDetail = (state = initialState, action = {})=>{
    switch (action.type){
        case 'GET_MOVIES_DETAIL_REQUEST':
            return{
                ...state,
                loading : false
            }
        case 'GET_MOVIES_DETAIL_SUCCESS':
            return{
                ...state,
                loading : false,
                data : action.payload
            }
        case 'GET_MOVIES_DETAIL_FAILED':
            return{
                ...state,
                loading : false,
                error : action.payload,
                data : []
            }
        default:
            return state
    }
}