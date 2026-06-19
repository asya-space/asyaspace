'use strict'
document.addEventListener('DOMContentLoaded', function () {
    const codePop = document.querySelector('#code1'),
          openWindow = document.querySelector('.code-btn1'),
          closeWindow = document.querySelector('.close-code1');
    openWindow.addEventListener('click', () => {
        codePop.showModal();
    })
                    
    closeWindow.addEventListener('click', () => {
        codePop.close();
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const codePop = document.querySelector('#code2'),
          openWindow = document.querySelector('.code-btn2'),
          closeWindow = document.querySelector('.close-code2');
    openWindow.addEventListener('click', () => {
        codePop.showModal();
    })
                    
    closeWindow.addEventListener('click', () => {
        codePop.close();
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger'),
          logo = document.querySelector('.logo'),
          closeMenu = document.querySelector('.close-menu'),
          menu = document.querySelector('.nav');
    burger.addEventListener('click', () => {
        burger.classList.add('media-sweep:hidden');
        logo.classList.add('hidden');
        closeMenu.classList.add('media-sweep:block');
        menu.classList.remove('media-sweep:hidden');
    })
                    
    closeMenu.addEventListener('click', () => {
        menu.classList.add('media-sweep:hidden');
        closeMenu.classList.remove('media-sweep:block');
        logo.classList.remove('hidden');
        burger.classList.remove('media-sweep:hidden');
    })
})