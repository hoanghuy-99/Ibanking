import DebtConstansts from "../constants/debt.js"
const initialState = {
    requesting: false,
    data: undefined,
    message: undefined,
}

export default (state = initialState, action) => {
    switch(action.type){
        case DebtConstansts.FETCH_DEBT:
            return{
                ...state,
                requesting: true,
                data:undefined
            }
        case DebtConstansts.FETCH_DEBT_SUCCESS:
            return{
                ...state,
                requesting: false,
                data: action.data,
                message: action.message
            }
        case DebtConstansts.FETCH_DEBT_FAILURE:
            return{
                ...state,
                requesting:false,
                data: undefined,
                message: action.message
            }
        default: 
            return state
    }
}