const days = document.querySelector(".days .number")
const hours = document.querySelector(".hours .number")
const mins = document.querySelector(".mins .number")
const seconds = document.querySelector(".seconds .number")

const newYear = "1 Jan 2025"

const countdown = () => {
    const newYearDate = new Date(newYear)
    const currentDate = new Date()
    let totalSeconds = (newYearDate - currentDate) / 1000
    if(totalSeconds < 0) totalSeconds = 0
    
    const daysNumber = Math.floor(totalSeconds / 3600 / 24)
    const hoursNumber = Math.floor(totalSeconds / 3600) % 24
    const minsNumber = Math.floor(totalSeconds / 60) % 60
    const secondsNumber = Math.floor(totalSeconds) % 60

    days.innerText = formatTime(daysNumber)
    hours.innerText = formatTime(hoursNumber)
    mins.innerText = formatTime(minsNumber)
    seconds.innerText = formatTime(secondsNumber)

    changeNumbersColors()
}

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
}

const changeNumbersColors = () => {
    days.style.color = randomColor()
    hours.style.color = randomColor()
    mins.style.color = randomColor()
    seconds.style.color = randomColor()
}

const randomColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const rgb = `rgb(${r}, ${b}, ${g})`
    
    return rgb
}

setInterval(countdown, 1000)
countdown()
