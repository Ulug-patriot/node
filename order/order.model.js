const mongoose = require('mongoose')
const orderSchema = mongoose.Schema({
        name:String,
        tel: String,
        adress: String,
        products:[
            {
                name: String,
                category: String,
                type: String,
                title: String,
                price: String,
                imagePath: {
                type: String,
                },
                count:String
            }
        ],
        date: {
            time : String
        }
})
module.exports = mongoose.model('Order' , orderSchema)