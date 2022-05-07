const monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const daysName = ['Sunday', 'Monday', 'Tuesday', 'Webnesday', 'Thrusday', 'Friday', 'Saturday']

function digitalClock() {
  const d = new Date()

  let hours = d.getHours()
  let minutes = d.getMinutes()
  let seconds = d.getSeconds()
  let timeFormat = 'AM'
  

  if(hours == 0) {
    hours = 12
  } else if(hours > 12) {
    hours = hours - 12;
    timeFormat = 'PM'
  }

  if(seconds < 10) {
    seconds = '0' + seconds
  } else {
    seconds
  }

  const finalTime = `${hours}:${minutes}:${seconds}`
  document.querySelector('#time').innerText = finalTime
  document.querySelector('#format').innerText = timeFormat


  let days = d.getDay()
  let months = d.getMonth()
  let date = d.getDate()
  let year = d.getFullYear()

  for(let i = 0; i < daysName.length; i++) {
    days = daysName[i]
  }
  for(let x = 0; x < monthsName.length; x++) {
    months = monthsName[x]
  }

  const finalDate = `${days}, ${months} ${date}, ${year}`
  // console.log(months)

  const fullDate = document.getElementById('full-date')
  fullDate.innerHTML = finalDate

  setInterval(digitalClock, 1000)
}

digitalClock()

