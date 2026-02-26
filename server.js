const express = require("express");
const app = express();
const routes = require("./Config/Routes");
require("./Config/DB");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}))

app.use("/",routes)

app.set("views", "./Views");

app.use(express.static("public"));

app.use("/", routes);

app.listen(3000, () => console.log("server is on port 3000"));
