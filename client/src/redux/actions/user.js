import userConstants from '../constants/user'

function requestUserById()
{
    return { 
        code: 0,
        data: {
            name: 'Kiet',
            phone: '908908908',
            emailAddress: 'kiet@gamil.com',
            balance: 100000000000
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
        const res = await requestUserById()
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

export { fetchUser }