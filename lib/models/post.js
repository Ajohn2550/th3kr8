const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    required: 'You must provide post content'
  }
});

exports = module.exports = mongoose.model('Post', postSchema);
