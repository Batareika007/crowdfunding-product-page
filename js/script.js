const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const bookmarkBtn = document.querySelector('.block__btn2');

// modal vars
const modalNoReward = document.querySelector('.modal__no-reward');
const modalBamboo = document.querySelector('.modal__bamboo');
const modalBlack = document.querySelector('.modal__black');
const modalMahogany = document.querySelector('.modal__mahogany');
const allModals = document.querySelectorAll('.modal__inner')

// thanku 
const thankuModal = document.getElementById('thanku');
const thankuModalBtn = document.getElementById('thanku-btn');

// remove blackBodyCover
const removeBodyBlack = () => {
    document.querySelector('body').classList.remove('active');
}

thankuModalBtn.addEventListener('click', () => {
    removeBodyBlack()
    thankuModal.classList.remove('active');
})

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

// close modal 
document.querySelector('.modal__close img').addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    navList.classList.remove('is-active');
    document.querySelector('.modal').classList.remove('active');
    removeBodyBlack()
    allModals.forEach(element => {
        element.classList.remove('active')
    });
})

// open empty modal
const openModal = document.getElementById('openModal');
const openModalFn = () => {
    document.querySelector('.modal').classList.add('active');
    document.querySelector('body').classList.add('active');
}
openModal.addEventListener('click', () => {
    openModalFn()
})


// function to open form modal
const openModalForm = (e) => {
    document.querySelectorAll('.modal__inner').forEach(element => {
        element.classList.remove('active')
    });
    e.classList.add('active')

}

allModals.forEach((e) => {
    e.addEventListener('click', (e) => {
        if (e.composedPath().includes(modalNoReward)) {
            console.log('no reward')
            openModalForm(modalNoReward)
        } else if (e.composedPath().includes(modalBamboo)) {
            console.log('25$ or more')
            openModalForm(modalBamboo)
        } else if (e.composedPath().includes(modalBlack)) {
            console.log('75$ or more')
            openModalForm(modalBlack)
        }
    })
})

document.getElementById('bamboo-btn').addEventListener('click', () => {
    openModalFn()
    openModalForm(modalBamboo)
})
document.getElementById('black-btn').addEventListener('click', () => {
    openModalFn()
    openModalForm(modalBlack)
})