import './style.css'
import pizzaMenu from './pizza-menu.jpg'

export function menu() {
    function component() {
        const front = document.createElement('div');
        front.classList.add('main')

        const image = new Image()
        image.src = pizzaMenu
        image.classList.add('hero')
        front.appendChild(image)

        // const title = document.createElement('div');
        // title.textContent = 'Finíssimus Pizzeria'
        // title.classList.add('title')
        // front.appendChild(title)
    
        return front;
    }
    
    const content = document.getElementById('content');
    content.appendChild(component());
}