const OtpService = require('../services/otp')
const UserService = require('../services/user')
const TransactionService = require('../services/transaction')

function makeTransaction(req, res){
    const debt_id = req.body.debt_id
    const otp = req.body.otp
    const user_id = req.token.user_id

    const status = OtpService.check(otp, user_id)

    const OTP_STATUS = OtpService.OTP_STATUS

    switch(otp_status){
        case OTP_STATUS.VALID:
            return res.json({
                code: 0,
                data: {
                    user
                }
            })
        case OTP_STATUS.INVALID:
            return res.json({
                code: 10,
                message: 'OTP is invalid'
            })
        case OTP_STATUS.OUT_OF_DATE:
            return res.json({
                code: 11,
                message: 'OTP is out of date'
            })
    }


}

function getTransactions(req, res){
    
}

module.exports = {
    makeTransaction,
    getTransactions
}