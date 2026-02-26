const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        post: {
            type: String,
            required: true,
            minlength: [25, "Post should be minimum 25 characters"]
            }
        },
    { timestamps: true }
    );

module.exports = mongoose.model("Post", postSchema);
