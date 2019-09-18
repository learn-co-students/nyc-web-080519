const data = [
  {
    id: 1,
    name: "Settlers of Catan",
    description: "Friendships will be tested.",
    img_url: "https://crowscastle.com/375-large_default/the-settlers-of-catan.jpg"
  },
  {
    id: 2,
    name: "Monopoly",
    description: "Friendships will end.",
    img_url: "https://i5.walmartimages.com/asr/e9009e67-fbb0-4e96-83c5-5af0eeb13b28_1.f17117ff29f8aa4992cb93bad9205dc4.jpeg"
  },
  {
    id: 3,
    name: "Azul",
    description: "Great fun with the friends!.",
    img_url: "https://cf.geekdo-images.com/itemrep/img/ql-0-t271LVGqbmWA1gdkIH7WvM=/fit-in/246x300/pic3718275.jpg"
  }
]

const container = document.querySelector("#container")

data.forEach(function (game){
  const str = `
    <div class="tile">
      <h4>${game.name} <button data-action="delete">X</button></h4>
      <p>${game.description}</p>
      <div class="image-wrapper">
        <img src="${game.img_url}" alt="${game.name}">
      </div>
      <p>Likes: <span class="like-display">0</span></p>
      <button data-action="like" data-id="${game.id}"class="like button">Like</button>
    </div>`

  container.insertAdjacentHTML("beforeend", str)

});


container.addEventListener("click", function(event){
  // stops bubbling!
  event.stopPropagation()

  if(event.target.dataset.action === "like"){
   
    const span = event.target.closest("div.tile").querySelector("span.like-display")
    span.innerText = parseInt(span.innerText) + 1

  } else if(event.target.dataset.action === "delete") {
    event.target.closest("div.tile").remove()
  }

})


