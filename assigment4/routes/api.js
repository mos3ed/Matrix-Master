const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");
const commentController = require("../controllers/commentsController");

// Post API
router.get("/api/get-posts", postController.getAllPosts);
router.post("/api/create-post", postController.postOnePost);
router.put("/api/edit-post/:id", postController.updateOnePost);
router.delete("/api/delete-post/:id", postController.deletePost);

app.post("/api/create-user", async (req, res) => {
    const { username, email } = req.body;
    const user = await User.create({ username, email });
    res.json(user);
});


// Comment API
router.get("/api/get-post-comments/:idPost", commentController.getAllCommentsPost);
router.post("/api/post-post-comment/:idPost", commentController.postOneComment);

module.exports = router;
