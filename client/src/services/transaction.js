import {getToken} from '../cookie.js'
async function requestTransaction(){
    const response = await fetch("http://localhost:8080/api/transactions",{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        },
    })
    const get_transaction = await response.json()
    return get_transaction
}
async function requestNewTransaction(otp){
    const data = {otp:otp}
    const response = await fetch("http://localhost:8080/api/transactions",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        },
        body: JSON.stringify(data)
    })
    const post_otp = await response.json();
    return post_otp
}
export{requestTransaction,requestNewTransaction}