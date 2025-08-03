const secondsHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


function setDate() {
 const now = new Date();
 const seconds = now.getSeconds();
 const secondsDegrees = ((seconds/60) * 360) + 90;

 const minutes = now.getMinutes();
 const minDegress = ((minutes/60) * 360) + 90;
 
 const hour = now.getHours();
 const hourDegress = ((hour/12) * 360) + 90;
 
 secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
 minHand.style.transform = `rotate(${minDegress}deg)`;
 hourHand.style.transform = `rotate(${hourDegress}deg)`
}

setInterval(setDate, 1000)