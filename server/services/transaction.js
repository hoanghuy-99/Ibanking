const UserModel = require('../models/User')
const DebtModel = require('../models/Debt')
const TransactionModel = require('../models/Transaction')
const { createTransactionEmail } = require('../utils/email_creator')
const { sendEmail } = require('../utils/email_sender')
const mongoose = require('mongoose')

class TransactionService{
    static async checkCanPay(user_id, debt_id){
        let debt = await DebtModel.findById(debt_id)
        if(!debt){
            throw new Error('Debt id not exist')
        }

        if(debt.isPaid){
            throw new Error('The debt was paid')
        }

        let user = await UserModel.findById(user_id)
        if(!user){
            throw new Error('User id not exist')
        }

        let balance = user.balance
        const amount = debt.amount
        if(balance < amount){
            return false
        }

        return true
    }
    static async payDebt(user_id, debt_id) {
        let debt = await DebtModel.findById(debt_id)
        if(!debt){
            throw new Error('Debt id not exist')
        }

        if(debt.isPaid){
            throw new Error('The debt was paid')
        }

        let user = await UserModel.findById(user_id)
        if(!user){
            throw new Error('User id not exist')
        }

        let balance = user.balance
        const amount = debt.amount
        if(balance < amount){
            return undefined
        }

        const tran = new TransactionModel({
            _id: new mongoose.Types.ObjectId(),
            debt: debt_id,
            user: user_id
        })

        balance -= amount

        user.balance = balance
        user.transactions.push(tran._id)
        debt.isPaid = true

        await user.save()
        await tran.save()
        await debt.save()

        const emailAddress = user.emailAddress

        const content_params = {
            name: user.name,
            student_id: debt.student.id,
            student_name: debt.student.name,
            description: debt.description,
            amount: debt.amount,
            balance
        }

        await sendEmail(createTransactionEmail(emailAddress, content_params))

        return await TransactionModel.findById(tran._id).populate('debt')
    }

    static async getAllByUserId(user_id){
        const trans = await TransactionModel.find({user:user_id}).populate('debt')
        return trans
    }
}


module.exports = TransactionService