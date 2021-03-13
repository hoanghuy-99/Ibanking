require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const connectDatabase = require('./db.js');

const PORT = process.env.PORT || 8080

connectDatabase()

const app = express()

app.use(morgan())
//app.use(helmet())
app.use(express.json())

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})