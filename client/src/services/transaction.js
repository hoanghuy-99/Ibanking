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
async function requestNewTransaction(debt_id,otp){
    const data = {debt_id:debt_id,otp:otp}
    const response = await fetch("http://localhost:8080/api/transactions",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        },
        body: JSON.stringify(data)
    })
    const post_otp = await response.json()
    console.log(post_otp);
    return post_otp
}
export{requestTransaction,requestNewTransaction}