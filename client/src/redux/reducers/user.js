import userConstants from '../constants/user'

const initialState = {
    loggedIn: false,
    requesting: false,
    message: undefined,
    profile: undefined,
    tokens: undefined,
}

export default (state = initialState, action) => {
    switch(action.type){
        case userConstants.FETCH_USER:
            return {
                ...state,
                requesting: true
            }
        case userConstants.FETCH_USER_SUCCESS:
            return {
                ...state,
                requesting: false,
                profile: action.profile,
                message: action.message
            }
        case userConstants.FETCH_USER_FAILURE:
            return {
                ...state,
                requesting: false,
                profile: undefined,
                message: action.message
            }
        case userConstants.LOGIN:
            return{
                ...state,
                loggedIn: true,
                requesting: true
            }
        case userConstants.LOGIN_SUCCESS:
            return{
                ...state,
                loggedIn: true,
                requesting: false,
                tokens: action.tokens,
                message: action.message
            }
        case userConstants.LOGIN_FAILURE:
            return{
                ...state,
                loggedIn: false,
                requesting: false,
                tokens: undefined,
                message: action.message
            }
        case userConstants.LOGOUT:
            return{
                ...state,
                loggedIn:false,
                tokens:undefined
            }
        default:
            return state
    }
}

