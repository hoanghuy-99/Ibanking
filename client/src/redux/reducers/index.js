import {combineReducers} from 'redux'
import userReducer from './user.js'
import debtReducer from './debt.js'

const rootReducer = combineReducers({
    user: userReducer,
    debt: debtReducer
})

export default rootReducer