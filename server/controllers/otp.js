require('dotenv').config()
const jwtUtil = require('../utils/jwt')
const OtpService = require('../services/otp')
const UserModel = require('../models/User')

const privateKey = process.env.PRIVATE_KEY

async function apiSendOtp(req, res){
    const user_id = req.query.user_id //req.token.user_id
    
    const rs = await OtpService.sendNewOtpToUser(user_id)
    if(rs){
        res.json({
            code: 0,
            message: 'A new OTP was sent to user'
        })
    }
    else{
        res.status(503).json({
            code: 1,
            message: 'Can not send OTP'
        })
    }
}

module.exports = {
    apiSendOtp
}