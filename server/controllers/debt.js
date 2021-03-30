const { response } = require('express')
const DebtService = require('../services/debt.js')

module.exports.apiGetDebtByStudentId = async (req,res)=> {
    const student_id = req.query.student_id
    debt = await DebtService.getOneByStudentId(student_id)
    if(debt){
        res.json({
            code: 0,
            data:{
                id: debt._id,
                student:{
                    id: debt.student.id,
                    name: debt.student.name
                },
                description: debt.description,
                amount: debt.amount
            }
        })
    }
    else{
        res.json({
            code: 1,
            message: "Don't have debt"
        })
    }
}