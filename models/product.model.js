const mongoose = require("mongoose");

// Define Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
