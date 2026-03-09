const FEED = require('../model/FEED');

    // عرض كل البوستات
    exports.getAllFeeds = async (req, res) => {
    try {
        const feeds = await FEED.find().sort({ createdAt: -1 });
        res.render('feed-index', { feeds, errors: null, old: {} });
    } catch (err) {
        res.status(500).send('Server error');
    }
    };

    // عرض صفحة إضافة بوست جديد
    exports.getNewFeedForm = (req, res) => {
    res.render('feed-new', { errors: null, old: {} });
    };

    // إنشاء بوست جديد
    exports.createFeed = async (req, res) => {
    const { name, message } = req.body;

    try {
        const feed = new FEED({ name, message });
        await feed.save();
        res.redirect('/feeds');
    } catch (err) {
        let errors = {};
        if (err.errors) {
        for (let key in err.errors) {
            errors[key] = err.errors[key].message;
        }
        }
        res.status(400).render('feed-new', {
        errors,
        old: { name, message }
        });
    }
    };

    // عرض بوست واحد
    exports.getFeedById = async (req, res) => {
    try {
        const feed = await FEED.findById(req.params.id);
        if (!feed) return res.status(404).send('Post not found');
        res.render('feed-show', { feed });
    } catch (err) {
        res.status(500).send('Server error');
    }
    };

    // عرض صفحة التعديل
    exports.getEditFeedForm = async (req, res) => {
    try {
        const feed = await FEED.findById(req.params.id);
        if (!feed) return res.status(404).send('Post not found');
        res.render('feed-edit', { feed, errors: null });
    } catch (err) {
        res.status(500).send('Server error');
    }
    };

    // تحديث بوست
    exports.updateFeed = async (req, res) => {
    const { message } = req.body;

    try {
        const feed = await FEED.findById(req.params.id);
        if (!feed) return res.status(404).send('Post not found');

        feed.message = message;

        await feed.validate(); // للتأكد من الفاليديشن قبل الحفظ

        await feed.save();
        res.redirect(`/feeds/${feed._id}`);
    } catch (err) {
        let errors = {};
        if (err.errors) {
        for (let key in err.errors) {
            errors[key] = err.errors[key].message;
        }
        }
        const feed = await FEED.findById(req.params.id);
        res.status(400).render('feed-edit', { feed, errors });
    }
    };

    // حذف بوست
    exports.deleteFeed = async (req, res) => {
    try {
        await FEED.findByIdAndDelete(req.params.id);
        res.redirect('/feeds');
    } catch (err) {
        res.status(500).send('Server error');
    }
};
