const OtpService = require('../services/otp')
const UserService = require('../services/user')
const TransactionService = require('../services/transaction')

 async function apiMakeTransaction(req, res){
    const otp = req.body.otp
    const user_id = req.token.user_id

    const {status, debt_id} = await OtpService.use(otp, user_id)

    const OTP_STATUS = OtpService.OTP_STATUS
    let tran = undefined
    switch(status){
        case OTP_STATUS.VALID:
            try{
                tran = await TransactionService.payDebt(user_id, debt_id)
            }catch(e){
                return res.json({
                    code: 1,
                    message: e.message
                })
            }
            if(tran)
            {
                let user = await UserService.getById(user_id)
                const balance = user.balance
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
                                name: tran.debt.student.name,
                                id: tran.debt.student.id
                            },
                            description: tran.debt.description,
                            amount: tran.debt.amount
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

async function apiGetTransactions(req, res){
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
            description: t.debt.description,
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
    apiGetTransactions,
    apiMakeTransaction
}