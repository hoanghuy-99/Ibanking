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
        _id: new mongoose.Types.ObjectId(),
        name:'Kiet',
        emailAddress:'Kiet@gmail.com',
        phone:'0909123456',
        balance: 10000000000
    })
    const debt = new Debt({
        _id: new mongoose.Types.ObjectId(),
        student:{
            id: "51702125",
            name:"Đoàn Tuấn Kiệt"
        },
        amount: 6969696969

    })
    const docs = [user,debt]
    docs.forEach((doc)=>{
        doc.save()
    })
}
fakeData().then(()=>{
    console.log('Done')
})