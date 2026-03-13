const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 25
    },
    body: {
        type: String,
        required: true,
        minlength: 100
    }
}, { timestamps: true });

module.exports = mongoose.model("Article", articleSchema);
