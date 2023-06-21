const router = require('express').Router()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_PASSWORD, () => {
    console.log("Conectado!!!")
})

const devices = require('./devices')
router.use('/devices', devices)

router.get('/', (req, res) => {
    res.json({
        success: false,
        message: "Este acesso é reservado"
    })
})

module.exports = router