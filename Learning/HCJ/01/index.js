const box = document.querySelector('.box')
const button = document.querySelector('.button')
const ret = document.querySelector('.return')

button.addEventListener('click', () => {
  box.classList.toggle('active')
})
