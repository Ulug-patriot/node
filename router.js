const express = require('express')
const router = express.Router()
const adminRouter = require('./admin/admin.router')
const orderRouter = require('./order/order.router')
const productRouter = require('./product/Rasm_joylash/product/product.router')

// http://localhost:5000/user
router.use('/admin' , adminRouter)

// http://localhost:5000/order
router.use('/order' , orderRouter)

// http://localhost:5000/product
router.use('/product' , productRouter)

module.exports = router