const jwt = require('jsonwebtoken')

function create(payload, private_key, expiresIn){
    return jwt.sign(payload, private_key, { expiresIn })
}

function verify(token, private_key){
    payload = jwt.verify(token, private_key)
    return payload
}

module.exports = {
    create,
    verify
}