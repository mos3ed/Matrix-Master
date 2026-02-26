const Post = require("../Models/Post");

exports.HomePage = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.render("index", { posts });
};

exports.SinglePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", { post, errors: null });
};


exports.AddComment = async (req, res) => {
  const { comment } = req.body;
  const post = await Post.findById(req.params.id);

  if (!comment || comment.length < 25) {
    return res.render("post", {
      post,
      errors:["add comment less 25 letter"]
    });
  }

   
  post.comments.push({ text: comment });
  await post.save();

  res.redirect(`/post/${post._id}`);
};
