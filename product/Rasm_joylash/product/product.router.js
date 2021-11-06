const express = require('express');
const router = express.Router();

const upload = require('../../common/middleware');
const ProductController = require('./product.controller');



//http://localhost:5000/user    Get
router.route('/').get(ProductController.getProduct);

//http://localhost:5000/user    Post
router.route('/creatProduct').post(upload.single('imagePath'), ProductController.addProduct);

//http://localhost:5000/user    Put
router.route('/:id').put(upload.single('imagePath'), ProductController.updateProduct);

//http://localhost:5000/user    Delet
router.route('/:id').delete(ProductController.deleteProduct);


module.exports = router