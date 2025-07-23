{/* <div class="listItem">
  <input type="checkbox" id="item3" name="shoppingItem" value="Leite">
  <label for="item3">Leite</label>
  <img src="./assets/icon delete.svg" alt="" srcset="">
</div> */}

const form = document.querySelector('form');
const itemToAdd = document.getElementById('itemToAdd')
const listItem = document.getElementsByClassName('listItem');
const btnSubmit = document.querySelector('button')
let listLenght = 4
const close = document.getElementById('close')


itemToAdd.addEventListener('input', () => {
  console.log(itemToAdd.value)
})


form.onsubmit = (e) => {
  e.preventDefault();




  btnSubmit.addEventListener('click', () => {
    const listItems = document.getElementById('listItems');

    const li = document.createElement('li')
    li.className = 'listItem'
    li.innerHTML = ` <input type="checkbox" id="item${listLenght}" name="shoppingItem" value="${itemToAdd.value}">
                  <label for="item${listLenght}">${itemToAdd.value}</label>
                  <img src="./assets/icon delete.svg" alt="" srcset="">`;

    console.log(li)
    listItems.appendChild(li);
    listLenght++;

  });
}

  close.addEventListener('click', () => {
      console.log('teste')
  })