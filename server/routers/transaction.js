const express = require('express');
const router = express.Router();
const {setUpRequestQueue} = require('../middlewares/queue')

const TransactionController = require('../controllers/transaction')

const getIdFromRequest = (req)=>{
    return req.body.debt_id
}

const apiMakeTransactionWithQueue = setUpRequestQueue(TransactionController.apiMakeTransaction, getIdFromRequest)

router.post('/', apiMakeTransactionWithQueue)
router.get('/', TransactionController.apiGetTransactions)

module.exports = router