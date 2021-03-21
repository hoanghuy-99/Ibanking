import userConstants from '../constants/user'

import {setToken, getToken} from '../../cookie'

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
                requesting: true
            }
        case userConstants.LOGIN_SUCCESS:
            setToken(action.token)
            return{
                ...state,
                loggedIn: true,
                requesting: false,
                message: action.message
            }
        case userConstants.LOGIN_FAILURE:
            return{
                ...state,
                loggedIn: false,
                requesting: false,
                token: undefined,
                message: action.message
            }
        case userConstants.LOGOUT:
            return{
                ...state,
                loggedIn:false,
                tokens:undefined
            }
        case userConstants.SET_USER_BALANCE:
            return{
                ...state,
                profile:{
                    ...state.profile,
                    balance: action.balance
                }
            }
        case userConstants.CHECK_LOGIN:
            if(getToken()){
                return {
                    ...state,
                    loggedIn: true
                }
            }
            return state
        default:
            return state
    }
}

