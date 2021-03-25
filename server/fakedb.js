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
        username:'tuankiet1502',
        hashedPassword: hashed_password,
        name:'Kiet',
        emailAddress:'tuankiet15021999@gmail.com',
        phone:'0909123456',
        balance: 1000000000000
    })
    const user2 = new User({
        _id: new mongoose.Types.ObjectId(),
        username:'hoanghuy',
        hashedPassword: hashed_password,
        name:'Vũ Hoàng Huy',
        emailAddress:'vuhoanghuy29101999@gmail.com',
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
    const debt2 = new Debt({
        _id: new mongoose.Types.ObjectId(),
        student:{
            id: "51702036",
            name:"Dương Hữu Nguyên"
        },
        description: "Tiền bảo hiểm y tế năm 2020-2021",
        amount: 50000000
    })
    const debt3 = new Debt({
        _id: new mongoose.Types.ObjectId(),
        student:{
            id: "51702117",
            name:"Vũ Hoàng Huy"
        },
        description: "Tiền rớt môn",
        amount: 100000000
    })
    const docs = [user,user2,debt,debt2,debt3]
    for(let i = 0; i < docs.length; i++ )
    {   
        await docs[i].save()
    }
}
fakeData().then(()=>{
    console.log('Fake data were created')
}).catch(error => {
    console.log(error)
    
}).finally(()=>{
    mongoose.connection.close()
})