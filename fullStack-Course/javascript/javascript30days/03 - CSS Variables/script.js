/*
  <div class="controls">
    <label for="spacing">Spacing:</label>
    <input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">

    <label for="blur">Blur:</label>
    <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">

    <label for="base">Base Color</label>
    <input id="base" type="color" name="base" value="#ffc600">
  </div>
*/

const spacing = document.querySelector('#spacing');
const blurr = document.querySelector('#blur')
const base = document.querySelector('#base')
const img = document.querySelector('img')


console.log(spacing,blurr,base)

spacing.addEventListener('input', () => {
 img.style.padding = `${spacing.value}px`
})
blurr.addEventListener('input', () => {
 img.style.filter = `blur(${blurr.value}px)`
})
base.addEventListener('input', () => {
 img.style.background = `${base.value}`
})




