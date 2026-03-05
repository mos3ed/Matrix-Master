const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Post = require("./models/Post");
const Comment = require("./models/Comment");
const User = require("./models/User");

const app = express(); // ← لازم يكون هنا قبل أي app.use

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // ← الآن في مكانه الصحيح

// Connect to DB
connectDB();

// View Engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Routes
app.get("/", (req, res) => {
    res.render("timeline");
});

// Create Post
app.post("/api/create-post", async (req, res) => {
    const { title, content } = req.body;
    const post = await Post.create({ title, content });
    res.json(post);
});

// Get Posts
app.get("/api/get-posts", async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
});

// Add Comment
app.post("/api/post-post-comment/:postId", async (req, res) => {
    const { comment } = req.body;
    const { postId } = req.params;

    const newComment = await Comment.create({
        postId,
        comment,
    });

    res.json(newComment);
});

// Get Comments
app.get("/api/get-post-comments/:postId", async (req, res) => {
    const { postId } = req.params;
    const comments = await Comment.find({ postId }).sort({ createdAt: -1 });
    res.json(comments);
});

// Start Server
app.listen(3000, () => console.log("Server running on port 3000"));
