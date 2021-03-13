const connectDatabase = require('./db')

const mongoose = require('mongoose')

const Debt = require('./models/Debt.js')
const User = require('./models/User.js')
const Transaction = require('./models/Transaction.js')

async function fakeData()
{
    await connectDatabase()
    mongoose.deleteModel('User')
    mongoose.deleteModel('Debt')
    mongoose.deleteModel('Transaction')

    const user = new User({
        _id: new mongoose.Types.ObjectId(1),
        name:'Kiet',
        email:'Kiet@gmail.com',
        phone:'0909123456',
        balance: 10000000000
    })

    const docs = [user]
    docs.forEach((doc)=>{
        doc.save()
    })
}
fakeData().then(()=>{
    console.log('Done')
})