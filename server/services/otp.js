require('dotenv').config()
const otpUtil = require('../utils/otp')
const {sendEmail} = require('../utils/email_sender')
const {createOtpEmail} = require('../utils/email_creator')
const UserModel = require('../models/User')

const otpExpIn = process.env.OTP_EXP_IN

function calculateOtpExp(){
    return Date.now() + otpExpIn*1000
}

class OtpService{
    static OTP_STATUS = {
        VALID: 'VALID',
        INVALID: 'INVALID',
        OUT_OF_DATE: 'OUT_OF_DATE'
    }

    static async sendNewOtpToUser(user_id) {
        const otp = otpUtil.create()
        const user = await UserModel.findById(user_id)
        if(!user){
            throw new Error('User id is not exist')
        }
        user.otp.value = otp
        user.otp.exp = calculateOtpExp()
        await user.save()
        const emailAddress = user.emailAddress
        const name = user.name

        try{
            await sendEmail(createOtpEmail(emailAddress, name, otp))
        }catch(e){
            console.log(e)
            return false
        }
        return true
    }

    static async check(otp, user_id){
        const user = await UserModel.findById(user_id)
        if(!user){
            throw new Error('User id is not exist')
        }

        if(otp !== user.otp.value){
            return this.OTP_STATUS.INVALID
        }

        if(Date.now() > user.otp.exp){
            return this.OTP_STATUS.OUT_OF_DATE
        }

        return this.OTP_STATUS.VALID
    }
}

module.exports = OtpService
