const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {
    if (!req.user) return res.redirect("/login");

    await Comment.create({
        message: req.body.message,
        user: req.user.id,
        post: req.body.postId
    });

    res.redirect("/timeline");
};
