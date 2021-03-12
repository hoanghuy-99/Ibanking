const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
    debt: { type: mongoose.Types.ObjectId, ref: 'Debt' },
    time: Number
})

module.exports = mongoose.model('Transaction', transactionSchema)