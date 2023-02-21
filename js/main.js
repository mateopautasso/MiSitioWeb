// Load sitio
const header = document.querySelector('header');

window.addEventListener('load', ()=>{
    header.classList.add("header-active")
})
window.addEventListener('scroll', ()=>{
    if(scrollY >= 20) {
        header.classList.add("header-inactive")
    } else {
        header.classList.remove("header-inactive")
    }
})
