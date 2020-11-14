const { Schema } = require('mongoose')

const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
  categoryId: String,
  categoryName: String,
  createdAt: String,
  updatedAt: String,
  id: String,
  likeCount: Number,
  originalUrl: String,
  title: String,
  type: String,
  commentsCount: Number,
  hot: Boolean,
  hotIndex: Number,
  screenshot: String,
  rankIndex: Number,
  tags: [String],
  user: String,
})

module.exports = postSchema
