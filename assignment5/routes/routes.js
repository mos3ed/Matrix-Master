const express = require("express");
const router = express.Router();



const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
const commentController = require("../controllers/commentController");

// الصفحة الرئيسية
router.get("/", (req, res) => {
    res.redirect("/timeline");
});

// صفحات المستخدم
router.get("/login", userController.loginPage);
router.get("/register", userController.registerPage);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/logout", userController.logout);

// التايملاين
router.get("/timeline", postController.timelinePage);
router.post("/post", postController.createPost);

// التعليقات
router.post("/comment", commentController.addComment);

module.exports = router;
