

const imcCategories = [
  {
    min: 0,
    max: 18.4,
    classification: 'Magreza',
    grade: '0'
  },
  { min: 18.5, max: 24.9, classification: 'Normal', grade: '0' },
  { min: 25.0, max: 29.9, classification: 'Sobrepeso', grade: 'I' },
  { min: 30.0, max: 39.9, classification: 'Obesidade', grade: 'II' },
  { min: 40.0, max: Infinity, classification: 'Obesidade Grave', grade: 'III' },
];
const form = document.querySelector('form')
const btn = document.querySelector('button')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const age = document.querySelector('#age').value
  const name = document.querySelector('#name').value
  const height = document.querySelector('#height').value
  const weight = document.querySelector('#weight').value
  let result = document.querySelector('.result')

  const regexLetter = /\D+/g
  const regexNumber = /\d+/g
  const newAge = age.replace(regexLetter, '')
  const newName = name.replace(regexNumber, '')
  const newHeight = (height.replace(regexLetter, '') / 100)
  const newWeight = parseFloat(weight.replace(regexLetter, ''))

  console.log(newHeight)

  const imc = newWeight / (newHeight * newHeight)
  console.log(imc.toFixed(2))
  console.log(result)

  if (imc >= imcCategories[0].min && imc <= imcCategories[0].max) {
    result.textContent = `${newName} tem ${newAge} anos, ${newHeight} cm de altura e ${newWeight} kg de peso. Está na categoria ${imcCategories[0].classification} com um IMC de ${imc}.`
  } else if (imc >= imcCategories[1].min && imc <= imcCategories[1].max) {
    result.textContent = `${newName} tem ${newAge} anos, ${newHeight} cm de altura e ${newWeight} kg de peso. Está na categoria ${imcCategories[1].classification} com um IMC de ${imc}.`
  } else if (imc >= imcCategories[2].min && imc <= imcCategories[2].max) {
    result.textContent = `${newName} tem ${newAge} anos, ${newHeight} cm de altura e ${newWeight} kg de peso. Está na categoria ${imcCategories[2].classification} com um IMC de ${imc}.`
  } else if (imc >= imcCategories[3].min && imc <= imcCategories[3].max) {
    result.textContent = `${newName} tem ${newAge} anos, ${newHeight} cm de altura e ${newWeight} kg de peso. Está na categoria ${imcCategories[3].classification} com um IMC de ${imc}.`
  } else if (imc >= imcCategories[4].min && imc <= imcCategories[4].max) {
    result.textContent = `${newName} tem ${newAge} anos, ${newHeight} cm de altura e ${newWeight} kg de peso. Está na categoria ${imcCategories[4].classification} com um IMC de ${imc}.`
  }

})

/*
IMC	Classificação	Obesidade (grau)

*/
