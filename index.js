const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Media Center Server is running...");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});


