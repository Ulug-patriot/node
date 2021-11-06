const express = require('express')
const router = express.Router()
const orderController = require('./order.controller')

//http://localhost:5000/order
router.route('/').get(orderController.getOrder)

//http://localhost:5000/order
router.route('/').post(orderController.addOrder)

//http://localhost:5000/order/:Order_id
router.route('/:Order_id').delete(orderController.deleteOrder)

module.exports = router