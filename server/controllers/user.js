const UserService = require('../services/user.js')


module.exports.apiGetUserById = async (req, res)=>{
    let id = req.params.id

    if(id === 'me'){
        id = req.token.user_id 
    }

    user = await UserService.getById(id)
    if(user)
        res.json({code:0, data:{
            id: user._id,
            name: user.name,
            emailAddress: user.emailAddress,
            phone: user.phone,
            balance: user.balance
        }})
    else{
        res.json({code:1, message:'User id not exists'})
    }
}
