const initialState = {
    data: [],
    loading: false
}

const FetchCinema = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'FETCH_CINEMA_REQUEST':
            return {
                ...state,
                loading: true
            }    
        case 'FETCH_CINEMA_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }    
        case 'FETCH_CINEMA_ERROR':
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
const FetchCinemaByLocation = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'FETCH_CINEMA_BY_LOCATION_REQUEST':
            return {
                ...state,
                loading: true
            }    
        case 'FETCH_CINEMA_BY_LOCATION_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }    
        case 'FETCH_CINEMA_BY_LOCATION_ERROR':
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
    FetchCinema,
    FetchCinemaByLocation
}