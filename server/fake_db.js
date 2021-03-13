const connectDatabase = require('./db')

const mongoose = require('mongoose')

const Debt = require('./models/Debt.js')
const User = require('./models/Debt.js')
const Transaction = require('./models/Transaction.js')

async function fakeData()
{
    await connectDatabase()
    mongoose.deleteModel('User')
    mongoose.deleteModel('Debt')
    mongoose.deleteModel('Transaction')

    const user = new User({

    })

    const tran = new Transaction({

    })

    const debt1 = new Debt({

    })

    const debt2 = new Debt({

    })

    const docs = [user, tran, debt1, debt2]
    docs.forEach((doc)=>{
        doc.save()
    })
}
