const form = document.querySelector('.form');
const campoName = document.getElementById('name')
const campoEmail = document.getElementById('email')
const campoMsg = document.getElementById('msg')
const submit = document.querySelector('.form__input-submit');
const linkEmail = document.getElementById('linkEmail')
const errorP = document.querySelector('.contacto__form-container p');


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const objValidacion = {
    name: false,
    email: false,
}


campoName.addEventListener('keyup',()=>{
    if(expresiones.nombre.test(campoName.value)) {
        objValidacion.name = true;
    } else {
        objValidacion.name = false;
    }
})
campoEmail.addEventListener('keyup',()=>{
    if(expresiones.correo.test(campoEmail.value)) {
        objValidacion.email = true;
    } else {
        objValidacion.email = false;
    }
})


submit.addEventListener('click',(e)=>{
    e.preventDefault()
    if(objValidacion.name === true && objValidacion.email === true && campoMsg.value !== '') {
        let name = campoName.value;
        let email = campoEmail.value;
        let msg = campoMsg.value;
        linkEmail.setAttribute('href', `mailto:mateopautassodev@gmail.com?subject=Soy%20${name}%20y%20lo%20contacto%20desde%20su%20sitio%20web%20-%20Correo:%20${email}&body=${msg}`);
        linkEmail.click();
        errorP.innerHTML = ''
    } else {
        errorP.innerHTML = 'Campos incompletos!'
    }
})