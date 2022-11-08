import './style.css'
import { home } from './home.js'
import { menu } from './menu.js'

export function header() {
    const content = document.getElementById('content');
    content.classList.add('static')

    const header = document.createElement('div');
    content.appendChild(header)
    header.classList.add('header')

    const option1 = document.createElement('button')
    const option2 = document.createElement('button')
    const option3 = document.createElement('button')
    const option4 = document.createElement('button')
    option1.textContent = 'Home'
    option2.textContent = 'Our History'
    option3.textContent = 'Menu'
    option4.textContent = 'Contact'
    option1.classList.add('header-options')
    option2.classList.add('header-options')
    option3.classList.add('header-options')
    option4.classList.add('header-options')
    option1.id = 'home'
    option2.id = 'history'
    option3.id = 'menu'
    option4.id = 'contact'
    header.appendChild(option1)
    header.appendChild(option2)
    header.appendChild(option3)
    header.appendChild(option4)

    
    return content
}
