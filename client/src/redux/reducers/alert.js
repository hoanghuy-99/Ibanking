import { alertConstants } from '../constants/alert';

const initialState = {
    message: undefined
}

export function alert(state = initialState, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                ...state,
                type: 'alert-success',
                message: action.message
            };
        case alertConstants.ERROR:
            return {
                ...state,
                type: 'alert-danger',
                message: action.message
            };
        case alertConstants.CLEAR:
            return {
                ...state
            };
        default:
            return state
    }
}