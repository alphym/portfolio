const menuBar = document.querySelector('.bar');
const subMenu = document.querySelector('.sub-menu');
const closeMenu = document.querySelector('.sub-menu .close-menu');

const mainBarContent = document.querySelector('.main-bar');
const mainContent = document.querySelector('.main-content');
const MainSection = document.querySelector('.main-main');

menuBar.addEventListener('click', () => {
  subMenu.classList.add('active');
  mainBarContent.classList.add('blur');
  mainContent.classList.add('blur');
  MainSection.classList.add('blur');
});

closeMenu.addEventListener('click', () => {
  subMenu.classList.remove('active');
  mainBarContent.classList.remove('blur');
  mainContent.classList.remove('blur');
  MainSection.classList.remove('blur');
});