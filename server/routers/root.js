const express = require('express');
const router = express.Router();

const userRouter = require('./user')
const debtRouter = require('./debt')

router.use('/user', userRouter)
router.use('/debts',debtRouter)
module.exports = router