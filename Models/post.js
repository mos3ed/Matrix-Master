const mongoose = require("mongoose")

const commentschema = new mongoose.Schema({
    text: { type: String, required: true, minlength: 25 },
    createdAt: { type: Date, default: Date.now }
});

const postschema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 25 },
    content: { type: String, required: true, minlength: 25 },
    comments: [commentschema]
}, { timestamps: true });

module.exports = mongoose.model("post", postschema);
