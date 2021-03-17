const UserModel = require('../models/User')
const DebtModel = require('../models/Debt')
const TransactionModel = require('../models/Transaction')
const mongoose = require('mongoose')

class TransactionService{

    static payDebt(user_id, debt_id) {
        debt = await DebtModel.findById(debt_id)
        if(!debt){
            throw new Error('Debt id not exist')
        }

        user = await UserModel.findById(user_id)
        if(!user){
            throw new Error('User id not exist')
        }

        let balance = user.balance
        const amount = debt.amount

        transaction = new TransactionModel({
            _id: new mongoose.Types.ObjectId(),
            debt_id: debt_id,
            user_id: user_id
        })
        
        if(balance < amount){
            return false
        }

        balance -= amount

        user.balance = balance

        await user.save()
        await transaction.save()

        

        
    }

    static getByUserId(user_id){
    }
}


export default TransactionService