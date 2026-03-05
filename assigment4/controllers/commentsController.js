const Comment = require("../models/Comment");

exports.getAllCommentsPost = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.idPost });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.postOneComment = async (req, res) => {
    try {
        const comment = await Comment.create({
        postId: req.params.idPost,
        comment: req.body.comment
        });
        res.json(comment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
