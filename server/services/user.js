
const UserModel = require('../models/User')
const DebtModel = require('../models/Debt')

class UserService{
    static async getById(id){
        return await UserModel.findById(id)
    }

    static async payDebt(user_id, debt_id){
        debt = await DebtModel.findById(debt_id)
        if(!debt){
            throw new Error('Debt id not exist')
        }

        user = await UserModel.findById(user_id)
        if(!user){
            throw new Error('User id not exist')
        }

        if(user.balance < debt.amount){
            return false
        }

        
    }
}

module.exports = UserService