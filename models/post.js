var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  title: String,
  category: String,
  createdAt: Date,
  updatedAt: Date
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;