// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor)
//     // const elementoSelecionado = document.querySelector(this.seletor)
//     // return elementoSelecionado;
//   },
//   ativar() {
//     this.element().classList.add('ativo')
//     // const elementoSelecionado = this.element()
//     // elementoSelecionado.classList.add('teste')
//   }
// }

// FUNCAO CONSTRUTORA

// function Dom(seletor) {
//   this.element = () => {
//     return document.querySelector(seletor)
//   }
//   this.ativar = () => {
//     this.element().classList.add('ativo')
//   }
// }

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Person(name,age) {
  this.name = name
  this.age = age
  this.andar = () => {
    return `${this.name} andou`
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Person('Joao', 20)
const brunna = new Person('Brunna', 15)
const maria = new Person('Maria', 22)

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  this.element = () => {
    return document.querySelectorAll(seletor)
  }

  // PARA UM DE CADA VEZ
  // this.toggleClass = (position) => {
  //   this.element()[position].classList.toggle('ativo')
  // }

//  PARA TODOS DE UMA VEZ
  this.ativar = (classe) => {
    this.element().forEach(item => {
      item.classList.add(classe)
    })
  }
  this.remover = (classe) => {
    this.element().forEach(item => {
      item.classList.remove(classe)
    })
  }
}

const li = new Dom('li')
console.log(li.element())


/* === === === === === === === === === === === === === ===  */

const newArray = new Array()

newArray.push('Victor')

console.log(newArray.length)

let fruits = [
  'Apple', 'Banana', 'Orange', 'Strawberry', 'Grapes',
  'Pineapple', 'Mango', 'Watermelon', 'Peach', 'Pear',
  'Cherry', 'Blueberry', 'Raspberry', 'Blackberry', 'Kiwi',
  'Lemon', 'Lime', 'Papaya', 'Guava', 'Plum',
  'Apricot', 'Coconut', 'Fig', 'Pomegranate', 'Passionfruit',
  'Tangerine', 'Cranberry', 'Date', 'Lychee', 'Dragonfruit'
];

//Adiciona no comeco -- //Adiciona no final
fruits.unshift('Pineapple')
fruits.push('Pineapple')

//Remove do comeco -- // Remove do final
fruits.shift()
fruits.pop()

//Encontra o indice do elemento - Caso nao ache retornaria -1
let position = fruits.indexOf('Lime')

//Remove os itens de uma lista, da posicao 1, 5 itens
const newFruits = fruits.splice(1,5)
// const newFruits = fruits.splice(position,1)
// console.log(newFruits)

/* O QUE O TERMO NEW FAZ
1- Cria um novo objeto
2- Define o protótipo
3- Aponta a variavel this para o objeto
4- Executa a funcao, substituindo this pelo objeto
5- Retorna o novo objeto
*/

function Carro(modelo, precoInicial) {
  if(modelo === 'Civic'){
    this.marca = 'Honda'
  } else if (modelo === 'Palio') {
    this.marca = 'Fiat'
  }

  const taxa = 1.2
  const precoFinal = precoInicial * taxa
  this.preco = precoFinal
}

const honda = new Carro('Civic', 20000)

// console.log(honda)
//Verifica se possui determinado item
// console.log(lista.includes(returnName('Victor')))
// console.log(lista[3])



// const links = document.querySelectorAll('a')

// function ativarLinks(item) {
//   const href = item.href;
//   const url = document.location.href;

//   if (href === url) {
//     item.style.backgroundColor = 'blue'
//     item.style.color = 'white'
//   }
// }

// links.forEach(ativarLinks)

// const user = {
//   id: 1,
//   name: 'Victor',
//   adress: {
//     street: 'Nelson',
//     city: 'Dublin',
//     geo: {
//       latitude: 25.6264,
//       longitude: 15.6413
//     },
//   },
//   message: function () {
//     console.log(`${name}`)
//   }
// };

// let content = null;

// console.log(content ?? "Conteudo Padrao")

// console.log(user.message())


// const links = document.querySelectorAll('a')

// function ativarLink(link) {
//   const href = link.href;
//   const url = document.location.href;

//   if(href === url) {
//     link.style.backgroundColor = 'black'
//     link.style.color = 'white'
//   }
// 1
// }


// links.forEach(ativarLink);