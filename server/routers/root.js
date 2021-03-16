const express = require('express');
const router = express.Router();

const {requireToken} = require('../middlewares/authorization')

const userRouter = require('./user')
const debtRouter = require('./debt')
const otpRouter = require('./otp')
const tokenRouter = require('./token')

router.use('/users', requireToken, userRouter)
router.use('/debts', requireToken, debtRouter)
router.use('/otps', requireToken, otpRouter)
router.use('/tokens', tokenRouter)

module.exports = router