import TransactionConstants from "../constants/transaction.js"

const initialState = {
    requesting: false,
    message: undefined,
    history: undefined,
    info_pay: undefined,
}
 export default (state = initialState, action)=> {
    switch(action.type){
        case TransactionConstants.FETCH_TRANSACTION:
            return{
                ...state,
                requesting:true
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
            }
        case TransactionConstants.MAKE_TRANSACTION_SUCCESS:
            return{
                ...state,
                requesting: false,
                info_pay: action.info_pay,
                message
            }
        case TransactionConstants.MAKE_TRANSACTION:
            return{
                ...state,
                requesting: false,
                info_pay: undefined,
                message
            }
        default:
            return state
    }
 }