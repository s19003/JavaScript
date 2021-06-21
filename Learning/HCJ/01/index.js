const content = document.querySelector('.content')
const button = document.querySelector('.button')

button.addEventListener('click', () => {
  const p = document.createElement('p')
  p.innerHTML = 'Hello World!!'
  content.appendChild(p)

  setTimeout(() => {
    p.classList.add('p-right')
  }, 0)

  setTimeout(() => {
    content.removeChild(p)
  }, 20000)
})
