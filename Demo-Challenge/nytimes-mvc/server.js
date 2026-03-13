const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Public folder
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// View engine
app.set("view engine", "ejs");

// Routes
app.use("/", require("./routes/articleRoutes"));

// MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Mongo error:", err));

// Server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
