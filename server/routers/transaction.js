const express = require('express');
const router = express.Router();

const TransactionController = require('../controllers/transaction')

router.post('/', TransactionController.makeTransaction)
router.get('/', TransactionController.getTransactions)

module.exports = router