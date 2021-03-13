const mongoose = require('mongoose');
require('dotenv').config

const connectDatabase = async () =>{
    await mongoose.connect(
        process.env.DATABASE_URL, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }
    )
    console.log('DB connected.')
    mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
    mongoose.connection.on('error', (err) => {
        console.error(err.message);
    });
}

module.exports = connectDatabase