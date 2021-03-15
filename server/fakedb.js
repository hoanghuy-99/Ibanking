const connectDatabase = require('./db')

const mongoose = require('mongoose')

const Debt = require('./models/Debt.js')
const User = require('./models/User.js')
const Transaction = require('./models/Transaction.js')

async function fakeData()
{
    await connectDatabase()
    await User.deleteMany()
    await Debt.deleteMany()
    await Transaction.deleteMany()


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

    const docs = [user, debt]
    for(let i = 0; i < docs.length; i++ )
    {   
        await docs[i].save()
    }
    let u = await Debt.findOne({'student.id':'51702125'})
    console.log(u)
}
fakeData().then(()=>{
    console.log('Fake data were created')
}).catch(error => {
    console.log(error)
    
}).finally(()=>{
    mongoose.connection.close()
})