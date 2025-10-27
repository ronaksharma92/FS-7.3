const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
  color: String,
  size: String,
  stock: Number
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: Number,
  category: String,
  variants: [variantSchema]
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
