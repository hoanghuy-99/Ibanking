const UserModel = require('../models/User')
const DebtModel = require('../models/Debt')
const TransactionModel = require('../models/Transaction')
const mongoose = require('mongoose')

class TransactionService{
    static async payDebt(user_id, debt_id) {
        let debt = await DebtModel.findById(debt_id)
        if(!debt){
            throw new Error('Debt id not exist')
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
        console.log(user)
        await user.save()
        await tran.save()
        return await TransactionModel.findById(tran._id).populate('debt')
    }

    static async getAllByUserId(user_id){
        const trans = await TransactionModel.find({user:user_id}).populate('debt')
        return trans
    }
}


module.exports = TransactionService