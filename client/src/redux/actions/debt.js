import DebtConstansts from "../constants/debt.js"
import {requestDebt} from '../../services/debt.js'
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
            dispatch(success(res.data,''))
        }
        else{
            dispatch(failure("Không có nợ học phí!"))
        }
    }
}
export {fetchDebtByStudentId}