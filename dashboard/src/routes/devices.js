const router = require('express').Router()

router.get('/', (req, res) => {
    const devices = [{
        id: 1234352435,
        nome: "Geladeira",
        kwh: 351,
        corrente: 2.45,
        voltagem: 127.55,
        fp: 0.98
    },
    {
        id: 2554352332,
        nome: "Lâmpada da sala",
        kwh: 44,
        corrente: 0.45,
        voltagem: 127.55,
        fp: 0.99
    },
    {
        id: 3334352337,
        nome: "Lâmpada da cozinha",
        kwh: 44,
        corrente: 0.45,
        voltagem: 127.55,
        fp: 0.99
    },
    {
        id: 3444352344,
        nome: "Lâmpada da cozinha",
        kwh: 44,
        corrente: 1.56,
        voltagem: 127.55,
        fp: 0.89
    }
    ]
    res.json({
        succes: true,
        devices: devices
    })
})

router.post('/', (req, res) => {
    res.json(req.body)
    console.log(req.body)
})

module.exports = router