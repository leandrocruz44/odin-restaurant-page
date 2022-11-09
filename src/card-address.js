import './style.css'

export function card(city, address, phone) {
    const card1 = document.createElement('div')
    card1.classList.add('card')
    const city1 = document.createElement('h1')
    city1.textContent = city
    card1.appendChild(city1)
    const address1 = document.createElement('p')
    address1.textContent = address
    card1.appendChild(address1)
    const phone1 = document.createElement('p')
    phone1.textContent = phone
    card1.appendChild(phone1)
    const button1 = document.createElement('button')
    button1.innerText = 'Reservation'
    button1.classList.add('btn1')
    card1.appendChild(button1)

    return card1
}
