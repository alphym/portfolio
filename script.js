const menuBar = document.querySelector('.bar');
const closeMenu = document.querySelector('.close-menu');
const subMenu = document.querySelector('.sub-menu');
const mainBar = document.querySelector('.main-bar');

menuBar.addEventListener('click', function (){
    menuBar.classList.add('no-active');
    closeMenu.classList.remove('no-active');
    subMenu.classList.add('active');
    mainBar.style.backgroundColor = '#6070FF';
    mainBar.style.position = 'fixed';
    mainBar.style.top = '0px';
    mainBar.style.zIndex = '99';
});

closeMenu.addEventListener('click', function () {
    closeMenu.classList.add('no-active');
    menuBar.classList.remove('no-active');
    subMenu.classList.remove('active');
    mainBar.style.backgroundColor = 'white';
    mainBar.style.position = 'static';
    mainBar.style.zIndex = '0';

});





