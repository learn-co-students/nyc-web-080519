const container = document.querySelector("#container")
const form = document.querySelector("#new-game")
let games;


fetch("http://localhost:3000/api/v1/games", {method: "GET"})
.then(convertToJSON)
.then(renderGames)

function convertToJSON(response){
  return response.json()
}


function renderGames(data){
  data.forEach(renderOneGame);
}

function renderOneGame(game){
    const str = `
      <div class="tile">
        <h4>${game.name} <button class="close" data-action="delete" data-id="${game.id}">X</button></h4>
        <p>${game.description}</p>
        <div class="image-wrapper">
          <img src="${game.img_url}" alt="${game.name}">
        </div>
        <p>Likes: <span class="like-display">${game.likes}</span></p>
        <button data-action="like" data-id="${game.id}" class="like button">Like</button>
      </div>`

    container.insertAdjacentHTML("beforeend", str)

  }

container.addEventListener("click", function(event){
  if(event.target.dataset.action === "like"){
   
    const span = event.target.closest("div.tile").querySelector("span.like-display")
    const newLikes = parseInt(span.innerText) + 1

    fetch(`http://localhost:3000/api/v1/games/${event.target.dataset.id}/like`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({likes: newLikes})
    }).then(function(response){ return response.json()})
    .then(function(data){
      span.innerText = newLikes
    })





  } else if(event.target.dataset.action === "delete") {
    fetch(`http://localhost:3000/api/v1/games/${event.target.dataset.id}`, {
      method: "DELETE"
    })
    .then(function(response){ return response.json()})
    .then(function(data){
      alert(data.message)

      event.target.closest("div.tile").remove()
    })
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
    img_url: img_url,
    likes: 0
  }

  fetch("http://localhost:3000/api/v1/games", {
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
    if (data.errors){
      alert(data.errors)
    } else {
      renderOneGame(data)
    }
  })

})