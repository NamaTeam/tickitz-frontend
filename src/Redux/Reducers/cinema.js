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

const AllCinema = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ALL_CINEMA_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'ALL_CINEMA_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }
        case 'ALL_CINEMA_ERROR':
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

const AddCinema = (state = initialState, action = {})=>{
    switch(action.type){
        case 'ADD_CINEMA_REQUEST':
            return{
                ...state,
                loading:true
            }
        case 'ADD_CINEMA_SUCCESS':
            return{
                ...state,
                loading:false,
                error : null,
                data : action.payload
            }
        case 'ADD_CINEMA_FAILED':
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
export {
    FetchCinema,
    FetchCinemaByLocation,
    AllCinema,
    AddCinema
}