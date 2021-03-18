import otpConstants from '../constants/otp'
import {requestNewOTP} from '../../services/otp.js'
function sendOtp() {
    function request() {
        return { type: otpConstants.SEND_OTP }
    }

    function success(message) {
        return {
            type: otpConstants.SEND_OTP_SUCCESS,
            message
        }
    }

    function failure(message) {
        return {
            type: otpConstants.SEND_OTP_FAILURE,
            message
        }
    }

    return async(dispatch) => {
        dispatch(request())
        const res = await requestNewOTP()
        if (res.code === 0) {
            dispatch(success(res.message, 'Successfully: Sent OTP to Email'))
        } else if (res.code === 1) {
            dispatch(failure(res.message, 'Error: Cannot Send OTP to Email'))
        } else if (res.code === 2) {
            dispatch(failure(res.message, 'Invalid Dept Id'))
        }
    }
}

export { sendOtp }