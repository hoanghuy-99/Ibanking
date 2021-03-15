const express = require('express');
const router = express.Router();

const OtpController = require('../controllers/otp')

router.post('/', OtpController.apiSendOtp)

module.exports = router 