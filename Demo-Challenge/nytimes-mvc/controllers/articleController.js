const Article = require('../models/Article');

// GET /
exports.listArticles = async (req, res) => {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.render('index', { articles });
};

// GET /new/article
exports.newArticleForm = (req, res) => {
    res.render('new', {
        errors: {},
        data: { title: "", body: "" }
    });
};

// POST /new/article
exports.createArticle = async (req, res) => {
    const { title, body } = req.body;

    const errors = {};

    if (!title || title.length < 25) {
        errors.title = "Title must be longer than 25 characters";
    }

    if (!body || body.length < 100) {
        errors.body = "Article must be longer than 100 characters";
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).render("new", {
            errors,
            data: { title, body }
        });
    }

    await Article.create({ title, body });
    res.redirect("/");
};

// GET /article/:id
exports.showArticle = async (req, res) => {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).send("Article not found");
    res.render("show", { article });
};

// GET /edit/article/:id
exports.editArticleForm = async (req, res) => {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).send("Article not found");

    res.render("edit", {
        article,
        errors: {}
    });
};

// POST /edit/article/:id
exports.updateArticle = async (req, res) => {
    const { title, body } = req.body;

    const errors = {};

    if (!title || title.length < 25) {
        errors.title = "Title must be longer than 25 characters";
    }

    if (!body || body.length < 100) {
        errors.body = "Article must be longer than 100 characters";
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).render("edit", {
            article: { _id: req.params.id, title, body },
            errors
        });
    }

    await Article.findByIdAndUpdate(req.params.id, { title, body });
    res.redirect(`/article/${req.params.id}`);
};

// DELETE /article/:id
exports.deleteArticle = async (req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.redirect("/");
};
