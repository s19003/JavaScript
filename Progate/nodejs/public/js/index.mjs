'use strict'

// DOMを操作して、liタグに要素を追加する
const items = [
  { id: 1, name: 'じゃがいも' },
  { id: 2, name: 'にんじん' },
  { id: 3, name: 'たまねぎ' }
]

const tables = document.getElementById('list-ul')

items.forEach(item => {
  const li = document.createElement('li')
  console.log(item.name)
  li.innerHTML = `
  <span class="id-column">${item.id}</span>
  <span class="name-column">${item.name}</span>
  `
  tables.appendChild(li)
})
