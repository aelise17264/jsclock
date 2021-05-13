const secondHand = document.querySelector('.second')
const minHand = document.querySelector('.min')
const hourHand = document.querySelector('.hour')


function setDate(){
    const now = new Date()

    // get seconds
    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds/60) * 360) + 90

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    // get minutes
    const mins = now.getMinutes()
    const minsDegrees = ((mins/60) * 360) +  ((seconds/60)*6) + 90

    minHand.style.transform = `rotate(${minsDegrees}deg)`

    // get hours
    const hours = now.getHours()
    const hoursDegrees = ((hours/12) * 360) + ((mins/60) * 30) + 90

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000)