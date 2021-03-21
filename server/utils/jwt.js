const jwt = require('jsonwebtoken')

function create(payload, private_key, expiresIn){
    return jwt.sign(payload, private_key, { expiresIn })
}

function verify(token, private_key){
    let payload
    try{
        payload = jwt.verify(token, private_key)
    }catch(e){
        return undefined
    }
    
    return payload
}

module.exports = {
    create,
    verify
}