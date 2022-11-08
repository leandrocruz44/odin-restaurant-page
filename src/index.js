import { header } from './header.js';
import { home } from './home.js';
import { menu } from './menu.js'

header()
home()

const buttons = document.querySelectorAll('.header-options') 
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 'home') {
            const main = document.querySelector('.main')
            main.remove()
            return home() 
        } else if (button.id == 'menu') {
            const main = document.querySelector('.main')
            main.remove()
            return menu()
        }
    })
})


