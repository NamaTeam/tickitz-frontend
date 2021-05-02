const initialState = {
    data: [],
    loading: false
}

const FetchUser = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'FETCH_USER_REQUEST':
            return {
                ...state,
                loading: true
            }    
        case 'FETCH_USER_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }    
        case 'FETCH_USER_ERROR':
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
const UpdateUser = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'UPDATE_USER_REQUEST':
            return {
                ...state,
                loading: true
            }    
        case 'UPDATE_USER_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }    
        case 'UPDATE_USER_ERROR':
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
    FetchUser,
    UpdateUser
}