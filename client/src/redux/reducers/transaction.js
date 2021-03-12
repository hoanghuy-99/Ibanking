import TransactionConstants from "../constants/transaction.js"

const initialState = {
    loggedIn: false,
    requesting: false,
    message: undefined,
    history: undefined,
    tokens: undefined,
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
        default:
            return state
    }
 }