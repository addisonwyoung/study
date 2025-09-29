let time = document.querySelector('.timer')
let state = document.querySelector('.state')



export let current = {
  minutes: 0,
  seconds: 10,
  mode: "pomodoro",
  timer: ""
}

document.querySelector('.short').addEventListener('click', () => {
  current.minutes = 5
  current.seconds = 0
  clearInterval(current.timer)
})

