
const UserModel = require('../models/User')

class UserService{
    static async getById(id){
        return await UserModel.findById(id)
    }

}

module.exports = UserService