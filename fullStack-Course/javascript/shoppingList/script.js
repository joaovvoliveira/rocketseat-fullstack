const form = document.querySelector('form')
const listItem = document.querySelectorAll('.listItem')
let idItem = 3;

listItem.forEach((item) => {
  const removerItem = item.querySelector('a')
  removerItem.addEventListener('click', (e) => {
    e.preventDefault()
    item.remove()
    console.log('Removido: ' + item.textContent)
  })

  const input = item.querySelector('input[type=checkbox]')
  input.addEventListener('change', () => {
    if(input.checked) {
      item.style.backgroundColor = 'var(--content-tertiary)'
    } else {
      item.style.backgroundColor = 'var(--background-secondary)'
    }
  })
})




form.addEventListener('submit', (e) => {
  e.preventDefault();

  const itemToAdd = document.getElementById('itemToAdd').value;

  adicionarItem(itemToAdd)

})

function adicionarItem(nomeItem) {
  const li = document.createElement('li')
  li.classList.add('listItem')
  li.innerHTML =
    `
  <input type="checkbox" id="item${idItem}" name="shoppingItem" value="${nomeItem}">
  <label for="item${idItem}">${nomeItem}</label>
  <a href="" id=""><img src="./assets/icon delete.svg" alt="" srcset=""></a>
  `
  listItems.append(li)

  // Selecionar o botao recem criado
  const btnRemover = li.querySelector('a')
  console.log(btnRemover)
  btnRemover.addEventListener('click', (e) => {
    e.preventDefault()
    li.remove()
    console.log('Item Removido:', nomeItem)
  })

  idItem++;
  document.getElementById('itemToAdd').value = ''
}