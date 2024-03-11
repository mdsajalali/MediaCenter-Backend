const   mongoose = require("mongoose");

// Define Cart Schema
const cartSchema = new mongoose.Schema({
  email: String,
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: Number,
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
