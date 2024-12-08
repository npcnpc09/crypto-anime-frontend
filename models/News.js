const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true }, // 新闻标题
  summary: String,                         // 新闻摘要
  url: { type: String, required: true },   // 新闻链接
  category: String,                        // 新闻类别
  timestamp: { type: Date, default: Date.now }, // 发布时间
});

module.exports = mongoose.model('News', newsSchema);
