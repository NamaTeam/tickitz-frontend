const initialState = {
    data : [],
    loading : false
}

export const UserLogin = (state = initialState, action = {}) => {
    switch(action.type){
        case 'USER_LOGIN_REQUEST':
            return{
                ...state,
                loading : true,
                isLogin : false
            }
        case 'USER_LOGIN_SUCCESS':
            return{
                ...state,
                loading : false,
                isLogin : true,
                data : action.payload
            }
        case 'USER_LOGIN_ERROR' :
            return{
                ...state,
                loading : false,
                isLogin : false,
                error : action.payload,
                data : []
            }
        case 'USER_LOGOUT' :
            return{
                ...state,
                data : [],
                loading : false,
                isLogin : false
            }
        default :
            return state
    }
}

export const UserRegister = (state = initialState, action = {}) =>{
    switch(action.type){
        case 'USER_REGISTER_REQUEST':
            return{
                ...state,
                loading : true,
            }
        case 'USER_REGISTER_SUCCESS' :
            return{
                ...state,
                loading : false,
                data : action.payload
            }
        case 'USER_REGISTER_FAILED':
            return{
                ...state,
                loading : false,
                error : action.payload
            }
        default :
            return state
    }
}

export const UserVerify = (state = initialState, action = {}) =>{
    switch(action.type){
        case 'USER_VERIFY_REQUEST':
            return{
                ...state,
                loading : true,
            }
        case 'USER_VERIFY_SUCCESS' :
            return{
                ...state,
                loading : false,
                data : action.payload
            }
        case 'USER_VERIFY_FAILED':
            return{
                ...state,
                loading : false,
                error : action.payload
            }
        default :
            return state
    }
}
export const UserForgotPassword = (state = initialState, action = {}) =>{
    switch(action.type){
        case 'FORGOT_PASSWORD_REQUEST':
            return{
                ...state,
                loading : true,
            }
        case 'FORGOT_PASSWORD_SUCCESS' :
            return{
                ...state,
                loading : false,
                data : action.payload
            }
        case 'FORGOT_PASSWORD_FAILED':
            return{
                ...state,
                loading : false,
                error : action.payload
            }
        default :
            return state
    }
}

export const UserForgotPasswordVerify = (state = initialState, action = {})=>{
    switch(action.type){
        case 'FORGOT_PASSWORD_VERIFY_REQUEST':
            return{
                ...state,
                loading : true,
            }
        case 'FORGOT_PASSWORD_VERIFY_SUCCESS':
            return{
                ...state,
                loading : false,
                data : action.payload
            }
        case 'FORGOT_PASSWORD_VERIFY_FAILED':
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        default :
            return state
    }
}

export const UserUpdatePassword = (state = initialState, action = {})=>{
    switch(action.type){
        case 'UPDATE_PASSWORD_REQUEST':
            return{
                ...state,
                loading : true,
            }
        case 'UPDATE_PASSWORD_SUCCESS':
            return{
                ...state,
                loading:false,
                data : action.payload
            }
        case 'UPDATE_PASSWORD_FAILED':
            return{
                ...state,
                loading : false,
                error : action.payload
            }
        default :
            return state
    }
}
