
// Select Elements
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')
const expenseList = document.querySelector('ul')
const expensesQuantity = document.querySelector('aside header p span')
const expensesTotal = document.querySelector('aside header h2')

//Captura o evento de input
amount.oninput = () => {
  //Obtem o valor do input e remove caracteres n numericos
  let value = amount.value.replace(/\D/g,"")

  // Transforma valor em cents
  // Exemplo: 150/100 = 1.5 que é igual 1,50. Ou seja
  // ele vai inserindo os numeros em ordem da direita pra esquerda
  value = Number(value) / 100

  amount.value = formatCurrencyBRL(value)
  
}

function formatCurrencyBRL(value) {
  value = value.toLocaleString("pt-BR", {
    style: 'currency',
    currency: 'BRL'
  })

  return value
}

//Captura evento de submit e obtem valores
form.onsubmit = (e) => {
  e.preventDefault()

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date()
  }

  console.log(newExpense)
  expenseAdd(newExpense)
  formClear()
}


function expenseAdd(newExpense) {
  try {
    const expenseItem = document.createElement('li')
    expenseItem.classList.add('expense')
    
    const expenseIcon = document.createElement('img')
    expenseIcon.setAttribute('src', `img/${newExpense.category_id}.svg`)
    expenseIcon.setAttribute('alt',newExpense.category_name)

    const expenseInfo = document.createElement('div')
    expenseInfo.classList.add('expense-info')

    const expenseName = document.createElement('strong')
    expenseName.textContent = newExpense.expense

    const expenseCategory = document.createElement('span')
    expenseCategory.textContent = newExpense.category_name

    expenseInfo.append(expenseName,expenseCategory)
    
    const expenseAmount = document.createElement('span')
    expenseAmount.classList.add('expense-amount')
    expenseAmount.innerHTML = `
      <small>R$</small>${newExpense.amount
        .toUpperCase()
        .replace("R$","")}
      `
    
    const expenseImgRemove = document.createElement('img')
    expenseImgRemove.classList.add('remove-icon')
    expenseImgRemove.setAttribute('src', '/img/remove.svg')
    expenseImgRemove.setAttribute('alt', 'remover')
    

    //Add itens no item
    expenseList.append(expenseItem)
    expenseItem.append(expenseIcon,expenseInfo, expenseAmount,expenseImgRemove)

    updateTotals()
    // throw new Error('Erro test')
  } catch (e) {
    alert('nao foi possivel')
    // console.log(e)
  }
}

function updateTotals() {
  try {
    //Recupera todos os Li da lista
    const items = expenseList.children
    expensesQuantity.textContent = `${items.length} ${items.length === 1 ? "Despesa" : "Despesas"
    }`

    let total = 0

    for(let item = 0; item < items.length; item++) {
      const itemAmount = items[item].querySelector('.expense-amount')

      let value = itemAmount.textContent.replace(/[^\d,]/g,"").replace(',','.')
      value = parseFloat(value)

      if (isNaN(value)){
        return alert('Nao foi possivel NaN')
      }

      total += Number(value)

    }
    const symbolBRL = document.createElement('small')
    symbolBRL.textContent = 'R$'
  
    total = formatCurrencyBRL(total).toUpperCase().replace('R$','')

    expensesTotal.innerHTML = ""
    expensesTotal.append(symbolBRL, total)

  } catch (e) {
    console.log('Error')
  }
}

expenseList.addEventListener('click', (e) => {
  if(e.target.classList.contains("remove-icon")){
    const item = e.target.closest('.expense')
    item.remove()

    updateTotals()
  }
})

function formClear() {
  expense.value =  ''
  category.textContent =  ''
  amount.value =  ''

  expense.focus()
}



// const formExpense = document.querySelector('form')
// const ulExpenses = document.querySelector('ul')

// formExpense.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const expenseName = document.querySelector('#expense').value
//   // console.log(expenseName)
//   const categoryName = document.querySelector('#category')
//   // console.log(categoryName.value)
//   const amount = document.querySelector('#amount').value
//   // console.log(amount)
//   const qtdItens = document.querySelector('aside header p span')
//   const listItem = ulExpenses.querySelectorAll('li .expense-amount')
  
//   addExpense(expenseName, categoryName.value, amount)
//   qtdItens.textContent = `${listItem.length} Despesas`
// })

// // console.log(qtdItens)
// // console.log(listItem.length)
// let totalValue = document.querySelector('aside header h2').textContent
// // console.log(totalValue)
// // console.log(total)
// // const arrayExpenses = listItem

// listItem.forEach(item => {
//   let str = item.innerHTML.replace('<small>R$</small>','')
//   let numb = parseFloat(str.replace(/\./g, '').replace(',', '.'));
//   console.log(numb)

// })

// // qtdItens.textContent = `${listItem.length} Despesas`

// function convertReal(amountExpense) {
//   const amountNumber = parseFloat(amountExpense.replace(',', '.'))
//   return amountFormatted = new Intl.NumberFormat('pt-BR', {
//     style: 'currency',
//     currency: 'BRL'
//   }).format(amountNumber)
// }
// // // R$0,00



// function addExpense(expenseName, typeExpense, amountExpense) {
//   console.log(ulExpenses)
//   const li = document.createElement('li')
//   li.classList.add("expense")
  
  
//   li.innerHTML = `
//   <img src="./img/${typeExpense}.svg" alt="Ícone de tipo da despesa" />
//   <div class="expense-info">
//   <strong>${expenseName}</strong>
//   <span>${typeExpense}</span>
//   </div>
  
//   <span class="expense-amount"><small>R$</small>${convertReal(amountExpense)}</span>
  
//   <img src="./img/remove.svg" alt="remover" class="remove-icon" />
//   `
//   ulExpenses.append(li)
  
//   const expense = {
//     expenseName,
//     typeExpense,
//     amountFormatted
//   }
  
//   const expenses = JSON.parse(localStorage.getItem('expenses')) || []
  
//   expenses.push(expense)
  
//   localStorage.setItem('Expenses', JSON.stringify(expenses))
//   // localStorage.getItem('Expenses', JSON.stringify(expenses))
// }

