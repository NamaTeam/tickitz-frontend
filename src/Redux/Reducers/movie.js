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

export{
    FetchMovie
}