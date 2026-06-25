document.addEventListener('DOMContentLoaded', function () {
        const burger = document.querySelector('.burger'),
              logo = document.querySelector('.logo'),
              closeBtn = document.querySelector('.close-menu'),
              nav = document.querySelector('.nav'),
              list = document.querySelector('.nav__list');
        burger.addEventListener('click', () => tapBurger(burger, nav, list, closeBtn, logo));
        closeBtn.addEventListener('click', () => tapChrist(burger, nav, closeBtn, logo));
        
})

function tapBurger(btn, list, ul, closeBtn, pic) {
        btn.style.display = 'none';
        list.className = 'flex';
        closeBtn.classList.add('max-sm:flex');
        pic.classList.add('max-sm:hidden');
}

function tapChrist(btn, list, closeBtn, pic) {
        btn.style.display = 'flex';
        list.className = 'hidden';
        closeBtn.classList.remove('max-sm:flex');
        pic.classList.remove('max-sm:hidden');
}