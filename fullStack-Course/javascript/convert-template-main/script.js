const USD = 4.87
const EUR = 5.32
const GBP = 6.07


// Getting Element 
const form = document.querySelector('form')
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('footer');
const btn = document.querySelector('button');
const description = document.getElementById('description')
const result = document.getElementById('result')


// Create
amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
});

form.onsubmit = (e) => {
  e.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "$")
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break;
  }

}

function convertCurrency(amount, price, currency) {
  let total = formatCurrencyBRL(amount * price).replace("R$", "");
  console.log(total)
  try {
    description.textContent = `${currency} 1 = ${formatCurrencyBRL(price)}`
    result.textContent = `${total} Reais`
    footer.classList.add('show-result')
  } catch (e) {
    console.log(e);
    footer.classList.remove('show-list')
    alert("Nao foi possivel converter. Tente novamente.")
  }
};

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

/*
btn.addEventListener('click', (e) => {
  const amountValue = amount.value;
  const currencyValue = currency.value;
  
  if (currencyValue === 'USD') {
  } else if (currencyValue === 'EUR') {
    description.textContent = `${currencyValue} 1 = R$ 5,83`
    result.textContent = `R$ ${(amountValue * 5.83).toFixed(2)} Reais`
    footer.classList.add('show-result')
  } else {
    description.textContent = `${currencyValue} 1 = R$ 6,29`
    result.textContent = `R$ ${(amountValue * 6.29).toFixed(2)} Reais`
    footer.classList.add('show-result')
  }
});
*/