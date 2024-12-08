// 获取新闻显示区域
const newsSection = document.getElementById('news-section');

// 模拟加载器
const loader = document.createElement('div');
loader.className = 'loader';
loader.innerHTML = 'Loading...';
newsSection.appendChild(loader);

// 搜索框功能（动态创建）
const searchBar = document.createElement('input');
searchBar.id = 'search-bar';
searchBar.type = 'text';
searchBar.placeholder = 'Search News...';
searchBar.style.marginBottom = '20px';
newsSection.before(searchBar);

// 从后端动态获取新闻数据
async function fetchNews() {
  try {
    const response = await fetch('http://localhost:5000/api/news');
    const newsData = await response.json();
    
    // 移除加载器
    loader.remove();

    // 动态渲染新闻
    renderNews(newsData);

    // 搜索功能
    searchBar.addEventListener('input', () => filterNews(newsData, searchBar.value));
  } catch (error) {
    console.error('Error fetching news:', error);
    loader.innerHTML = 'Failed to load news. Please try again.';
  }
}

// 渲染新闻到页面
function renderNews(newsData) {
  newsSection.innerHTML = ''; // 清空当前内容
  newsData.forEach((news) => {
    const newsCard = document.createElement('div');
    newsCard.className = 'news-card';
    newsCard.innerHTML = `
      <h2>${news.title}</h2>
      <p>${news.summary}</p>
      <a href="${news.url}" target="_blank">Read More</a>
    `;
    newsSection.appendChild(newsCard);
  });
}

// 搜索过滤新闻
function filterNews(newsData, query) {
  const filteredData = newsData.filter((news) => 
    news.title.toLowerCase().includes(query.toLowerCase())
  );
  renderNews(filteredData);
}

// 调用函数加载新闻
fetchNews();
