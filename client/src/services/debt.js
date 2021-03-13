async function requestDebt(student_id){
    return {
        code: 0,
        data: {
            id: "98901",
            student: {
                name: "Nguyen Van A",
                id: "51702125"
            },
            amount: 3450000
        }
    }
    // const response = await fetch("api/debts?student_id="+student_id,{
    //     method: "GET",
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // })
    // get_debt = await response.json()
    // return get_debt
}
export{requestDebt}