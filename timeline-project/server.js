const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const postRoutes = require("./routes/postRoutes");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

mongoose
  .connect("mongodb://localhost:27017/timelineDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/", postRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
