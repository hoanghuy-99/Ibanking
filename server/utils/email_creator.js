

function createOtpEmail (receiver, name, otp){
    return {
        receiver,
        subject: '[IBanking] Transaction OTP',
        text: '',
        html: `
            <div>Hello ${name},</div>
                <div>Your transaction OTP is below:</div>
                <h2 style="margin-left: 2rem">${otp}</h2>
                <div>If you don't use this OTP within 60 seconds, it will expire.</div>
            </div>
        `,
    }
}

const formatMoney = (num)=>{
    return Intl.NumberFormat('vn-VN', {style: 'currency', currency:'VND'}).format(num)
}


function createTransactionEmail(receiver, content_params ){
    return {
        receiver,
        subject: '[IBanking] Đóng học phí thành công',
        text: '',
        html: `
            <div>Xin chào ${content_params.name},</div>
            <h2>Thông tin giao dịch</h2>
            <div>Tên người giao dịch: ${content_params.name}</div>
            <div>Mã số sinh viên: ${content_params.student_id}</div>
            <div>Tên sinh viên: ${content_params.student_name}</div>
            <div>Nội dung học phí: ${content_params.description}</div>
            <div>Số tiền đóng: ${formatMoney(content_params.amount)}</div>
            <div>Số tiền còn lại: ${formatMoney(content_params.balance)}</div>
            </div>
        `,
    }
}

module.exports = { createOtpEmail, createTransactionEmail }