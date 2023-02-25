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
const aHeader = document.querySelectorAll('.a-header');

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