const body = document.querySelector('body');
const hamburgerMenu = document.querySelector('.nav__hamburger-btn');
const hamburgerOpen = document.querySelector('.nav__hamburger-btn_open')
const hamburgerClose = document.querySelector('.nav__hamburger-btn_close')
const navMenu = document.querySelector('.nav__inner')

const closeNavMenu = () => {
    hamburgerMenu.classList.remove('active');
    navMenu.classList.add('active');
    hamburgerOpen.classList.remove('active');
    hamburgerClose.classList.add('active');
    body.classList.add('dark-bg');
}
const openNavMenu = () => {
    hamburgerMenu.classList.add('active');
    navMenu.classList.remove('active');
    hamburgerOpen.classList.add('active');
    hamburgerClose.classList.remove('active');
    body.classList.remove('dark-bg');
}


hamburgerMenu.addEventListener("click", () => {
    if (hamburgerMenu.classList.contains('active')) {
        closeNavMenu();
        return
    }
    openNavMenu();
})


const bookmark = document.querySelector('#bookmark');

bookmark.addEventListener('click', (e) => {
    if (document.querySelector('#bookmark span').textContent === "Bookmarked") {
        return
    }
    document.querySelector('#bookmark span').textContent = "Bookmarked";
    bookmark.classList.add('active');
    alert('press "ctrl" + "D" for bookamr the page');
})


const popupBtn = document.querySelector('.popup__btn');
const popupBlock = document.querySelector('.popup')
popupBtn.addEventListener('click', () => {
    popupBlock.classList.remove('active');
    body.classList.remove('dark-bg');
});