class Game {
  constructor(gameObj){
    this.id = gameObj.id
    this.img_url = gameObj.img_url
    this.name = gameObj.name
    this.description = gameObj.description
    this.likes = gameObj.likes

    // this.users = [3,98,212]

    Game.all.push(this)

    const container = document.querySelector("#container")
    this.renderTile(container)
  }

  // allUsers(){
  //   this.users.map(userID => { return User.find(userID)})
  // }

  renderList(){
    const container = document.querySelector("#container")
    container.insertAdjacentHTML("beforeend", `<li>${this.name}</li>`)
  }

  deleteNode(){
    this.element.remove()
  }

  renderTile(container){

    this.element = document.createElement("div")
    this.element.className = "tile"


    const str = `
        <h4>${this.name} <button class="close" data-action="delete" data-id="${this.id}">X</button></h4>
        <p>${this.description}</p>
        <div class="image-wrapper">
          <img src="${this.img_url}" alt="${this.name}">
        </div>
        <p>Likes: <span class="like-display">${this.likes}</span></p>
        <button data-action="like" data-id="${this.id}" class="like button">Like</button>
    `
    this.element.innerHTML = str


    container.append(this.element)

  }

  incrementLikes(){
    this.likes++

    const span = this.element.querySelector("span")

    span.innerText = this.likes


  }

  static find(id){
    return Game.all.find(g => {
      return g.id === parseInt(id)
    })
  }

}

Game.all = []