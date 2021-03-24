const express = require('express');
const router = express.Router();

const TransactionController = require('../controllers/transaction')

router.post('/', TransactionController.apiMakeTransaction)
router.get('/', TransactionController.apiMakeTransaction)

module.exports = router