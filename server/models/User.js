const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    username: String,
    hashedPassword: String,
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