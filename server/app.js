require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')


const PORT = process.env.PORT || 8080

//connect database
const connectDatabase = require('./db.js');
connectDatabase()

const app = express()

app.use(morgan('tiny'))
//app.use(helmet())
app.use(express.json())

//Router
const apiRouter = require('./routers/root')
app.use('/api', apiRouter)

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})