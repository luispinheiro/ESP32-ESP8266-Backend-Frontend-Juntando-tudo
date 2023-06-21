const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.json({
        success: true
    })
})

app.get('/devices', (req, res) => {
    const devices = [{
        id: 1234352435,
        nome: "Geladeira",
        kwh: 351,
        corrente: 2.45,
        voltagem: 127.55,
        fp: 0.98
    },
    {
        id: 1254352233,
        nome: "Forno",
        kwh: 200,
        corrente: 0.78,
        voltagem: 127.55,
        fp: 0.89
    }
    ] 
    res.json({
        success: true,
        devices: devices
    })
})

app.listen(PORT, () => console.log("Servidor rodando na porta 3000"))