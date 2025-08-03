const obj = {}

console.log(obj)


// const h1 = document.querySelector('h1')

// function handleEvent(e) {
//   console.log(e)
//   console.log(e.type)
// }

// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)
// h1.addEventListener('mouseover', handleEvent)
// h1.addEventListener('mousedown', handleEvent)
// h1.addEventListener('mouseup', handleEvent)

// window.addEventListener('keydown', (e) => {
//   console.log(e.key)
//   if (e.key === 'h') {
//     document.body.classList.toggle('fullscreen')
//   } 
// })
// window.addEventListener('resize', handleEvent)
// window.addEventListener('scroll', handleEvent)

const imgs = document.querySelectorAll('img')

function getAtribute(e) {
  e.target.getAttribute('src')
}

imgs.forEach(item => item.addEventListener('click', getAtribute))

// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleLink(e) {
  e.preventDefault()
  linksInternos.forEach(item => {
    item.classList.remove('ativo')
  })

  e.currentTarget.classList.add('ativo')
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const wholeBody = document.querySelector('body')

wholeBody.addEventListener('click', (e) => {
  // console.log(e.currentTarget)
  // console.log(e.target)
  // console.log(e.type)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

wholeBody.addEventListener('click', (e) => {
  // e.target.remove()
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleKeyT(e) {
  if(e.key === 'T') {
    document.documentElement.classList.toggle('.textomaior')
  }
}
window.addEventListener('keydown', handleKeyT)


/* ---------------------------------- */ 

function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  
  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('ativo');
        else 
          section.classList.remove('ativo');
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();


// const img = document.querySelectorAll('img')

// function callback(e) {
//   const target = e.currentTarget
//   console.log(target)
// }

// img.forEach(item => item.addEventListener('click', callback))

// const linkExterno = document.querySelector('a[href^="http"]')

// function linkExt(e) {
//   e.preventDefault()
//   console.log()
// }

// linkExterno.addEventListener('click', linkExt)
