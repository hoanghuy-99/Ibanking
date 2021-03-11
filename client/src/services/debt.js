async function requestDebt(){
    const response = await fetch("api/debts",{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    get_debt = await response.json()
    return get_debt
}
export{requestDebt}