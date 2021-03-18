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
            dispatch(success(res.data,'Load data successfully'))
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
        const res = requestNewTransaction(state.debt.data.id,otp)
        if(res.code === 0){
            dispatch(setUserBalance(res.data.user.balance))
            dispatch(success(res.data,"Successfully"))
        }
        else{
            dispatch(failure("Can't make transaction"))
        }
    }
}
export {fetchTransactions, makeTransaction}
