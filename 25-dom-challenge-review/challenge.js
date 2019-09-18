const controls = document.querySelector("#controls")
const counter = document.querySelector("#counter")

controls.addEventListener("click", handleClick)


function handleClick (e){
  // console.log(e)
  if(e.target.dataset.action === "decrement"){
    // console.log("DECREASING")
    // read its text
    const number = parseInt(counter.innerText)
    // modify its text
    counter.innerText = number - 1

  } else if (e.target.dataset.action === "increment"){
    // console.log("INCREASING")
    // read its text
    const number = parseInt(counter.innerText)
    // modify its text
    counter.innerText = number + 1
  } else if (e.target.dataset.action === "pause"){

    if (e.target.innerText === "pause"){
      // clear the interval
      clearInterval(interval)
      // grab all da buttons  
      const buttons = document.querySelectorAll("button")
      // disable all buttons EXCEPT pause
      buttons.forEach(function(button){
        if(button.dataset.action !== "pause"){
           button.disabled = true
        }
      })
      // change text on pause button
      e.target.innerText = "resume"
    } else {

      interval = setInterval(function(){
        const number = parseInt(counter.innerText)
        counter.innerText = number + 1
      }, 1000)

      const buttons = document.querySelectorAll("button")
      buttons.forEach(function(button){
        if(button.dataset.action !== "pause"){
           button.disabled = false
        }
      })

      e.target.innerText = "pause"
    } 
  } else if (e.target.dataset.action === "like"){
    // otain current number from counter
    const number = counter.innerText
    // grab the list of likes
    const likeList = document.querySelector(".likes")

    const lis = likeList.querySelectorAll("li")

    let foundLi = null
    
    lis.forEach(function(li){
      if(li.dataset.id === number){
        foundLi = li
      }
    })
    
    // let foundLi = document.querySelector(`li[data-id="${number}"]`)

    if (foundLi){
      // we found an existing li, so this number has been liked
      const span = foundLi.querySelector("span")
      const number = parseInt(span.innerText) + 1
      span.innerText = number + " times"
    } else {
      //append an li with that numner
      likeList.insertAdjacentHTML("beforeend", `
        <li data-id="${number}">${number} has been liked <span>1 time</span></li>
      `)
    }


    


    // look through the lis that already exist
    // if the number is in that list of lis, then we need to increment the numer of times liked
    // else the number has NOT been liked before, and we just need to create the li
  }
}


let interval = setInterval(function(){
  const number = parseInt(counter.innerText)
  counter.innerText = number + 1
}, 1000)
