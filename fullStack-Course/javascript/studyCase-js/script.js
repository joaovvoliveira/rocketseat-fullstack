const links = document.querySelectorAll('a')

function ativarLink(link) {
  const href = link.href;
  const url = document.location.href;

  if(href === url) {
    link.style.backgroundColor = 'black'
    link.style.color = 'white'
  }
1
}


links.forEach(ativarLink);