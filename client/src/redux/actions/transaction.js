import TransactionConstants from "../constants/transaction.js"
import {setUserBalance} from "../actions/user.js"
import {requestNewTransaction,requestTransaction} from "../../services/transaction.js"
function fetchTransactions(){
    function request(){
        return {type: TransactionConstants.FETCH_TRANSACTION}
    }

    function success(history, message) {
        return {
            type: TransactionConstants.FETCH_TRANSACTION_SUCCESS,
            history,
            message
        }
    }

    function failure(message) {
        return {
            type: TransactionConstants.FETCH_TRANSACTION_FAILURE,
            message
        }
    }
    return async(dispatch) => {
        dispatch(request())
        const res = await requestTransaction()
        if(res.code === 0){
            dispatch(success(res.data.transactions,'Load data successfully'))
        }
        else{
            dispatch(failure('Fail to load data'))
        }
        
    }
}

function makeTransaction(otp){
    function request(){
        return {type: TransactionConstants.MAKE_TRANSACTION}
    }
    function success(info_pay,message){
        return {
            type: TransactionConstants.MAKE_TRANSACTION_SUCCESS,
            info_pay,
            message
        }
    }
    function failure(message){
        return{
            type: TransactionConstants.MAKE_TRANSACTION_FAILURE,
            message
        }
    }
    return async (dispatch, getState) =>{
        dispatch(request())
        const state = getState()
        const res = await requestNewTransaction(otp)
        if(res.code === 0){
            dispatch(setUserBalance(res.data.user.balance))
            dispatch(success(res.data,"Successfully"))
        }
        else if(res.code === 10){
            dispatch(failure("OTP không hợp lệ"))
        }
        else{
            dispatch(failure("OTP hết hạn"))
        }
    }
}
export {fetchTransactions, makeTransaction}
