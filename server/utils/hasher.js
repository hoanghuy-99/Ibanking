const bcrypt = require('bcrypt')

async function hash(text) {
    return await bcrypt.hash(text, 12)
}

async function compare(text, hashed_text){
    try{
        return await bcrypt.compare(text, hashed_text)
    }catch(e){
        throw e
    }
}

module.exports = {
    hash,
    compare
}