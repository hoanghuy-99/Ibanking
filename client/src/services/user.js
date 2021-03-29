import {getToken} from '../cookie.js'
async function requestUserById(id){
    const response = await fetch("http://localhost:8080/api/users/me",{
        method: "GET",
        headers: {
            'Authorization': getToken()
        }
    })
    const get_user = await response.json()
    
    return get_user
}
export{requestUserById}
