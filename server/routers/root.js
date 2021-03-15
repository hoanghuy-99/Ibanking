const express = require('express');
const router = express.Router();

const userRouter = require('./user')
const debtRouter = require('./debt')
const otpRouter = require('./otp')

router.use('/users', userRouter)
router.use('/debts',debtRouter)
router.use('/otps', otpRouter)

module.exports = router