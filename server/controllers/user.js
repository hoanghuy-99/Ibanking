const UserService = require('../services/user.js')


module.exports.apiGetUserById = async (req, res)=>{
    const id = req.params.id
    user = await UserService.getById(id)
    if(user)
        res.json({code:0, data:{
            id: user._id,
            name: user.name,
            emailAddress: user.emailAddress,
            phone: user.phone,
            balance: user.balance
        }})
}
