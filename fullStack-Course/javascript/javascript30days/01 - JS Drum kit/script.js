window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const divKey = document.querySelector(`div[data-key="${e.keyCode}"]`)

  console.log(e.keyCode)

  if(!audio) return;

  audio.currentTime= 0;
  audio.play();
  divKey.classList.add('playing')

})

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  console.log(e)
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});


// window recebe tudo que esta acontecendo na tela