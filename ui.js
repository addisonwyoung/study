// work on updating the UI
// exception: the logic of updating the timer must be done here because of the need to bind setInterval on the UI update.
let time = document.querySelector('.timer')
let state = document.querySelector('.state')
let manage;

const myAudio = document.querySelector('.ringer');


import { current } from "./timer.js"

export function listen()
{
  state.addEventListener('click', () => {
  if(state.textContent === "start")
  {
    // begin play
    // build one set interval
    current.timer = setInterval(updateTimer, 1000)
    
    state.textContent = "pause"

  }
  else
  {
    clearInterval(current.timer)
   
     state.textContent = "start"
  }
})
}



export function updateTimer()
{
  if(current.minutes == 0 && current.seconds == 0)
  {
    clearInterval(current.timer)
    myAudio.play();
    time.textContent = "00:00"
    return;
  }
  if(current.seconds == 0)
  {
    current.minutes--;
    current.seconds = 60
  }
  
  current.seconds--;
  let newSeconds = current.seconds
  let newMinute = current.minutes
  if(current.seconds < 10)
  {
    newSeconds = `0${current.seconds}`
  }
   if(current.minutes < 10)
  {
     newMinute = `0${current.minutes}`
  }



  time.innerHTML = `${newMinute}:${newSeconds}`

}


