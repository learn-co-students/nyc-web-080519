HTMLCollection.prototype.forEach = Array.prototype.forEach

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

data.forEach(function(obj) {
  // const name = obj.name
  // const description = obj.description
  // const img_url = obj.img_url
  // const id = obj.id

  const { name, description, img_url, id } = obj

  container.insertAdjacentHTML("beforeend", `
    <div class="tile">
      <h4>${name}</h4>
      <p>${description}</p>
      <p>Likes: <span data-id=${id}>0</span></p>
      <div class="image-wrapper">
        <img src="${img_url}" alt="catan">
      </div>
      <button data-id=${id} class="like button">Like</button>
    </div>
  `
  )
})

//   <div id="container"></div>


// <div class="tile">
//   <h4>Settlers of Catan</h4>
//   <p>Friendships will be tested.</p>
//   <p>Likes: <span>0</span></p>
//   <div class="image-wrapper">
//     <img src="https://crowscastle.com/375-large_default/the-settlers-of-catan.jpg" alt="catan">
//   </div>
//   <button class="like button">Like</button>
// </div>


const likeButtons = document.getElementsByClassName("like button")

likeButtons.forEach(function(button){
  button.addEventListener("click", function(event){

    console.log(event.target.dataset)


    // Find all spans, iterate over and moddify only the one with the matching dataset id
    // const spans = document.querySelectorAll(`span`)

    // console.log(spans)

    // spans.forEach(function(span){
    //   if (span.dataset.id === event.target.dataset.id){
    //     span.innerText = parseInt(span.innerText) + 1
    //   }
    // })


    const span = document.querySelector(`span[data-id="${event.target.dataset.id}"]`)
    span.innerText = parseInt(span.innerText) + 1



    // // find the the thing you want to modify
    // const span = document.querySelector("span")
    // // modify it
    // span.innerText = parseInt(span.innerText) + 1
  })
})
// likeButton.addEventListener("click", function(event){

//   // find the the thing you want to modify
//   const span = document.querySelector("span")
//   // modify it
//   span.innerText = parseInt(span.innerText) + 1
// })









