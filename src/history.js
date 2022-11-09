import pizzaHistory from './pizza-history.jpg'
import './style.css'

export function history() {
    function component() {
        const front = document.createElement('div');
        front.classList.add('main')

        const image = new Image()
        image.src = pizzaHistory
        image.classList.add('hero')
        front.appendChild(image)

        const history = document.createElement('div');
        history.textContent = 'From Italy to you'
        history.classList.add('history-title')
        front.appendChild(history)

        const lorem = document.createElement('div')
        lorem.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dignissimos eveniet suscipit tenetur architecto perspiciatis maxime, unde similique fugit corporis sint, nostrum distinctio deserunt? Tenetur, quis cumque? Consequatur, soluta provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, necessitatibus quisquam amet iusto dolorem dolore delectus aut inventore, velit officia quibusdam. Suscipit harum velit placeat accusantium culpa vero aperiam repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dignissimos eveniet suscipit tenetur architecto perspiciatis maxime, unde similique fugit corporis sint, nostrum distinctio deserunt? Tenetur, quis cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        lorem.classList.add('lorem')
        front.appendChild(lorem)
    
        return front;
    }
    
    const content = document.getElementById('content');
    content.appendChild(component());
}