const cardContainer = document.querySelector('.practicas__card-container')
const btnLeft = document.querySelector('.practicas__btn-move--left')
const btnRight = document.querySelector('.practicas__btn-move--right')

btnLeft.addEventListener('click', ()=>{
    cardContainer.scrollLeft -= 520
})
btnRight.addEventListener('click', ()=>{
    cardContainer.scrollLeft += 520 
})

class CardProyectos {
    constructor (url,title,tech,link) {
        this.url = url;
        this.title = title;
        this.tech = tech;
        this.link = link;
    }
}

const cards = []

function crearCard (url,title,tech,link) {
    cards.push(newCard = new CardProyectos(url,title,tech,link))
}
crearCard('formProfesional.png','Validación de Formulario','Html, Css, Javascript','https://mateopautasso.github.io/FormularioProfesional/')
crearCard('temporizador.png','Temporizador','Html, Css, Javascript','https://mateopautasso.github.io/Temporizador/')
crearCard('calculadora.png','Calculadora con JS','Html, Css, Javascript','https://mateopautasso.github.io/Calculadora/')
crearCard('jnSpecter.png','Specter | Codewell Challenge','Html, Css','https://mateopautasso.github.io/JohnathanSpecter-web/')
crearCard('yelpCamp.png','YpCamp | Codewell Challenge','Html, Css','https://mateopautasso.github.io/YelpCamp-web/')
crearCard('bataBit.png','Landing page Mobile-Tablet','Html, Css','https://mateopautasso.github.io/Batabit-design-mobile-tablet/')
crearCard('yardSale.png','Homepage web E-Commerce','Html, Css, Javascript','https://mateopautasso.github.io/Yard-Sale__e-commerce/')

for(i = 0; i < cards.length; i++) {

let htmlCard = 
`
<div class="practicas__card card" data-aos="zoom-in" data-aos-duration="500">
<figure>
    <img src="./assets/images/${cards[i].url}" alt="">
</figure>
<div class="card__info">
    <p>${cards[i].title}</p>
    <div>
        <span class="p-small">${cards[i].tech}</span>
        <a href="${cards[i].link}" target="_blank"><i class="fa-solid fa-link"></i></a>
    </div>
</div>
</div>
`
cardContainer.innerHTML += htmlCard 
}
