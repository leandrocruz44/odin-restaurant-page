import pizzaMenu from './pizza-menu.jpg'
import './style.css'

export function menu() {
    function component() {
        const front = document.createElement('div');
        front.classList.add('main')

        const image = new Image()
        image.src = pizzaMenu
        image.classList.add('hero')
        front.appendChild(image)

        const title = document.createElement('div');
        title.textContent = 'Menu'
        title.classList.add('menu')
        front.appendChild(title)

        const pizzas = document.createElement('div');
        pizzas.classList.add('pizzas')
        front.appendChild(pizzas)
        const p1 = document.createElement('div');
        p1.classList.add('p')
        p1.textContent = 'Mozzarela.......................45'
        const p2 = document.createElement('div');
        p2.classList.add('p')
        p2.textContent = 'Pepperoni........................45'
        const p3 = document.createElement('div');
        p3.classList.add('p')
        p3.textContent = 'Margherita.....................40'
        const p4 = document.createElement('div');
        p4.classList.add('p')
        p4.textContent = 'Quattro Formaggi........50'
        const p5= document.createElement('div');
        p5.classList.add('p')
        p5.textContent = 'Siciliana...........................50'
        const p6 = document.createElement('div');
        p6.classList.add('p')
        p6.textContent = 'Napolitana......................45'
        const p7 = document.createElement('div');
        p7.classList.add('p')
        p7.textContent = 'Vegetariana....................55'
        pizzas.appendChild(p1)
        pizzas.appendChild(p2)
        pizzas.appendChild(p3)
        pizzas.appendChild(p4)
        pizzas.appendChild(p5)
        pizzas.appendChild(p6)
        pizzas.appendChild(p7)
    
        return front;
    }
    
    const content = document.getElementById('content');
    content.appendChild(component());
}