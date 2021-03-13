const jwt = require('jsonwebtoken')

function create(payload, private_key, expiresIn){
    return jwt.sign(payload, private_key, { expiresIn })
}

function verify(token, private_key){
    try{
        return jwt.verify(token, private_key)
    }catch(err)
    {
        return undefined
    }
}


module.exports = {
    create,
    verify
}