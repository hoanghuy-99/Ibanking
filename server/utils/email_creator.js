

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

module.exports = {createOtpEmail}