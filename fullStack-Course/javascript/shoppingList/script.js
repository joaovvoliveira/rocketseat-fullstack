const form = document.querySelector('form')

let idItem = 4;
let idRemover = 1
const listItems = document.getElementById('listItems')
const listItem = document.querySelectorAll('.listItem')

console.log(listItem[0])

listItem[0].remove()

listItem.forEach((li) => {
  const btnRemover = document.querySelector('a');
  btnRemover.id = `btnRemover${idRemover}`
  console.log(li)
  console.log(btnRemover)

})

// btnRemover.addEventListener('click', (e) => {
//   e.preventDefault()

// btnRemover.addEventListener('click', (e) => {
//   e.preventDefault()

//   btnRemover.forEach((btn) => {

//   })
// })


//   console.log(listItem[id])

// })

function removerItem(id) {
  const btnRemove = document.getElementById(`btnRemover${id}`)

  const hasNumber = /\D+/g;
  const idRemove = btnRemove.id.replace(hasNumber, '') - 1;

  console.log(idRemove)
  // itemLista[id].remove()
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const itemToAdd = document.getElementById('itemToAdd').value;

  adicionarItem(itemToAdd)
  removerItem(1)

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