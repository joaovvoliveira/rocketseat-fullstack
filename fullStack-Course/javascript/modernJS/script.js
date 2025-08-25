// Destructuring Arrays

const data = ['Victor', 'victor@email.com']
const [username,email] = data

console.log(username, email)

const fruits1 = ['Pineapple','watermelon','peach']

const [Pineapple,watermelon,peach] = fruits1

//Destructuring third item
const [,,terceiro] = fruits1
console.log(Pineapple)
console.log(watermelon)
console.log(terceiro)

// Destructuring Objects

const user1 = { nome: "Ana", email: "ana@email.com" };
const { nome: userName, email: userEmail } = user1;
// console.log(userName); // Ana
// console.log(userEmail); // ana@email.com

const product = {
  description: "mouse",
  price: 150
}

const {description, price }= product
console.log("Descricao:", description)
console.log("Preco:", price)

const fruits = ["Banana", "Apple", "Orange"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
// console.log(firstFruit); // Banana
// console.log(secondFruit); // Apple
// console.log(thirdFruit); // Orange

// Desestructuring in Functions

function showUser({ nome: userName, email: userEmail }) {
  // console.log(userName, userEmail);
}

const user = { nome: "Pedro", email: "pedro@email.com" };
showUser(user); // Pedro pedro@email.com

// REST PARAMS
function valores(...rest) {
console.log(...rest) //exibe o conteudo do rest
  console.log(rest) //exibe um array com o conteudo
}

valores(2,346,53,246,462,24,246,24,26,264,264,1314)