import otpConstants from '../constants/otp'

const initialState = {
    requesting: false,
    message: undefined
}

export default (state = initialState, action) => {
    switch (action.type) {
        case otpConstants.SEND_OTP:
            return {
                ...state,
                requesting: true
            }
        case otpConstants.SEND_OTP_SUCCESS:
            return {
                ...state,
                requesting: false,
                message: action.message
            }
        case otpConstants.SEND_OTP_FAILURE:
            return {
                ...state,
                requesting: false,
                message: action.message
            }
        default:
            return state
    }
}