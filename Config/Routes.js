const express = require("express");
const router = express.Router();
const { HomePage,SinglePost,AddComment } = require("../Controllers/PageControllers");

router.get("/", HomePage);

router.get("/post/:id",SinglePost)
router.post("/post/:id/comment", AddComment);



module.exports = router;

