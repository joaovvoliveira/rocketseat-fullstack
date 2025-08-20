// Desestruturacoes - Rest Operador

// const user = {
//   name: 'Victor',
//   nickname: 'Vida',
//   idade: 29,
//   adress: {
//     street: 'Nelson Street',
//     number: 33
//   },
// };

// function mostrarIdade({idade, name, adress}) {  // Dessa forma ele entende que é para 
//   return adress                                 // trazer esses itens do do objeto passado como funcao
// }

// const { name, idade:age, adress, nickname = 'Tico' } = user
// const { adress, idade: age } = user

// const { name, idade, ...rest } = user
// document.body.innerText = JSON.stringify(rest,null,2)

// const array = [1,2,3,687,475,3,2,4,46,6,7,8]

// const [first,second,third, ...rest2]  = array;

// document.body.innerText = JSON.stringify({first,second,third, rest2}, null,2)

// OPTIONAL CHAINING

const user = {
  name: 'Victor',
  nickname: 'Vida',
  age: 29,
  adress: {
    street: 'Nelson Street',
    number: 33,
    zip: {
      code: 18044720,
      city: 'Sorocaba'
    },
    // showFullAdress(){
    //   return 'ok'
    // }
  },
};

const key = 'age'

// console.log(user.adress?.zip?.code ?? 'Nao Informado')
// console.log(user.adress?.showFullAdress?.())

// console.log(user[key])
const { adress, street } = user
// document.body.innerText = JSON.stringify({ adress }, null, 2)- optimal

// METODOS DE ARRAY

const array = [1,2,3,4,5]

for (const i in array) {
  document.body.innerText += array[i]
}

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

function Person(name, age) {
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
// console.log(li.element())


/* === === === === === === === === === === === === === ===  */

const newArray = new Array()

newArray.push('Victor')

// console.log(newArray.length)

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
const newFruits = fruits.splice(1, 5)
// const newFruits = fruits.splice(position,1)
// console.log(newFruits)

/* O QUE O TERMO NEW FAZ
1- Cria um novo objeto
2- Define o protótipo
3- Aponta a variavel this para o objeto
4- Executa a funcao, substituindo this pelo objeto
5- Retorna o novo objeto
*/

// function Carro(modelo, precoInicial) {
//   if (modelo === 'Civic') {
//     this.marca = 'Honda'
//   } else if (modelo === 'Palio') {
//     this.marca = 'Fiat'
//   }

//   const taxa = 1.2
//   const precoFinal = precoInicial * taxa
//   this.preco = precoFinal
// }

// const honda = new Carro('Civic', 20000)


class Carro {
  constructor(modelo, ano, cor, precoFIP) {
    this.modelo = modelo
    this.ano = ano
    this.cor = cor
    this.precoFIP = precoFIP
  }

  get precoRevenda() {
    
    return this.precoFIP * 1.1
  }

  showInfo() {
    // const precoRev = this.precoFIP * 1.1
    console.log(`${this.modelo} tem o preco de Revenda: ${this.precoRevenda} com `)
  }
}

const Honda = new Carro('Civic',2013,'Azul',35600)

Honda.showInfo()

class Caminhao extends Carro {
  get precoRevenda() {
    return this.precoFIP * 1.2
  }
}

const truck = new Caminhao('Mercedez', 2006, 'Branco', 150000)

truck.showInfo()
// console.log(honda)
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