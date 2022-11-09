import pizzaHome from './pizza-home.jpg'
import './style.css'

export function home() {
    function component() {
        const front = document.createElement('div');
        front.classList.add('main')

        const image = new Image()
        image.src = pizzaHome
        image.classList.add('hero')
        front.appendChild(image)

        const title = document.createElement('div');
        title.textContent = 'Finíssimus Pizzeria'
        title.classList.add('title')
        front.appendChild(title)

        const slogan = document.createElement('div');
        slogan.textContent = 'We bring Italy to you';
        slogan.classList.add('slogan')
        front.appendChild(slogan)

        const places = document.createElement('div')
        places.textContent = 'São Paulo - New York - Lima - Ciudad de México'
        places.classList.add('places')
        front.appendChild(places)

        const quotes = document.createElement('div');
        quotes.classList.add('quotes')
        front.appendChild(quotes)
        const p1 = document.createElement('p');
        p1.classList.add('p')
        p1.textContent = '"This is the best pizza I ever had!" - Steve Carell'
        const p2 = document.createElement('p');
        p2.classList.add('p')
        p2.textContent = '"I feel in Italy" - Lewis Hamilton'
        const p3 = document.createElement('p');
        p3.classList.add('p')
        p3.textContent = '"Tomorrow I will buy a house next door!" - Jorge Ben'
        quotes.appendChild(p1)
        quotes.appendChild(p2)
        quotes.appendChild(p3)

    
        return front;
    }
    
    const content = document.getElementById('content');
    content.appendChild(component());
}