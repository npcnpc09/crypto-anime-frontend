const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const { router: newsRoutes, fetchNews } = require('./routes/news'); // 引入 fetchNews

dotenv.config(); // 加载环境变量

const app = express(); // 初始化 Express 应用

// 中间件
app.use(cors());
app.use(express.json());

// 连接 MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


fetchNews();

// 路由加载

app.use('/api/news', newsRoutes);


// 启动服务器
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const cors = require('cors');
app.use(cors());

