const express = require("express");
const router = express.Router();
const controller = require("../controllers/articleController");

// Home
router.get("/", controller.listArticles);

// New article
router.get("/new/article", controller.newArticleForm);
router.post("/new/article", controller.createArticle);

// Show article
router.get("/article/:id", controller.showArticle);

// Edit article
router.get("/edit/article/:id", controller.editArticleForm);
router.post("/edit/article/:id", controller.updateArticle);

// Delete article
router.post("/delete/article/:id", controller.deleteArticle);

module.exports = router;
