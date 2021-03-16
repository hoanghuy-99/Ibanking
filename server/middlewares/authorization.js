const TokenService = require('../services/token')

module.exports.requireToken = (req, res, next) => {
    const token = req.headers.authorization
    if(!token){
        return res.status(403).json({
            code: 100,
            message: 'No credentials sent!'
        })
    }
    let isValid = true
    let payload = undefined
    
    try{
        payload = TokenService.verify(token)
        if(!payload){
            isValid = false
        }
    }catch(e){
        console.log(e)
        isValid = false
    }

    if(isValid){
        req['token'] = {
            user_id: payload.user_id
        }
        next()
    }else{
        res.json({
            code: 101,
            message: 'Token is invalid'
        })
    }
}
