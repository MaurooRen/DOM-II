// html elements

const headline = document.querySelector('.logo-heading')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav-link')
const mainImage = document.querySelector('.intro img')
const welcomeText = document.querySelector('.intro h2')
const buttons = document.querySelectorAll('.btn')



//keydown
document.addEventListener('keydown', event => {
    switch(event.key) {
        case 'ArrowUp':
            headline.style.color = 'red'
            break;
        case 'ArrowDown':
            headline.style.color = 'blue'
            break;
        case 'ArrowRight':
            headline.style.color = 'orange'
            break;
        case 'ArrowLeft':
            headline.style.color = 'green'
            break;
        default:
            headline.style.color = 'black'
    }
})
//mouseover
navLinks.forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.color = 'red'
    })
})
//mouseout 
navLinks.forEach(item => {
    item.addEventListener('mouseout', event => {
        item.style.color = 'black'
    })
})
//wheel
welcomeText.addEventListener('wheel', event => {
    event.preventDefault();
    if(event.deltaY < 0) {
        welcomeText.style.zoom = '1.2'
    } else {
        welcomeText.style.zoom = '0.8'
    }
})
//load
window.addEventListener('load', event => {
    console.log('The website is loaded')
})


