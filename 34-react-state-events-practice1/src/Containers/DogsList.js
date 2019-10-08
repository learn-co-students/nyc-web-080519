import React, { Component } from "react";
import DogCard from '../Components/DogCard'

class DogList extends Component {
  constructor(props) {
    super(props)
    console.log("in constructor")
    this.state = { dogs: [] }
  }

  componentDidMount() {
    console.log("in did mount")
    this.fetchDogs()
  }

  fetchDogs = () => {
    fetch("http://localhost:4000/dogs")
      .then(resp => resp.json())
      .then(data => this.setState({ dogs: data }))
  }

  render() {
    console.log("in render state: ", this.state)
    let dogs = this.state.dogs.map(dogObj => <DogCard key={dogObj.id} dog={dogObj} />)
    return (

      <div className="dogContainer">
        {this.state.dogs.length > 0 ? (<div>{dogs}</div>) : <h1>Loading</h1>}
      </div>

    );
  }
}

export default DogList;
