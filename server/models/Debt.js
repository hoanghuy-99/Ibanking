const mongoose = require('mongoose')

const debtSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    student:{
        id: String,
        name: String,
    },
    description: String,
    amount: Number,
    isPaid: { type:Boolean, default: false }
})

module.exports = mongoose.model('Debt', debtSchema)