const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secondsEl = document.getElementById("seconds");

const fionasParty = "12 June 2021";
function countdown (){
    const fionaPartyDate = new Date(fionasParty)
let currentDate = new Date ()
let timeLeft =Math.floor((fionaPartyDate-currentDate) / 1000)
console.log(timeLeft)
let seconds = Math.floor(timeLeft%60)
let min = Math.floor(timeLeft/60%60)
let hours = Math.floor(timeLeft/3600%24)
let days= Math.floor(timeLeft / 3600 / 24)
console.log(days, hours, min)
daysEl.innerHTML= days
hoursEl.innerHTML= hours
minEl.innerHTML= min
secondsEl.innerHTML= seconds
}
countdown()
setInterval(countdown, 1000)