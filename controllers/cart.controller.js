const Cart = require("../models/cart.model");

const getAllCarts = async (req, res) => {
  try {
    const email = req.query.email;
    const query = { email: email };
    const result = await Cart.find(query).populate("productId");
    res.send(result);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send("Internal Server Error");
  }
};

const createCart = async (req, res) => {
  try {
    const cartItem = req.body;
    const result = await Cart.create(cartItem);
    res.send(result);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send("Internal Server Error");
  }
};

const deleteCart = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Cart.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getAllCarts, createCart, deleteCart };
