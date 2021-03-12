const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    username: String,
    hashed_password: String,
    name: String,
    phone: String,
    emailAddress: String,
    balance: Number,
    otp:{
        value: String,
        exp: Number
    },
    transactions: [{ type: mongoose.Types.ObjectId, ref:'Transaction' }]

})

module.exports = mongoose.model('User', userSchema)