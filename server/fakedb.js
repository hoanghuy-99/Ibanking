const connectDatabase = require('./db')

const mongoose = require('mongoose')
const hasher = require('./utils/hasher')

const Debt = require('./models/Debt.js')
const User = require('./models/User.js')
const Transaction = require('./models/Transaction.js')

async function fakeData()
{
    await connectDatabase()
    await User.deleteMany()
    await Debt.deleteMany()
    await Transaction.deleteMany()

    const hashed_password = await hasher.hash('123456')

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username:'Kiet',
        hashedPassword: hashed_password,
        name:'Kiet',
        emailAddress:'tuankiet15021999@gmail.com',
        phone:'0909123456',
        balance: 1000000000000
    })
    const debt = new Debt({
        _id: new mongoose.Types.ObjectId(),
        student:{
            id: "51702125",
            name:"Đoàn Tuấn Kiệt"
        },
        description: "Học phí Học kì 2 năm học 2020-2021",
        amount: 2000000
    })

    const tran = new Transaction({
        _id: new mongoose.Types.ObjectId(),
        debt: debt._id,
        user: user._id
    })
    user.transactions.push(tran._id)
    const docs = [user, debt, tran]
    for(let i = 0; i < docs.length; i++ )
    {   
        await docs[i].save()
    }
    const trans = await Transaction.find({user:user._id}).populate('debt')
    
    console.log(trans)
}
fakeData().then(()=>{
    console.log('Fake data were created')
}).catch(error => {
    console.log(error)
    
}).finally(()=>{
    mongoose.connection.close()
})