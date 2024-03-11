const express = require("express");
const {
  getAllProducts,
  getProduct,
} = require("../controllers/product.controller");
const route = express.Router();

route.get("/", getAllProducts);

route.get("/:id", getProduct);

module.exports = route;
