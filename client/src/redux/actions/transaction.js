import TransactionConstants from "../constants/transaction.js"

function fetchTransaction() {
    function request() {
        return { type: TransactionConstants.FETCH_TRANSACTION }
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
        if (res.code === 0) {
            dispatch(success(res.data, 'Load data successfully'))
        } else {
            dispatch(failure('Load data error'))
        }
    }
}

export { fetchTransaction }