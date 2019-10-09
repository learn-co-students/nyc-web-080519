import React from 'react';
import './App.css';
import KlownContainer from './containers/KlownContainer'
import HumanContainer from './containers/HumanContainer'

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     klowns: [],
  //     humans: []
  //   }
  // }

  state = {
    klowns: [],
    humans: [],
    klownScore: 0,
    humanScore: 0,
  }


  componentDidMount() {

    fetch("http://localhost:4001/characters")
      .then(resp => resp.json())
      .then(data => this.setState({
        klowns: data.klowns,
        humans: data.humans
      }))

  }

  //functions responsible for changing Klown score
  increaseKlownScore = () => {
    this.setState({
      klownScore: this.state.klownScore + 1
    })
  }

  decreaseKlownScore = () => {
    console.log("decrease")
    this.setState({
      klownScore: this.state.klownScore - 1
    })
  }


  // functions responsible for changing Human score
  increaseHumanScore = () => {
    this.setState({
      humanScore: this.state.humanScore + 1
    })
  }

  decreaseHumanScore = () => {
    console.log("decrease")
    this.setState({
      humanScore: this.state.humanScore - 1
    })
  }

  attackHuman = (name) => {
    let newArray = [...this.state.humans]
    let person = newArray.find(human => human.name === name)
    person.health = person.health - 5

    this.setState({
      humans: newArray
    })
  }



  render() {
    console.log("app state: ", this.state)
    return (
      <div className="App">
        {this.state.klowns.length > 0 ? (<div>
          <KlownContainer klowns={this.state.klowns} increaseKlownScore={this.increaseKlownScore} score={this.state.klownScore} attackClickHandler={this.decreaseHumanScore} humans={[this.state.humans[0].name, this.state.humans[1].name]} attackHuman={this.attackHuman} />
          <HumanContainer humans={this.state.humans} attackClickHandler={this.decreaseKlownScore} score={this.state.humanScore} increaseHumanScore={this.increaseHumanScore} klowns={[this.state.klowns[0].name, this.state.klowns[1].name]} attackKlown={this.attackHuman} />


        </div>) : (<h1>Loading</h1>)}

      </div>
    );
  }

}

export default App;

