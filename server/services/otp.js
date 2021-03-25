require('dotenv').config()
const otpUtil = require('../utils/otp')
const {sendEmail} = require('../utils/email_sender')
const {createOtpEmail} = require('../utils/email_creator')
const UserModel = require('../models/User')
const DebtModel = require('../models/Debt')

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

    static async sendNewOtpToUser(user_id, debt_id) {
        const otp = otpUtil.create()
        const user = await UserModel.findById(user_id)
        
        if(!user){
            throw new Error('User id is not exist')
        }

        if(debt_id){
            const debt = await DebtModel.findById(debt_id)

            if(!debt){
                throw new Error('Debt id is not exist')
            }
            if(debt.isPaid){
                throw new Error('Debt was paid')
            }
            
            user.otp.debt_id = debt_id
        }
        else{
            if(!user.otp.debt_id){
                throw new Error('Request with debt id to send new OTP before resend')
            }
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

    static async use(otp, user_id){
        const user = await UserModel.findById(user_id)
        if(!user){
            throw new Error('User id is not exist')
        }
        
        const debt_id = user.otp.debt_id

        if(otp !== user.otp.value){
            return {status:this.OTP_STATUS.INVALID, debt_id}
        }

        if(Date.now() > user.otp.exp){
            return {status:this.OTP_STATUS.OUT_OF_DATE, debt_id}
        }
        user.otp = undefined
        user.save()
        return {status:this.OTP_STATUS.VALID, debt_id}
    }
}

module.exports = OtpService
