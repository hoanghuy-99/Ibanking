import TransactionConstants from "../constants/transaction.js"

const initialState = {
    requesting: false,
    message: undefined,
    history: undefined,
    info_pay: undefined,
    isSuccess: false
}
 export default (state = initialState, action)=> {
    switch(action.type){
        case TransactionConstants.FETCH_TRANSACTION:
            return{
                ...state,
                requesting:true,
                message: undefined
            }
        case TransactionConstants.FETCH_TRANSACTION_SUCCESS:
            return{
                ...state,
                requesting:false,
                history: action.history,
                message: action.message
            }
        case TransactionConstants.FETCH_TRANSACTION_FAILURE:
            return{
                ...state,
                requesting:false,
                history:undefined,
                message: action.message
            }
        case TransactionConstants.MAKE_TRANSACTION:
            return{
                ...state,
                requesting: true,
                message: undefined
            }
        case TransactionConstants.MAKE_TRANSACTION_SUCCESS:
            return{
                ...state,
                requesting: false,
                info_pay: action.info_pay,
                message: action.message,
                isSuccess: true
            }
        case TransactionConstants.MAKE_TRANSACTION_FAILURE:
            return{
                ...state,
                requesting: false,
                info_pay: undefined,
                message: action.message,
                isSuccess: false
            }
        default:
            return state
    }
 }