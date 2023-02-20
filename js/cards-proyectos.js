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
crearCard('../assets/images/calculadora.png','Calculadora con JS','Html, Css, Javascript','https://mateopautasso.github.io/Calculadora/')
crearCard('../assets/images/jnSpecter.png','Specter | Codewell Challenge','Html, Css','https://mateopautasso.github.io/JohnathanSpecter-web/')
crearCard('../assets/images/yelpCamp.png','YpCamp | Codewell Challenge','Html, Css','https://mateopautasso.github.io/YelpCamp-web/')
crearCard('../assets/images/bataBit.png','Landing page Mobile-Tablet','Html, Css','https://mateopautasso.github.io/Batabit-design-mobile-tablet/')
crearCard('../assets/images/yardSale.png','Homepage web E-Commerce','Html, Css, Javascript','https://mateopautasso.github.io/Yard-Sale__e-commerce/')

for(i = 0; i < cards.length; i++) {

let htmlCard = 
`
<div class="practicas__card card">
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
