import {current} from "./timer.js"
let time = document.querySelector('.timer')
let state = document.querySelector('.state')

let dict = {
  pomodoro: 25,
  short: 5,
  long: 10
}
export function configModes()
{
  document.querySelector('.short').addEventListener('click', () => {
      clearInterval(current.timer)

    current.minutes = 5
    current.seconds = 0
    current.mode = "short"
    state.textContent = "start"
    time.textContent = "05:00"
  
  })

  document.querySelector('.pom').addEventListener('click', () => {
      clearInterval(current.timer)
    current.minutes = 25
    current.seconds = 0
    current.mode = "pomodoro"
    state.textContent = "start"
    time.textContent = "25:00"
  
  })


  document.querySelector('.long').addEventListener('click', () => {
    clearInterval(current.timer)
    current.mode = "long"
    current.minutes = 10
    current.seconds = 0
    state.textContent = "start"
    time.textContent = "10:00"
  
  })

  document.querySelector('#reset-icon').addEventListener('click', () => {
    clearInterval(current.timer)
    current.minutes = dict[current.mode]
    current.seconds = 0
      state.textContent = "start"
    if(current.mode === "short")
    {
       time.textContent = `0${current.minutes}:00`
       return
    }
    time.textContent = `${current.minutes}:00`

  })
}