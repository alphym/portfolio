const menuBar = document.querySelector('.bar');
const subMenu = document.querySelector('.sub-menu');
const closeMenu = document.querySelector('.sub-menu .close-menu');
const mainBarContent = document.querySelector('.main-bar');
const mainContent = document.querySelector('.main-content');
const MainSection = document.querySelector('.main-main');
const closeModal = document.querySelector('#close-modal');
const containerModal = document.querySelector('.container-modal');
const modalTitle = document.querySelector('.modal-title h3');
const modalDescription = document.querySelector('.bottom-modal-desktop p');
const modalDescriptionMob = document.querySelector('.bottom-modal-desc p');
const modalImage = document.querySelector('.moda-image-all');
const allProjectContainer = document.getElementById('all-project-container');
const BtnSeeliveDesck = document.querySelector('.modal-desk-btn.see-live');
const BtnSeeSourceDesck = document.querySelector('.modal-desk-btn.see-source');
const BtnSeeliveMobile = document.querySelector('.modal-mobile-btn.see-live');
const BtnSeeSourceMobile = document.querySelector('.modal-mobile-btn.see-source');
const project = {
  0: {
    title: 'Tonic',
    description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project_1.png',
    liveVersion: 'https://alphym.github.io/portfolio/',
    skills: ['html', 'css', 'js'],
    sourceCode: 'https://github.com/alphym/portfolio',
  },
  1: {
    title: 'Multi-Post Stories',
    description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project_image2.png',
    liveVersion: 'https://alphym.github.io/portfolio/',
    sourceCode: 'https://github.com/alphym/portfolio',
  },
  2: {
    title: 'Tonic',
    description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project_image3.png',
    liveVersion: 'https://alphym.github.io/portfolio/',
    sourceCode: 'https://github.com/alphym/portfolio',
  },
  3: {
    title: 'Multi-Post Stories',
    description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/project_image4.png',
    liveVersion: 'https://alphym.github.io/portfolio/',
    sourceCode: 'https://github.com/alphym/portfolio',
  },
};
let html = '';
const keysPro = Object.keys(project);
for (let projectIdList = 0; projectIdList < keysPro.length; projectIdList += 1) {
  html += `<div class="project">
    <div class="project-image">
        <img src="${project[projectIdList].image}" alt="My Tonic Project Image">
    </div>
    <div class="project-title pro-title-one">
        <h2>${project[projectIdList].title}</h2>
    </div>
    <div class="projectsub-title pro-sub-one">
        <ul class="sub-title-o">
            <li class="one">Canopy</li>
            <li>Back end dev</li>
            <li>2015</li>
        </ul>
    </div>
    <div class="project-description pro-desc-one">
        <p>${project[projectIdList].description}</p>
    </div>
    <div class="project-tag pro-tag-one">
          <ul class="pro-tag-o">
          <li>html</li>
          <li>css</li>
          <li>javascript</li>
        </ul>
    </div>
    <div class="project-button pro-btn-one">
        <button class="modal-mobile-see-pro">See Project</button>
    </div>
    <div id="project-detail-all">
        <div class="project-title">
            <h2>${project[projectIdList].title}</h2>
        </div>
        <div class="projectsub-title">
            <ul>
                <li class="one">Canopy</li>
                <li>Back end dev</li>
                <li>2015</li>
            </ul>
        </div>
        <div class="project-description">
            <p>${project[projectIdList].description}</p>
        </div>
        <div class="project-tag">
            <ul>
                <li>html</li>
                <li>css</li>
                <li>javascript</li>
            </ul>
        </div>
        <div class="project-button">
            <button class="see-project-btn">See Project</button>
        </div>
    </div>
  </div>`;
}
allProjectContainer.innerHTML = html;
const seeProjectMobile = document.querySelectorAll('.modal-mobile-see-pro');
const seeProject = document.querySelectorAll('.see-project-btn');
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
    BtnSeeliveDesck.href = project[i].liveVersion;
    BtnSeeSourceDesck.href = project[i].sourceCode;
    BtnSeeliveMobile.href = project[i].liveVersion;
    BtnSeeSourceMobile.href = project[i].sourceCode;
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
    BtnSeeliveDesck.href = project[i].liveVersion;
    BtnSeeSourceDesck.href = project[i].sourceCode;
    BtnSeeliveMobile.href = project[i].liveVersion;
    BtnSeeSourceMobile.href = project[i].sourceCode;
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