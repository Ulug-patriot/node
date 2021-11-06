const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  category: String,
  type: String,
  title: String,
  price: Number,
  imagePath: {
    type: String,
  },
});

module.exports = mongoose.model("productModel", productSchema);
