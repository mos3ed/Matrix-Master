const Post = require("../models/Post");
const Comment = require("../models/Comment");

// عرض التايملاين
exports.timelinePage = async (req, res) => {
  const posts = await Post.find()
    .populate("user")
    .sort({ createdAt: -1 });

  const comments = await Comment.find()
    .populate("user")
    .populate("post")
    .sort({ createdAt: 1 });

  res.render("timeline", {
    user: req.user || null,
    posts,
    comments
  });
};

// نشر رسالة جديدة
exports.createPost = async (req, res) => {
  if (!req.user) return res.redirect("/login");

  await Post.create({
    message: req.body.message,
    user: req.user.id
  });

  res.redirect("/timeline");
};
