import {current} from "./timer.js"
let time = document.querySelector('.timer')
let state = document.querySelector('.state')
export function configModes()
{
  document.querySelector('.short').addEventListener('click', () => {
      clearInterval(current.timer)
      
    current.minutes = 5
    current.seconds = 0
    state.textContent = "start"
    time.textContent = "05:00"
  
  })

  document.querySelector('.pom').addEventListener('click', () => {
      clearInterval(current.timer)
    current.minutes = 25
    current.seconds = 0
    state.textContent = "start"
    time.textContent = "25:00"
  
  })


  document.querySelector('.long').addEventListener('click', () => {
      clearInterval(current.timer)
    current.minutes = 10
    current.seconds = 0
    state.textContent = "start"
    time.textContent = "10:00"
  
  })
}