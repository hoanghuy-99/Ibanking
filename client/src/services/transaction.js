async function requestTransaction(){
    const response = await fetch("api/transactions",{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    get_transaction = await response.json()
    return get_transaction
}
async function requestNewTransaction(debt_id,otp){
    const data = {debt_id:debt_id,otp:otp}
    const response = await fetch("api/transactions",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}
export{requestTransaction,requestNewTransaction}