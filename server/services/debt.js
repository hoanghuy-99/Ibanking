const DebtModel = require('../models/Debt.js')

class DebtService{
    static async getOneByStudentId(student_id) {
        return await DebtModel.findOne({"student.id":student_id, isPaid:false})
    }
}

module.exports = DebtService