// script.js

// 示例：动态加载新闻内容
const newsSection = document.getElementById('news-section');

// 模拟新闻数据
const newsData = [
  { title: 'Ethereum Upgrades', summary: 'Ethereum 2.0 is live!', url: '#' },
  { title: 'Dogecoin Surges', summary: 'Dogecoin hits a new high.', url: '#' },
  { title: 'Crypto Regulations', summary: 'New laws shake the market.', url: '#' }
];

// 动态添加新闻
newsData.forEach(news => {
  const newsCard = document.createElement('div');
  newsCard.className = 'news-card';
  newsCard.innerHTML = `
    <h2>${news.title}</h2>
    <p>${news.summary}</p>
    <a href="${news.url}" target="_blank">Read More</a>
  `;
  newsSection.appendChild(newsCard);
});
