const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    login: String,
    password: String
})

module.exports = mongoose.model('AdminModel' , adminSchema)