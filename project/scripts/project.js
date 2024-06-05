// JavaScript for burger menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
});

// JavaScript for dynamic news articles
document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');
    const articles = [
        {
            title: 'New Science Lab Inaugurated',
            image: 'images/news-article.jpeg',
            content: 'Our new state-of-the-art science lab was inaugurated by the principal. It features modern equipment and facilities.'
        },
        {
            title: 'Annual Sports Day',
            image: 'images/news-article2.jpeg',
            content: 'Our annual sports day will be held on June 15th. Students are encouraged to participate and showcase their talents.'
        }
    ];

    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.content}</p>
        `;
        newsContainer.appendChild(articleElement);
    });
});
