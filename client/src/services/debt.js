async function requestDebt(student_id){
    const response = await fetch("http://localhost:8080/api/debts?student_id="+student_id,{
        method: "GET",
    })
    const get_debt = await response.json()
    return get_debt
}
export{requestDebt}