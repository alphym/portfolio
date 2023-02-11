const menuBar = document.querySelector('.bar');
const subMenu = document.querySelector('.sub-menu');
const closeMenu = document.querySelector('.sub-menu .close-menu');
const mainBarContent = document.querySelector('.main-bar');
const mainContent = document.querySelector('.main-content');
const MainSection = document.querySelector('.main-main');

const allProjectContainer = document.getElementById('all-project-container');

const containerModalId = document.getElementById('containerModalId');

let finalContainerModal = '';

const containerModalCont = `<div class="single-modal">
<div class="top-modal">
    <div class="modal-title">
        <h3>Tonic</h3>
        <img id="close-modal" src="./images/close-btn.png" style="height: 12px; width: 12px;cursor: pointer;"  alt="">
    </div>
    <ul>
        <li><a href="#">Canopy</a></li>
        <li class="tag-dot"><a href="#">Back end dev</a></li>
        <li class="tag-dot"><a href="#">2015</a></li>
    </ul>
    <img class="moda-image-all" src="images/modalpop.png"  alt="">
</div>
<div class="bottom-modal">
    <div class="bottom-modal-desc">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
            leap into electronic typesetting, remaining essent</p>
        <ul>
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
        </ul>
    </div>
    
    <div class="modal-btn-view">
        <a class="modal-mobile-btn see-live">See live <img src="./images/modal-live.png" alt="" style="height: 18px; width: 18px;"> </a>
        <a class="modal-mobile-btn see-source"> See source<img src="./images/modal-source.png" alt="" style="height: 18px; width: 18px;"></a>
    </div>
</div>
<div class="bottom-modal-desktop">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
        leap into electronic typesetting, remaining essent</p>
        <div class="modal-desktop-right">
            <ul>
                <li><a href="#">html</a></li>
                <li><a href="#">css</a></li>
                <li><a href="#">javascript</a></li>
            </ul>
            <ul>
                <li><a href="#">html</a></li>
                <li><a href="#">css</a></li>
                <li><a href="#">javascript</a></li>
            </ul>
            <div class="modal-btn-desk-view">
                <a class="modal-desk-btn see-live">See live <img src="./images/modal-live.png" alt="" style="height: 18px; width: 18px;"> </a>
                <a class="modal-desk-btn see-source"> See source<img src="./images/modal-source.png" alt="" style="height: 18px; width: 18px;"></a>
            </div>
        </div>
</div>
</div>`;
finalContainerModal += containerModalCont;
containerModalId.innerHTML = finalContainerModal;
const closeModal = document.querySelector('#close-modal');
const containerModal = document.querySelector('.container-modal');
const modalTitle = document.querySelector('.modal-title h3');
const modalDescription = document.querySelector('.bottom-modal-desktop p');
const modalDescriptionMob = document.querySelector('.bottom-modal-desc p');
const modalImage = document.querySelector('.moda-image-all');
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