
const UserModel = require('../models/User')
const DebtModel = require('../models/Debt')

class UserService{
    static async getById(id){
        return await UserModel.findById(id)
    }
}

module.exports = UserService