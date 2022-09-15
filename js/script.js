const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const bookmarkBtn = document.querySelector('.block__btn2');

// hamburger menu close and open
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navList.classList.toggle('is-active');
})

// bookmarked btn
bookmarkBtn.addEventListener('click', () => {
    bookmarkBtn.classList.add('active-btn');
    document.querySelector('.button-text').innerHTML = "Bookmarked"
})

const modalNoReward = document.querySelector('.modal__no-rew');
const modalBamboo = document.querySelector('.modal__bamboo');
const modalBlack = document.querySelector('.modal__black');
const modalMahogany = document.querySelector('.modal__mahogany');
const blockSec = document.querySelectorAll('.block__inner');


// close modal 
document.querySelector('.modal__close img').addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    navList.classList.remove('is-active');
    document.querySelector('.modal').classList.remove('active');
    document.querySelector('body').classList.remove('active');
})

// open empty modal
document.getElementById('openModal').addEventListener('click', () => {
    document.querySelector('.modal').classList.add('active');
    document.querySelector('body').classList.add('active');

})

// modal free open form
modalNoReward.addEventListener('click', (e) => {
    let target = e.target.classList.value;
    console.log(target)
    if (target === 'modal__radio' || target === 'modal__header' || target === 'modal-rad' || target === 'block__price' || target === 'block__header') {
        blockSec.forEach((e) => e.classList.remove('modal-active'));
        modalNoReward.classList.add('modal-active');
    }
})

// modal 25$ open form
modalBamboo.addEventListener('click', (e) => {
    let target = e.target.classList.value;
    console.log(target)
    if (target === 'modal__radio' || target === 'modal__header' || target === 'modal-rad' || target === 'block__price' || target === 'block__header') {
        blockSec.forEach((e) => e.classList.remove('modal-active'))
        modalBamboo.classList.add('modal-active')
    }


})


// modal 75$ open form
modalBlack.addEventListener('click', (e) => {
    let target = e.target.classList.value;
    console.log(target)
    if (target === 'modal__radio' || target === 'modal__header' || target === 'modal-rad' || target === 'block__price' || target === 'block__header') {
        blockSec.forEach((e) => e.classList.remove('modal-active'))
        modalBlack.classList.add('modal-active')
    }
})