// Select Elements
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')
const expenseList = document.querySelector('ul')
const expensesQuantity = document.querySelector('aside header p span')
const expensesTotal = document.querySelector('aside header h2')

// Capture the input event on the amount field
amount.oninput = () => {
  // Get the input value and remove non-numeric characters
  let value = amount.value.replace(/\D/g,"")

  // Convert value to cents
  // Example: 150 / 100 = 1.5 which is equal to 1,50 in BRL format
  // The numbers are inserted from right to left
  value = Number(value) / 100

  // Format the value as Brazilian currency
  amount.value = formatCurrencyBRL(value)
}

// Function to format a number as Brazilian Real currency
function formatCurrencyBRL(value) {
  value = value.toLocaleString("pt-BR", {
    style: 'currency',
    currency: 'BRL'
  })

  return value
}

// Capture the submit event from the form
form.onsubmit = (e) => {
  e.preventDefault()

  // Create a new expense object
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date()
  }

  console.log(newExpense)
  expenseAdd(newExpense) // Add the expense to the list
  formClear()            // Clear the form fields
}

// Function to add a new expense to the list
function expenseAdd(newExpense) {
  try {
    const expenseItem = document.createElement('li')
    expenseItem.classList.add('expense')
    
    // Add expense icon
    const expenseIcon = document.createElement('img')
    expenseIcon.setAttribute('src', `img/${newExpense.category_id}.svg`)
    expenseIcon.setAttribute('alt',newExpense.category_name)

    // Add expense information
    const expenseInfo = document.createElement('div')
    expenseInfo.classList.add('expense-info')

    const expenseName = document.createElement('strong')
    expenseName.textContent = newExpense.expense

    const expenseCategory = document.createElement('span')
    expenseCategory.textContent = newExpense.category_name

    expenseInfo.append(expenseName, expenseCategory)
    
    // Add expense amount
    const expenseAmount = document.createElement('span')
    expenseAmount.classList.add('expense-amount')
    expenseAmount.innerHTML = `
      <small>R$</small>${newExpense.amount
        .toUpperCase()
        .replace("R$","")}
      `
    
    // Add remove icon
    const expenseImgRemove = document.createElement('img')
    expenseImgRemove.classList.add('remove-icon')
    expenseImgRemove.setAttribute('src', 'img/remove.svg')
    expenseImgRemove.setAttribute('alt', 'remove')
    
    // Append items to the expense list
    expenseList.append(expenseItem)
    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, expenseImgRemove)

    updateTotals() // Update total expenses after adding
  } catch (e) {
    alert('Could not add expense')
  }
}

// Function to update total quantity and total value
function updateTotals() {
  try {
    // Get all list items
    const items = expenseList.children
    expensesQuantity.textContent = `${items.length} ${items.length === 1 ? "Expense" : "Expenses"}`

    let total = 0

    // Sum all expense amounts
    for(let item = 0; item < items.length; item++) {
      const itemAmount = items[item].querySelector('.expense-amount')
      let value = itemAmount.textContent.replace(/[^\d,]/g,"").replace(',','.')
      value = parseFloat(value)

      if (isNaN(value)){
        return alert('Could not calculate total')
      }

      total += Number(value)
    }

    // Format total in BRL
    const symbolBRL = document.createElement('small')
    symbolBRL.textContent = 'R$'
  
    total = formatCurrencyBRL(total).toUpperCase().replace('R$','')
    expensesTotal.innerHTML = ""
    expensesTotal.append(symbolBRL, total)

  } catch (e) {
    console.log('Error updating totals')
  }
}

// Remove expense item when remove icon is clicked
expenseList.addEventListener('click', (e) => {
  if(e.target.classList.contains("remove-icon")){
    const item = e.target.closest('.expense')
    item.remove()
    updateTotals() // Update totals after removal
  }
})

// Function to clear the form
function formClear() {
  expense.value =  ''
  category.value =  ''
  amount.value =  ''
  expense.focus()
}