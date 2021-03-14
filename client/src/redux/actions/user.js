import userConstants from '../constants/user'
import {requestUserById} from '../../services/user.js'
function requestToken(username,password){
    return{
        code: 0,
        data:{
            token: "JHGA76aahsd6438"
        }
    }
}
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
        const res = await requestUserById("604e07079d803c289c3fff05")
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

function login(username, password){
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
        dispatch(request())
        const res = await requestToken(username,password)
        if(res.code === 0)
        {
            dispatch(success(res.data,'Login Success'))
        }
        else
        {
            dispatch(failure('Username or Password is wrong'))
        }
    }
}

function logout(){
    return{
        type: userConstants.LOGOUT
    }
}
export { fetchUser, login ,logout}