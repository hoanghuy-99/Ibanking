import userConstants from '../constants/user'
import {requestUserById} from '../../services/user.js'
import { requestToken } from '../../services/token'
import { removeToken } from '../../cookie'

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
    function success(token,message){
        return {
            type: userConstants.LOGIN_SUCCESS,
            token,
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
        dispatch(request())
        const res = await requestToken(username, password)
        console.log(res);
        if(res.code === 0){
            const token = res.data.token
            dispatch(success(token, ''))
        }else{
            dispatch(failure(res.message))
        }
    }
}
function setUserBalance(balance){
    return{
        type: userConstants.SET_USER_BALANCE,
        balance,
    }
}
function logout(){
    removeToken()
    return{
        type: userConstants.LOGOUT
    }
}

function checkLogin(){
    return {
        type: userConstants.CHECK_LOGIN
    }
}

export { fetchUser, login ,logout, setUserBalance, checkLogin}