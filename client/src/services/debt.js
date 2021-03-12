async function requestDebt(student_id){
    const response = await fetch("api/debts?student_id="+student_id,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    get_debt = await response.json()
    return get_debt
}
export{requestDebt}