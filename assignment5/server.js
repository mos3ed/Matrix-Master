const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./config/db");
const routes = require("./routes/routes");
const cookieParser = require("cookie-parser");
const { auth } = require("./middleware/auth");




// Connect to MongoDB
connectDB();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(auth); // JWT middleware

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", routes);

// Start Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
