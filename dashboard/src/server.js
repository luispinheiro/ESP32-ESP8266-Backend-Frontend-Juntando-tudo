const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()

app.use(bodyParser.json())
const api = require('./routes/')
app.use('/api', api)
const PORT = 3000

console.log(process.env.MONGODB_PASSWORD)

app.get('/', (req, res) => {
    res.json({
        success: true
    })
})

app.listen(PORT, () => console.log("Servidor rodando na porta 3000"))