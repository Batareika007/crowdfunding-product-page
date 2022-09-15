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

let modalNoReward = document.querySelector('.modal__no-rew');
let modalBamboo = document.querySelector('.modal__bamboo');
let modalBlack = document.querySelector('.modal__black');
let modalMahogany = document.querySelector('.modal__mahogany');

let blockSec = document.querySelectorAll('.block__inner');
// todo add '.modal-active' to active modal block

modalNoReward.addEventListener('click', (e) => {
    let target = e.target.classList.value;
    console.log(target)
    if (target === 'modal__rad' || target === 'block__header') {
        blockSec.forEach((e) => e.classList.remove('modal-active'))
        modalNoReward.classList.add('modal-active')
    }
})
modalBamboo.addEventListener('click', (e) => {
    let target = e.target.classList.value;
    console.log(target)
    if (target === 'modal__rad' || target === 'block__header') {
        blockSec.forEach((e) => e.classList.remove('modal-active'))
        modalNoReward.classList.add('modal-active')
    }
})