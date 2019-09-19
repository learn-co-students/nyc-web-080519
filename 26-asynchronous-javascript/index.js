const container = document.querySelector("#container")
const form = document.querySelector("#new-game")
let games;


fetch("http://localhost:3000/games", {method: "GET"})
.then(convertToJSON)
.then(renderGames)
// .then(function(data){
//   renderGames(data)
// })

function convertToJSON(response){
  return response.json()
}


function renderGames(data){
  data.forEach(renderOneGame);
}

function renderOneGame(game){
    const str = `
      <div class="tile">
        <h4>${game.name} <button class="close" data-action="delete">X</button></h4>
        <p>${game.description}</p>
        <div class="image-wrapper">
          <img src="${game.img_url}" alt="${game.name}">
        </div>
        <p>Likes: <span class="like-display">${game.likes}</span></p>
        <button data-action="like" data-id="${game.id}"class="like button">Like</button>
      </div>`

    container.insertAdjacentHTML("beforeend", str)

  }

container.addEventListener("click", function(event){
  if(event.target.dataset.action === "like"){
   
    const span = event.target.closest("div.tile").querySelector("span.like-display")
    span.innerText = parseInt(span.innerText) + 1

  } else if(event.target.dataset.action === "delete") {
    event.target.closest("div.tile").remove()
  }
})


form.addEventListener("submit", function(e){
  e.preventDefault()

  const name = e.target.name.value
  const description = e.target.description.value
  const img_url = e.target.img_url.value

  const body = {
    name: name,
    description: description,
    img_url: img_url
  }

  fetch("http://localhost:3000/games", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json"
    }
  })
  .then(convertToJSON)
  .then(function(data){
    // data is actually the game that was just created

    renderOneGame(data)
  })

})











// function sleep(time){
//   const start = new Date()
//   while (new Date() - start < time){}
// }


// // sleep(5000) // simulates blocking synchronous

// setTimeout(function(){ // simulate non-blocking, asynchronous
//   console.log("TIMEOUT")
// }, 5000)

// let pokemon;

// fetch("https://pokeapi.co/api/v2/pokemon/2")
// .then(function(response) { 
//   return response.json()
// })
// .then(function(data){
//   pokemon = data

//   document.body.append(data.name)
// })



// console.log(pokemon)


// // suppose we had code that TAKES MAD LONG
// console.log("After")




