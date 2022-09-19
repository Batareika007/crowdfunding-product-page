const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const bookmarkBtn = document.querySelector('.block__btn2');
const form = document.querySelectorAll('.modal__form-container');
// modal vars
const modalNoReward = document.querySelector('.modal__no-reward');
const modalBamboo = document.querySelector('.modal__bamboo');
const modalBlack = document.querySelector('.modal__black');
const modalMahogany = document.querySelector('.modal__mahogany');
const allModals = document.querySelectorAll('.modal__inner')

// open modal forms buttons 
const price25 = document.getElementById('price25');
const price75 = document.getElementById('price75');
const priceFree = document.getElementById('priceFree-btn');

// thanku modal 
const thankuModal = document.getElementById('thanku');
const thankuModalBtn = document.getElementById('thanku-btn');

// counts 
const bambooStandCount = document.querySelectorAll('.bamboo-stand-count');
const blackEditionCount = document.querySelectorAll('.black-edition-count');
const totalCout = document.querySelector('.number__target')
const totalBacker = document.querySelector('.backers')

// remove black Body Cover
const removeBodyBlack = () => {
    document.querySelector('body').classList.remove('active');
}

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

// close Modal Function
const closeModal = () => {
    document.querySelector('.modal').classList.remove('active');
    removeBodyBlack()
    allModals.forEach(element => {
        element.classList.remove('active')
    });
}

// close modal 
document.querySelector('.modal__close img').addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    navList.classList.remove('is-active');
    closeModal()
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

// check which module should be activated
allModals.forEach((e) => {
    e.addEventListener('click', (e) => {
        if (e.composedPath().includes(modalNoReward)) {
            // console.log('no reward')
            openModalForm(modalNoReward)
        } else if (e.composedPath().includes(modalBamboo)) {
            // console.log('25$ or more')
            openModalForm(modalBamboo)
        } else if (e.composedPath().includes(modalBlack)) {
            // console.log('75$ or more')
            openModalForm(modalBlack)
        }
    })
})


// check which modal form open in once
document.getElementById('bamboo-btn').onclick = () => {
    openModalFn()
    openModalForm(modalBamboo)
}

// check which modal form open in once
document.getElementById('black-btn').onclick = () => {
    openModalFn()
    openModalForm(modalBlack)
}


form.forEach((element) => {
    element.setAttribute("onsubmit", "alertValue(event)");
    alertValue = (e) => {
        e.preventDefault();
    }
})

// triger form btn 
// bamboo stand
document.getElementById('price25-btn').onclick = () => {
    if (price25.value >= 25) {
        addToTotalCount(price25.value);
        subtractionCounts(bambooStandCount);
        closeModal();
        openThanku();
        addBacket();
    }
}
// black edition
document.getElementById('price75-btn').onclick = () => {
    if (price75.value >= 75) {
        addToTotalCount(price75.value);
        subtractionCounts(blackEditionCount);
        closeModal();
        openThanku();
        addBacket();
    }
}
// free
document.getElementById('priceFree-btn').onclick = () => {
    closeModal();
    openThanku();
    addBacket();
}

// open thanku modal
const openThanku = () => {
    document.querySelector('body').classList.add('active');
    thankuModal.classList.add('active');
}

// close thanku modal
thankuModalBtn.addEventListener('click', () => {
    removeBodyBlack()
    thankuModal.classList.remove('active');
})


// add backet function
const addBacket = () => {
    let n = totalBacker.innerHTML;
    n = n.replace(/\,/g, '');
    n = parseInt(n, 10);
    n++;
    totalBacker.innerHTML = n.toLocaleString("en-US");
}

// add to total count
const addToTotalCount = (count) => {
    let n = totalCout.innerHTML;
    n = n.replace(/\,/g, '');
    n = parseInt(n, 10);
    n += Number(count);
    totalCout.innerHTML = n.toLocaleString("en-US");
}

// subtraction count 
const subtractionCounts = (count) => {
    count.forEach((e) => {
        e.innerHTML--
    })
}