const express = require('express')
const router = express.Router();

const DebtController = require('../controllers/debt.js')

router.get('/', DebtController.apiGetDebtByStudentId)


module.exports = router