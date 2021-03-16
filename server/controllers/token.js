const TokenService = require('../services/token')

async function apiCreateToken(req, res) {
    const username = req.body.username
    const password = req.body.password

    const token = await TokenService.create(username, password)

    if(token){
        res.json({
            code: 0,
            data:{
                token: token
            }
        })
    }
    else{
        res.json({
            code: 1,
            message: 'Username or password is wrong'
        })
    }
}

module.exports = {
    apiCreateToken
}