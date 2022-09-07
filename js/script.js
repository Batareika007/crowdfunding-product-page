let hamburger = document.querySelector('.hamburger');
let navList = document.querySelector('.nav-list');
let bookmarkBtn = document.querySelector('.block__btn2');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navList.classList.toggle('is-active');
})

bookmarkBtn.addEventListener('click', () => {
    bookmarkBtn.classList.add('active-btn');
    document.querySelector('.button-text').innerHTML = "Bookmarked"
})