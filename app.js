const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./config/db");
const productRoute = require("./routes/product.route");
const cartRoute = require("./routes/cart.route");

// middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/products", productRoute);
app.use("/api/v1/carts", cartRoute);

app.get("/", (req, res) => {
  res.send("Media Center Server is running...");
});

// route error not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

// server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "something broken",
  });
});

module.exports = app;
