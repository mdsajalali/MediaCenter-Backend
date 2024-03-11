const express = require("express");
const {
  getAllCarts,
  createAllCarts,
  createCart,
  deleteCart,
} = require("../controllers/cart.controller");
const route = express.Router();

route.get("/", getAllCarts);

route.post("/", createCart);

route.delete("/:id", deleteCart);

module.exports = route;
