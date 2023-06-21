const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/dashboard', {useMongoClient: true })
mongoose.Promise = global.Promise

module.exports = mongoose