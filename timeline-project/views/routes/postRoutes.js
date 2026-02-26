const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Show all posts (Timeline)
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.render("index", { posts });
  } catch (err) {
    res.status(500).send("Error loading posts");
  }
});

// Create new post
router.post("/", async (req, res) => {
  try {
    await Post.create({ post: req.body.post });
    res.redirect("/");
  } catch (err) {
    res.status(400).send("Post must be at least 25 characters");
  }
});

// Show one post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.render("show", { post });
  } catch (err) {
    res.status(404).send("Post not found");
  }
});

// Edit page
router.get("/edit/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.render("edit", { post });
  } catch (err) {
    res.status(404).send("Post not found");
  }
});

// Update post
router.put("/:id", async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, { post: req.body.post });
    res.redirect("/" + req.params.id);
  } catch (err) {
    res.status(400).send("Error updating post");
  }
});

// Delete post
router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Error deleting post");
  }
});

module.exports = router;
