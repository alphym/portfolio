const menuBar = document.querySelector('.bar');
const subMenu = document.querySelector('.sub-menu');
const closeMenu = document.querySelector('.sub-menu .close-menu');

const mainBarContent = document.querySelector('.main-bar');
const mainContent = document.querySelector('.main-content');
const MainSection = document.querySelector('.main-main');

const closeModal = document.querySelector('#close-modal');
const seeProject = document.querySelectorAll('.see-project-btn');
const containerModal = document.querySelector('.container-modal');
const modalTitle = document.querySelector('.modal-title h3');
const modalDescription = document.querySelector('.bottom-modal-desktop p');
const modalDescriptionMob = document.querySelector('.bottom-modal-desc p');
const modalImage = document.querySelector('.moda-image-all');

const seeProjectMobile = document.querySelectorAll('.modal-mobile-see-pro');

const project = {
  0: {
    title: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project_1.png',
  },
  1: {
    title: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project_image2.png',
  },
  2: {
    title: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project_image3.png',
  },
  3: {
    title: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project_image4.png',
  },
};

closeModal.addEventListener('click', () => {
  containerModal.classList.remove('active');
  mainBarContent.classList.remove('blul-content');
  mainContent.classList.remove('blul-content');
  MainSection.classList.remove('blul-content');
});

for (let i = 0; i < seeProject.length; i += 1) {
  seeProject[i].addEventListener('click', () => {
    const projectImage = project[i].image;
    containerModal.classList.add('active');
    modalTitle.textContent = project[i].title;
    modalDescription.textContent = project[i].description;
    modalImage.src = projectImage;
    mainBarContent.classList.add('blul-content');
    mainContent.classList.add('blul-content');
    MainSection.classList.add('blul-content');
  });
}
for (let i = 0; i < seeProjectMobile.length; i += 1) {
  seeProjectMobile[i].addEventListener('click', () => {
    const projectImage = project[i].image;
    containerModal.classList.add('active');
    modalTitle.textContent = project[i].title;
    modalDescriptionMob.textContent = project[i].description;
    modalImage.src = projectImage;
    mainBarContent.classList.add('blul-content');
    mainContent.classList.add('blul-content');
    MainSection.classList.add('blul-content');
  });
}

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