// wire up all clickable buttons
// import { updateTimer } from "./ui"



export function configButtons()
{
 configTop()
 configPlay()

  // config play pause button

}

function configTop()
{
   const mom = document.querySelector('.nav')
   mom.addEventListener('click', (e) => {
   const btn = e.target.closest('button'); 
   document.querySelectorAll('.nav button').forEach((c) => {
      c.classList.remove("selected");
    })
  

  btn.classList.add("selected");

  })
}

function configPlay()
{

}