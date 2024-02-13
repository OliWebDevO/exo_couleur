let body = document.querySelector('body')
let input = document.querySelector('input')
let button = document.querySelector('button')

button.addEventListener('click',() => {
    body.style.backgroundColor = input.value
})