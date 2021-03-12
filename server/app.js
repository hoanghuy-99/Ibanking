const express = require('express')
const helmet = require('helmet')

const PORT = process.env.PORT || 8080

const app = express()

//app.use(helmet())
app.use(express.json())

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})