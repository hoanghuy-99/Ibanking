import {getToken} from '../cookie.js'
async function requestNewOTP(){
    const response = await fetch("http://localhost:8080/api/otps",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        },
        body: ''
    })
    return await response.json()
}
export{requestNewOTP}