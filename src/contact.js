import pizzaContact from './pizza-contact.jpg'
import { card } from './card-address.js'
import './style.css'

export function contact() {
    function component() {
        const front = document.createElement('div');
        front.classList.add('main')

        const image = new Image()
        image.src = pizzaContact
        image.classList.add('hero')
        front.appendChild(image)

        const place = document.createElement("div")
        place.classList.add('place')
        place.textContent = 'The Italy nearby you'
        front.appendChild(place)

        const cards = document.createElement('div')
        cards.classList.add('cards')
        front.appendChild(cards)

        const sp = card('São Paulo', 'Avenida Paulista, 334', '+55 (11) 2685-8745')
        cards.appendChild(sp)
        const ny = card('New York', '234 4th Avenue', ' +1 212-977-4785')
        cards.appendChild(ny)
        const li = card('Lima', 'Jirón de la Unión, 599', '+51 1 5587874')
        cards.appendChild(li)
        const cm = card('C. de Mexico', 'Calle Monte de Piedad, 11', '+52 800 300 3435')
        cards.appendChild(cm)
    
        return front;
    }
    
    const content = document.getElementById('content');
    content.appendChild(component());
}