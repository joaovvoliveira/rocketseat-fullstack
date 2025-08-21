const currencyRealTime = {
  USD: {
    id: 1,
    value: 5.58   // 1 USD = 5.58 BRL  [oai_citation:0‡European Central Bank](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-brl.en.html?utm_source=chatgpt.com)
  },
  EUR: {
    id: 2,
    value: 6.49   // 1 EUR ≈ 6.49 BRL  [oai_citation:1‡Wise](https://wise.com/gb/currency-converter/eur-to-brl-rate/history?utm_source=chatgpt.com)
  },
  GBP: {
    id: 3,
    value: 7.48   // 1 GBP ≈ 7.48 BRL  [oai_citation:2‡Xe](https://www.xe.com/currencycharts/?from=GBP&to=BRL&utm_source=chatgpt.com)
  },
  JPY: {
    id: 4,
    value: 0.0375 // 1 JPY ≈ 0.0375 BRL  [oai_citation:3‡The Money Converter](https://themoneyconverter.com/JPY/BRL?utm_source=chatgpt.com)
  },
  CAD: {
    id: 5,
    value: 4.07   // 1 CAD ≈ 4.07 BRL  [oai_citation:4‡Xe](https://www.xe.com/currencyconverter/convert/?Amount=1&From=CAD&To=BRL&utm_source=chatgpt.com)
  },
  AUD: {
    id: 6,
    value: 3.63   // 1 AUD ≈ 3.63 BRL  [oai_citation:5‡Wise](https://wise.com/us/currency-converter/aud-to-brl-rate?amount=1000&utm_source=chatgpt.com)
  },
};

const btnConversor = document.querySelector("#converter");

const inputValue = document.getElementById('value')

inputValue.oninput = () => {
  let value = inputValue.value.replace(/\D/g,"")

  value = Number(value) / 100

  inputValue.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
  value = value.toLocaleString("pt-BR", {
    style: 'currency',
    currency: 'BRL'
  })

  return value
}

btnConversor.addEventListener("click", () => {
  try {
    const valueReal = document.querySelector("#value").value;
    const currency = document.querySelector("#currency").value;
    const conversor = currencyRealTime[currency].value;
    const result = document.querySelector("#result");
    
    console.log(valueReal);
    
    if (!valueReal) {
      alert('Insira valor em Reais')
      return
    }
    const resultado = `${(parseFloat(valueReal.toUpperCase().replace("R$","").replace(',','.')) * conversor).toFixed(2)}`
    result.textContent = `R$ ${formatCurrencyBRL(resultado).replace('.',',')}`
    // valueReal.value = ''
  } catch (e) {
    alert('Erro na conversao')
  }
  // value.textContent = ''
  // result.innerHTML = `Resultado: ${resultado.toFixed(2)}`;
});