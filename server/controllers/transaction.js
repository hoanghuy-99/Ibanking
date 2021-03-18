const OtpService = require('../services/otp')
const UserService = require('../services/user')
const TransactionService = require('../services/transaction')

function makeTransaction(req, res){
    const debt_id = req.body.debt_id
    const otp = req.body.otp
    const user_id = req.token.user_id

    const status = OtpService.check(otp, user_id)

    const OTP_STATUS = OtpService.OTP_STATUS

    switch(status){
        case OTP_STATUS.VALID:
            try{
                const canPay = await TransactionService.payDebt(user_id, debt_id)
            }catch(e){
                return res.json({
                    code: 1,
                    message: e
                })
            }
            
            if(canPay)
            {
                let user = await UserService.getById(user_id).populate('transactions')
                const balance = user.balance
                const tran = user.transactions.find((t)=>{
                    return t.debt_id === debt_id
                })
                return res.json({
                    code: 0,
                    data: {
                        user:{
                            balance
                        },
                        transaction:{
                            id: tran._id,
                            time: tran.time,
                            student:{
                                name: tran.student.name,
                                id: tran.student.id
                            },
                            amount: tran.amount
                        }
                    }
                })
            }
            else{
                return res.json({
                    code: 5,
                    message: 'Balance is not enough for the transaction'
                })
            }
            
        case OTP_STATUS.INVALID:
            return res.json({
                code: 10,
                message: 'OTP is invalid'
            })
        case OTP_STATUS.OUT_OF_DATE:
            return res.json({
                code: 11,
                message: 'OTP is out of date'
            })
    }


}

async function getTransactions(req, res){
    const user_id = req.token.user_id
    let trans
    try{
        trans = await TransactionService.getAllByUserId(user_id)
    }catch(e){
        console.log(e)
        return res.json({
            code: 1,
            message: 'User id not exists'
        })
    }

    const json_transactions = []

    trans.forEach(t => {
        json_transactions.push({
            id: t._id,
            time: t.time,
            student: {
                id: t.debt.student.id,
                name: t.debt.student.name
            },
            amount: t.debt.amount
        })
    });

    return res.json({
        code: 0,
        data:{
            transactions: json_transactions
        }
    })
    
}

module.exports = {
    makeTransaction,
    getTransactions
}