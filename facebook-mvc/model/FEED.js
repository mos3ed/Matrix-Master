const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      maxlength: [15, 'Name must be at most 15 characters']
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      maxlength: [40, 'Message must be at most 40 characters']
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { collection: 'feeds' }
);

const FEED = mongoose.model('FEED', feedSchema);

module.exports = FEED;
