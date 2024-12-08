const express = require('express');
const News = require('../models/News');
const Parser = require('rss-parser');
const router = express.Router();

const parser = new Parser();

// RSS 源定义
const rssFeeds = [
  'https://cointelegraph.com/rss',
  'https://cryptoslate.com/feed/',
];

// 定义新闻抓取逻辑
const fetchNews = async () => {
  try {
    for (const feedUrl of rssFeeds) {
      const feed = await parser.parseURL(feedUrl);
      feed.items.forEach(async (item) => {
        const exists = await News.findOne({ url: item.link });
        if (!exists) {
          await News.create({
            title: item.title,
            summary: item.contentSnippet,
            url: item.link,
            category: item.categories ? item.categories[0] : 'General',
            timestamp: item.isoDate,
          });
        }
      });
    }
    console.log('News fetched successfully!');
  } catch (err) {
    console.error('Failed to fetch news:', err);
  }
};

// 定义 API 路由
router.get('/', async (req, res) => {
  try {
    const news = await News.find().sort({ timestamp: -1 }).limit(20);
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

module.exports = { router, fetchNews }; // 导出 router 和 fetchNews
