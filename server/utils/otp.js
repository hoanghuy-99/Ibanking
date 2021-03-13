const generator = require('generate-password')

function create(){
    const otp = generator.generate({
        length: 6,
        numbers: true,
        symbols: false,
        lowercase: false,
        uppercase: false
    })

    return otp
}

module.exports = {
    create
}