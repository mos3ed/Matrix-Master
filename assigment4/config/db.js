const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Mongo:Mosaaed12345@cluster0.wwkvzzc.mongodb.net/timeline?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

