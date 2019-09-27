class APICommunicator {
  constructor(){
    this.endpoint = "http:/bored-games/api/v1"
  }


  getGames(){
    return fetch(this.endpoint + "/games")
    .then(this.convertToJSON)
  }

  likeGame(game){
    return fetch(this.endpoint + `/games/${game.id}/like`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({likes: game.likes + 1})
    }).then(this.convertToJSON)
  }

  convertToJSON(response){
    return response.json()
  }
}