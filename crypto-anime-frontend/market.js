// market.js

const marketSection = document.getElementById('market-section');

// 模拟市场数据
const marketData = [
  { name: 'Bitcoin', price: '$50,000', change: '+3%' },
  { name: 'Ethereum', price: '$3,000', change: '+5%' },
  { name: 'Dogecoin', price: '$0.20', change: '-2%' },
];

// 动态加载市场数据
marketData.forEach((coin) => {
  const marketCard = document.createElement('div');
  marketCard.className = 'market-card';
  marketCard.innerHTML = `
    <h2>${coin.name}</h2>
    <p>Price: ${coin.price}</p>
    <p>Change: ${coin.change}</p>
  `;
  marketSection.appendChild(marketCard);
});
