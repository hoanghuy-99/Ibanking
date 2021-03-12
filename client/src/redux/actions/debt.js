import DebtConstansts from "../constants/debt.js"
function requestDebt(student_id){
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
}
function fetchDebtByStudentId(student_id){
    function request(){
        return {type:DebtConstansts.FETCH_DEBT}
    }
    function success(data,message){
        return {
            type: DebtConstansts.FETCH_DEBT_SUCCESS,
            data,
            message
        }
    }
    function failure(message){
        return {
            type: DebtConstansts.FETCH_DEBT_FAILURE,
            message
        }
    }
    return async (dispatch) => {
        dispatch(request())
        const res = await requestDebt(student_id)
        if(res.code === 0){
            dispatch(success(res.data,'Load data successfully'))
        }
        else{
            dispatch(failure("Fail to load data"))
        }
    }
}
export {fetchDebtByStudentId}