import userConstants from '../constants/user'
import {requestUserById} from '../../services/user.js'
import { requestToken } from '../../services/token'

const fetchUser = () => {
    function request(){
        return { type: userConstants.FETCH_USER }
    }

    function success(profile, message){
        return { 
            type: userConstants.FETCH_USER_SUCCESS,
            profile,
            message
        }
    }

    function failure(message){
        return {
            type: userConstants.FETCH_USER_FAILURE,
            message
        }
    }

    return async (dispatch) => {
        dispatch(request())
        const res = await requestUserById("60507c54430e2a06708c7636")
        if(res.code === 0)
        {
            dispatch(success(res.data, 'Success'))  
        }
        else
        {
            dispatch(failure('Fail'))
        }
    }
}

function login(username, password, from){
    function request(){
        return {type: userConstants.LOGIN}
    }
    function success(tokens,message){
        return {
            type: userConstants.LOGIN_SUCCESS,
            tokens,
            message
        }
    }
    function failure(message){
        return{
            type: userConstants.LOGIN_FAILURE,
            message
        }
    }
    return async (dispatch) =>{
        dispatch(request({ username }))
        requestToken(username, password)
            .then(
                user => {
                    dispatch(success(user))
                    history.push(from)
                },
                error => {
                    dispatch(failure(error.toString()))
                }
            )
    }
}
function setUserBalance(balance){
    return{
        type: userConstants.SET_USER_BALANCE,
        balance,
    }
}
function logout(){
    return{
        type: userConstants.LOGOUT
    }
}
export { fetchUser, login ,logout, setUserBalance}