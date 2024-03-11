const mongoose = require("mongoose");
const dbURL = process.env.DB_URL || "mongodb://localhost:27017/media-centerDB";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("MongoDB server is successfully connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

connectToDatabase();
