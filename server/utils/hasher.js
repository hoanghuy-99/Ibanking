const bcrypt = require('bcrypt')

async function hash(text) {
    return await bcrypt.hash(text, 12)
}

async function compare(text, hashed_text){
    return await bcrypt.compare(text, hashed_text)
}

module.exports = {
    hash,
    compare
}