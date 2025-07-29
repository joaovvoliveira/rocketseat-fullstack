const links = document.querySelectorAll('a')


function ativarLinks(item) {
  const href = item.href;
  const url = document.location.href;

  if (href === url) {
    item.style.backgroundColor = 'blue'
    item.style.color = 'white'
  }
}

links.forEach(ativarLinks)

const user = {
  id: 1,
  name: 'Victor',
  adress: {
    street: 'Nelson',
    city: 'Dublin',
    geo: {
      latitude: 25.6264,
      longitude: 15.6413
    },
  },
  message: function () {
    console.log(`${name}`)
  }
};

let content = null;

console.log(content ?? "Conteudo Padrao")

console.log(user.message())




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