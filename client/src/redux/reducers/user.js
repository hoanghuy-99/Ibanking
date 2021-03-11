import userConstants from '../constants/user'

const initialState = {
    loggedIn: false,
    requesting: false,
    message: undefined,
    profile: undefined,
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
        default:
            return state
    }
}

