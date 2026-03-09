const express = require('express');
const router = express.Router();
const feedController = require('../controllers/feedController');

// عرض كل البوستات
router.get('/', feedController.getAllFeeds);

// صفحة إضافة بوست جديد
router.get('/new', feedController.getNewFeedForm);

// إنشاء بوست جديد
router.post('/', feedController.createFeed);

// عرض بوست واحد
router.get('/:id', feedController.getFeedById);

// صفحة تعديل بوست
router.get('/:id/edit', feedController.getEditFeedForm);

// تحديث بوست
router.put('/:id', feedController.updateFeed);

// حذف بوست
router.delete('/:id', feedController.deleteFeed);

module.exports = router;
