const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { fetchNews } = require('./routes/news');

dotenv.config(); // 加载环境变量

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected');
    await fetchNews(); // 手动调用新闻抓取
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
