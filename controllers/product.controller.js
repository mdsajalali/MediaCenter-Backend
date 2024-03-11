const Product = require("../models/product.model");

const getAllProducts = async (req, res) => {
  try {
    const queryObj = {};
    const category = req.query.category;

    if (category) {
      queryObj.category = category;
    }

    const result = await Product.find(queryObj);
    res.send(result);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Product.findById(id);
    res.send(result);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getAllProducts, getProduct };
