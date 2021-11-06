const productModel = require("./product.model");
const uuid = require("uuid").v4;
const fs = require("fs");

async function getProduct(req, res) {
  try {
    const products = await productModel.find({});
    return res.status(200).json(products);
  } catch (err) { 
    return res.status(400).send(err);
  }
}

async function addProduct(req, res) {
  const newProduct = new productModel({
    name: req.body.name,
    category: req.body.category,
    type: req.body.type,
    title: req.body.title,
    price: req.body.price,
    imagePath: "/uploads/" + req.file.filename,
  });
  try {
    console.log(req.body);
    console.log(req.file);
    const product = await newProduct.save();
    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
}

async function updateProduct(req, res) {
  try {
    const productId = req.params.id;
    const oldImagePath = await productModel

      .findById(productId)
      .select("imagePath -_id");
    await productModel.findByIdAndUpdate(id, {
      name: req.body.name,
      category: req.body.category,
      type: req.body.type,
      title: req.body.title,
      price: req.body.price,
      imagePath: Date.now + "-" + req.file.filename,
    });

    fs.unlink(oldImagePath.imagePath, function (err) {
      if (err) throw err;
      console.log("File o'chirildi.");
    });

    res.status(200).send("Malumot yangilandi");
  } catch (err) {
    return res.status(400).send(err);
  }
}

async function deleteProduct(req, res) {
  try {
    const productId = req.params.id;
    await productModel.findByIdAndDelete(productId);
    res.status(200).send("Malumot o'chirib yuborildi");
  } catch (err) {
    return res.status(400).send(err);
  }
}


module.exports = {
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
