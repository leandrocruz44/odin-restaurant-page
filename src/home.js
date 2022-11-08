import pizzahome from './pizza-home.jpg'
import pizzacontact from './pizza-contact.jpg'
import pizzamenu from './pizza-menu.jpg'
import pizzahistory from './pizza-history.jpg'
import './style.css'

export function home() {
    function component() {
        const front = document.createElement('div');
        front.classList.add('main')

        const image = new Image()
        image.src = pizzahome
        image.classList.add('hero')
        front.appendChild(image)

        const title = document.createElement('div');
        title.textContent = 'Finíssimus Pizzeria'
        title.classList.add('title')
        front.appendChild(title)
    
        return front;
    }
    
    const content = document.getElementById('content');
    content.appendChild(component());
}