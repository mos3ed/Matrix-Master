const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Mongo:Mosaaed248426@cluster0.wwkvzzc.mongodb.net/blogDB?retryWrites=true&w=majority&appName=Cluster0"
)
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));
