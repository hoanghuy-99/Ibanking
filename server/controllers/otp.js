require('dotenv').config()
const OtpService = require('../services/otp')
const TransactionService = require('../services/transaction')

async function apiSendOtp(req, res){
    const user_id = req.token.user_id
    const debt_id = req.body.debt_id
    let rs
    try{
        if(debt_id){
            const canPay = await TransactionService.checkCanPay(user_id, debt_id)
            if(!canPay){
                return res.json({
                    code: 2,
                    message: "Balance is not enough"
                })
            }
        }
        rs = await OtpService.sendNewOtpToUser(user_id, debt_id)
    }catch(e){
        return res.json({
            code: 1,
            message: e.message
        })
    }
    
    if(rs){
        res.json({
            code: 0,
            message: 'A new OTP was sent to user'
        })
    }
    else{
        res.status(503).json({
            code: 503,
            message: 'Can not send OTP'
        })
    }
}

module.exports = {
    apiSendOtp
}