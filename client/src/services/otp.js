import {getToken} from '../cookie.js'
async function requestNewOTP(debt_id){
    const data = {debt_id:debt_id}
    const response = await fetch("http://localhost:8080/api/otps",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export{requestNewOTP}