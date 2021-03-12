const mongoose = require('mongoose')

const debtSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    student:{
        id: String,
        name: String,
    },
    amount: Number,
    transaction: { type: mongoose.Types.ObjectId, ref: 'Transaction' }
})

module.exports = mongoose.model('Debt', debtSchema)