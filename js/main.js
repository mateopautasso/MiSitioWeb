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


// Scroll a section contacto
const aContacto = document.getElementById('contacto-section')
const aSkills = document.getElementById('skills-section')
const aPracticas = document.getElementById('practicas-section')
const aProyectos = document.getElementById('proyectos-section')
const aHeader = document.querySelectorAll('.a-header');

aContacto.addEventListener('click', (e)=>{
    e.preventDefault()
    scroll(0,2250)
})

aHeader.forEach((a)=>{
    a.addEventListener('click',(e)=>{
        e.preventDefault();
        let aClickeada = e.target;
        switch(aClickeada.id) {
            case "skills-section":
                console.log('stack');
                scroll(0,780);
                break;
            case "practicas-section":
                console.log('Practicas');
                scroll(0,1520);
                break;
            case "proyectos-section":
                console.log('Practicas');
                scroll(0,0);
                // Falta la seccion
                break;
            case "sobremi-section":
                console.log('Practicas');
                scroll(0,0);
                // Falta la seccion
                break;
            case "contacto-section":    
                scroll(0,2250);
                break;
            default:
                console.log('Error')
        }
    })
})