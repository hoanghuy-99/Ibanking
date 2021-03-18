require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 8080

//connect database
const connectDatabase = require('./db.js');
connectDatabase().catch((e)=>{
    console.log(e)
})

const app = express()

app.use(cors())
app.use(morgan('tiny'))
//app.use(helmet())
app.use(express.json())

const long_task = (num) => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(num)
    },num*1000)
})

const {setUpRequestQueue} = require('./middlewares/queue')

const action = async (req, res)=>{
    console.log('in running action num: ', req.params.num)
    await long_task(req.params.num)
    console.log('result:'+req.params.num)
    res.send(req.params.num)
}
app.get('/demo/:num', setUpRequestQueue(action))

//Router
const apiRouter = require('./routers/root')
app.use('/api', apiRouter)

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})