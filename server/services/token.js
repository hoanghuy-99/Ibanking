require('dotenv').config()
const UserModel = require('../models/User')
const jwtUtil = require('../utils/jwt')
const hasher = require('../utils/hasher') 

const privateKey = process.env.PRIVATE_KEY
const tokenExpIn = Number(process.env.TOKEN_EXP_IN) 

class TokenService{
    static async create(username, password){
        const user = await UserModel.findOne({username:username})
        if(!user){
            return undefined
        }
        const hashed_password = user.hashedPassword
        let is_equal
        try{
            is_equal = await hasher.compare(password, hashed_password)
        }catch(e){
            console.log(e)
            throw new Error('Can not compare')
        }

        const payload ={
            user_id : user._id
        }

        if(!is_equal){
           return undefined
        }
        
        const token = jwtUtil.create(payload, privateKey, tokenExpIn)
        return token
    }
    
    static verify(token){
        const payload = jwtUtil.verify(token, privateKey)
        return payload
    }
}

module.exports = TokenService