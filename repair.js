const icons = document.querySelector('.icons')


const aboutLinks = document.querySelector(".fa-chevron-down")
const aboutLinks2 = document.querySelector(".fa-chevron-right")
const ul = document.querySelector(".abt-link")
console.log(aboutLinks)

aboutLinks.addEventListener('click', () => {
    ul.classList.add('open')
    aboutLinks.classList.add('hide')
    aboutLinks2.classList.add('hide')
})
aboutLinks2.addEventListener('click', () => {
    ul.classList.remove('open')
    aboutLinks2.classList.remove('hide')
    aboutLinks.classList.remove('hide')
})