const container = document.querySelector("#container")
const form = document.querySelector("#new-game")

const API = new APICommunicator()



API.getGames()
.then(renderGames)

function renderGames(data){
  data.forEach(game => {
    new Game(game)
  });
}


container.addEventListener("click", function(event){
  if(event.target.dataset.action === "like"){
    // Step 1: Find the game instance from Game.all
    const foundGame = Game.find(event.target.dataset.id)



    API.likeGame(foundGame)
    .then(function(data){
      foundGame.incrementLikes()
    })


  } else if(event.target.dataset.action === "delete") {

    const foundGame = Game.find(event.target.dataset.id)

    fetch(`http://localhost:3000/api/v1/games/${event.target.dataset.id}`, {
      method: "DELETE"
    })
    .then(function(response){ return response.json()})
    .then(function(data){
      alert(data.message)
      foundGame.deleteNode()
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
      new Game(data)
    }
  })

})





// class Person {
//   constructor(name, specialty, age){
//     this.name = name
//     this.specialty = specialty
//     this.age = age
//     this.id = Person.id

//     Person.id++

//     Person.all.push(this)

//     this.render()
//   }

//   work(){
//     console.log(`My name is ${this.name} and I ${this.specialty} all day!`)
//   }

//   static classMethod(){
//     console.log("CLASS METHOD")
//   }

//   remove(){
//     this.li.remove()
//   }

//   render(){
//     this.li = document.createElement("li")
//     this.li.innerText = this.name

//     document.body.append(this.li)
//   }

//   static all = [];
//   static id = 1;
// }

// // Person.all = []
// // Person.id = 1


// // function Person(name, specialty, age){
// //   this.name = name
// //   this.specialty = specialty
// //   this.age = age
// // }

// // Person.prototype.work = function(){
// //     console.log(`My name is ${this.name} and I ${this.specialty} all day!`)
// //   }

// const matt = new Person("Matthew 'Vaporwave' Masiello", "Vaporwave", 26)
// const jon = new Person("Jonathan 'Is He Here Today' Louey", "Being here", 30)





// classical inheritance!!
class Animal{

}

class Cat extends Animal {

}

class Dog extends Animal {

}









