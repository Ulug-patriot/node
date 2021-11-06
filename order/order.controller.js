const Order =require('./order.model')

async function addOrder(req,res) {
    try {
        const order =  await Order.create(req.body)
        console.log(req.body)
        res.status(200).send(order)
    } catch(err){
        console.log(err)
        return res.status(400).send(err)
    }
}

async function  getOrder(req , res) {
    try {
        const OrderList = await Order.find({})
        return res.status(200).json(OrderList)
    } catch (err){
        return res.status(400).send(err)
    }
}


async function deleteOrder(req , res ) {
    try {
        const OrderId = req.params.Order_id
        await Order.findByIdAndDelete(OrderId)
        return res.status(200).json('Malumot o\'chirib yuborildi')
    } catch (err){
        return res.status(400).send(err)
    }
}



module.exports = {
    addOrder,
    getOrder,
    deleteOrder
}

