import { header } from './header.js';
import { home } from './home.js';
import { history } from './history.js'
import { menu } from './menu.js';
import { contact } from './contact.js'

header()
home()

const buttons = document.querySelectorAll('.header-options') 
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 'home') {
            const main = document.querySelector('.main')
            main.remove()
            return home() 
        } else if (button.id == 'history') {
            const main = document.querySelector('.main')
            main.remove()
            return history()
        } else if (button.id == 'menu') {
            const main = document.querySelector('.main')
            main.remove()
            return menu()
        } else if (button.id == 'contact') {
            const main = document.querySelector('.main')
            main.remove()
            return contact()
        }
    })
})


