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
const modalBtnSee = document.querySelector('.modal-mobile-btn.see');
const modalBtnSource = document.querySelector('.modal-mobile-btn.source');

const modalBtnDeskSee = document.querySelector('.modal-desk-btn.see');
const modalBtnDeskSource = document.querySelector('.modal-desk-btn.source');

const seeProjectMobile = document.querySelectorAll('.modal-mobile-see-pro');

// initialization project one from page
const projecOneTitle = document.querySelector('.new-pro-one');
const projecOneDesc = document.querySelector('.new-pro-desc');
const projecOneImageNew = document.querySelector('#one-pro-image-new');

// initialization project two from page
const projecTwoTitle = document.querySelector('.pro-title-two');
const projecTwoDesc = document.querySelector('.pro-desc-two');
const projTwoImage = document.querySelector('.pro-img-two');

// initialization project three from page
const projecThreeTitle = document.querySelector('.pro-title-three');
const projecThreeDesc = document.querySelector('.pro-desc-three');
const projThreeImage = document.querySelector('.pro-img-three');
// initialization project three from page
const projecfourTitle = document.querySelector('.pro-title-four');
const projecfourDesc = document.querySelector('.pro-desc-four');
const projfourImage = document.querySelector('.pro-img-four');

// desktop initialization pro-title-desk-one

//  init pro one desc
const proDeskOneTitle = document.querySelector('.pro-title-desk-one');
const proDeskOneDescr = document.querySelector('.pro-descr-desk-one');
//  init pro Two desc
const proDeskTwoTitle = document.querySelector('.pro-title-desk-Two');
const proDeskTwoDescr = document.querySelector('.pro-descr-desk-Two');

//  init pro Three desc
const proDeskThreeTitle = document.querySelector('.pro-title-desk-Three');
const proDeskThreeDescr = document.querySelector('.pro-descr-desk-Three');
//  init pro Four desc
const proDeskFourTitle = document.querySelector('.pro-title-desk-Four');
const proDeskFourDescr = document.querySelector('.pro-descr-desk-Four');

const projOneTagDesk = document.querySelector('#pro-tag-one-desk');
const projOneTagMobile = document.querySelector('#pro-tag-one-mobile');

const projtwoTagDesk = document.querySelector('#pro-tag-two-desk');
const projtwoTagMobile = document.querySelector('#pro-tag-two-mobile');

const projthreeTagDesk = document.querySelector('#pro-tag-three-desk');
const projthreeTagMobile = document.querySelector('#pro-tag-three-mobile');

const projfourTagDesk = document.querySelector('#pro-tag-four-desk');
const projfourTagMobile = document.querySelector('#pro-tag-four-mobile');

const project = {
  0: {
    title: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project_1.png',
    skills: ['html', 'css', 'js', 'bootstrap'],
    liveVersion: 'https://alphym.github.io/portfolio/',
    sourceCode: 'https://github.com/alphym/portfolio/',
  },
  1: {
    title: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project_image2.png',
    skills: ['html', 'css', 'js', 'bootstrap'],
    liveVersion: 'https://alphym.github.io/portfolio/',
    sourceCode: 'https://github.com/alphym/portfolio/',
  },
  2: {
    title: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project_image3.png',
    skills: ['html', 'cssds', 'js', 'bootstrap'],
    liveVersion: 'https://alphym.github.io/portfolio/',
    sourceCode: 'https://github.com/alphym/portfolio/',
  },
  3: {
    title: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project_image4.png',
    skills: ['html', 'css', 'js', 'bootstrap'],
    liveVersion: 'https://alphym.github.io/portfolio/',
    sourceCode: 'https://github.com/alphym/portfolio/',
  },
};

//  proj one tag

projOneTagDesk.innerHTML = `<li>${project[0].skills[0]}</li>
                        <li>${project[0].skills[1]}</li>
                        <li>${project[0].skills[2]}</li>
                        `;
projOneTagMobile.innerHTML = `<li>${project[0].skills[0]}</li>
<li>${project[0].skills[1]}</li>
<li>${project[0].skills[2]}</li>
`;

//  proj two tag

projtwoTagDesk.innerHTML = `<li>${project[1].skills[0]}</li>
                        <li>${project[1].skills[1]}</li>
                        <li>${project[1].skills[2]}</li>
                        `;
projtwoTagMobile.innerHTML = `<li>${project[1].skills[0]}</li>
<li>${project[1].skills[1]}</li>
<li>${project[1].skills[2]}</li>
`;

//  proj three tag

projthreeTagDesk.innerHTML = `<li>${project[2].skills[0]}</li>
                        <li>${project[2].skills[1]}</li>
                        <li>${project[2].skills[2]}</li>
                        `;
projthreeTagMobile.innerHTML = `<li>${project[2].skills[0]}</li>
<li>${project[2].skills[1]}</li>
<li>${project[2].skills[2]}</li>
`;

//  proj four tag

projfourTagDesk.innerHTML = `<li>${project[3].skills[0]}</li>
                        <li>${project[3].skills[1]}</li>
                        <li>${project[3].skills[2]}</li>
                        `;
projfourTagMobile.innerHTML = `<li>${project[2].skills[0]}</li>
<li>${project[3].skills[1]}</li>
<li>${project[3].skills[2]}</li>
`;

// project one
projecOneTitle.textContent = project[0].title;
projecOneDesc.textContent = project[0].description;
projecOneImageNew.src = project[0].image;
// project two
projecTwoTitle.textContent = project[1].title;
projecTwoDesc.textContent = project[1].description;
projTwoImage.src = project[1].image;
// project three
projecThreeTitle.textContent = project[2].title;
projecThreeDesc.textContent = project[2].description;
projThreeImage.src = project[2].image;
// project four
projecfourTitle.textContent = project[3].title;
projecfourDesc.textContent = project[3].description;
projfourImage.src = project[3].image;

//  project ===== mobile =============
// project one
proDeskOneTitle.textContent = project[0].title;
proDeskOneDescr.textContent = project[0].description;

// project two
proDeskTwoTitle.textContent = project[1].title;
proDeskTwoDescr.textContent = project[1].description;

// project three
proDeskThreeTitle.textContent = project[2].title;
proDeskThreeDescr.textContent = project[2].description;

// project four
proDeskFourTitle.textContent = project[3].title;
proDeskFourDescr.textContent = project[3].description;

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
    const btnSource = project[i].sourceCode;
    const btnSee = project[i].liveVersion;
    modalBtnSee.href = btnSource;
    modalBtnSource.href = btnSee;
    modalBtnDeskSee.href = btnSee;
    modalBtnDeskSource.href = btnSource;

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
    const btnSource = project[i].sourceCode;
    const btnSee = project[i].liveVersion;
    modalBtnSee.href = btnSource;
    modalBtnSource.href = btnSee;
    modalBtnDeskSee.href = btnSee;
    modalBtnDeskSource.href = btnSource;
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

// load data dynamically
