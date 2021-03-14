const { response } = require('express')
const DebtService = require('../services/debt.js')

module.exports.apiGetDebtByStudentId = async (req,res)=> {
    const student_id = req.query.student_id
    console.log(student_id)
    debt = await DebtService.getByStudentId(student_id)
    if(debt){
        res.json({
            code: 0,
            data:{
                id: debt._id,
                student:{
                    id: debt.student.id,
                    name: debt.student.name
                },
                amount: debt.amount
            }
        })
    }
    else{
        res.json({
            code: 1,
            message: "Student_id not exist!"
        })
    }
}