import {combineReducers} from 'redux'
import userReducer from './user.js'
import debtReducer from './debt.js'
import TransactionReducer from './transaction.js'
import AlertReducer from './alert.js'
const rootReducer = combineReducers({
    user: userReducer,
    debt: debtReducer,
    transactions: TransactionReducer,
    alert: AlertReducer
})

export default rootReducer