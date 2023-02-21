const styleDocument = document.documentElement.style;
const btnDarkMode = document.querySelector('.nav-right .fa-moon');
const lineDarkMode = document.querySelector('.darkmode-line');
const iRedes = document.querySelectorAll('.i-redes');

let darkModeActive = false

btnDarkMode.addEventListener('click', ()=>{
    if(!darkModeActive){
        styleDocument.setProperty('--black', '#fff')
        styleDocument.setProperty('--grey', '#FBFBFB')
        styleDocument.setProperty('--soft-grey', 'rgb(43 48 54)')
        styleDocument.setProperty('--white', '#181f24')

        btnDarkMode.classList.add('btnDarkModeActive')
        lineDarkMode.classList.add('darkmode-line-active')

        document.querySelector('.profile-image').classList.add('profile-image-transicion')
        const skillsPCard = document.querySelectorAll('.skills__p-card')
        skillsPCard.forEach((card)=>{
            card.style.color = "#8d9499";
        })
        document.querySelector('.section-habilidades__p').style.color = "rgb(179 187 193)"

        iRedes[0].setAttribute('src','./assets/icons/icons8-instagram-48-white.png')
        iRedes[1].setAttribute('src','./assets/icons/icons8-github-48-white.png')
        iRedes[2].setAttribute('src','./assets/icons/icons8-linkedin-48-white.png')
        iRedes[3].setAttribute('src','./assets/icons/icons8-instagram-48-white.png')
        iRedes[4].setAttribute('src','./assets/icons/icons8-github-48-white.png')
        iRedes[5].setAttribute('src','./assets/icons/icons8-linkedin-48-white.png')
        iRedes[6].setAttribute('src','./assets/icons/icons8-instagram-48-white.png')
        iRedes[7].setAttribute('src','./assets/icons/icons8-github-48-white.png')
        iRedes[8].setAttribute('src','./assets/icons/icons8-linkedin-48-white.png')

        darkModeActive = true;
    } else {
        styleDocument.setProperty('--black', '#181f24')
        styleDocument.setProperty('--grey', '#656D72')
        styleDocument.setProperty('--soft-grey', '#f0f0f0')
        styleDocument.setProperty('--grey-lighter', '#FBFBFB')
        styleDocument.setProperty('--white', '#fcf9ff')

        btnDarkMode.classList.remove('btnDarkModeActive')
        lineDarkMode.classList.remove('darkmode-line-active')

        const skillsPCard = document.querySelectorAll('.skills__p-card')
        skillsPCard.forEach((card)=>{
            card.style.color = "var(--grey)";
        })
        document.querySelector('.section-habilidades__p').style.color = "var(--grey)";

        iRedes[0].setAttribute('src','./assets/icons/icons8-instagram-48.png')
        iRedes[1].setAttribute('src','./assets/icons/icons8-github-48.png')
        iRedes[2].setAttribute('src','./assets/icons/icons8-linkedin-48.png')
        iRedes[3].setAttribute('src','./assets/icons/icons8-instagram-48.png')
        iRedes[4].setAttribute('src','./assets/icons/icons8-github-48.png')
        iRedes[5].setAttribute('src','./assets/icons/icons8-linkedin-48.png')
        iRedes[6].setAttribute('src','./assets/icons/icons8-instagram-48.png')
        iRedes[7].setAttribute('src','./assets/icons/icons8-github-48.png')
        iRedes[8].setAttribute('src','./assets/icons/icons8-linkedin-48.png')

        document.querySelector('.profile-image').classList.remove('profile-image-transicion')

        darkModeActive = false
    }
})