import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import KlownContainer from './containers/KlownContainer'
import HumanContainer from './containers/HumanContainer'
import Welcome from './components/Welcome'
import FoOhFo from './components/FoOhFo'

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
    searchTerm: ""
  }


  componentDidMount() {
    this.fetchHumans()
    this.fetchKlowns()

  }

  //GET Requests
  fetchKlowns = () => {

    fetch("http://localhost:4001/klowns")
      .then(resp => resp.json())
      .then(data => this.setState({
        klowns: data
      }))
  }
  fetchHumans = () => {

    fetch("http://localhost:4001/humans")
      .then(resp => resp.json())
      .then(data => this.setState({
        humans: data
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
    // console.log("why isn't this working? name:  ", name)
    let person = newArray.find(human => human.name === name)
    person.health = person.health - 5
    this.setState({
      humans: newArray
    })
  }

  //Form Submit Functions
  klownSubmitHandler = (klown) => {
    console.log("argument: ", klown)
    this.persistKlown(klown)
    // [[our old array], klown ] => [ all the elements of old array, klown ]
    // let newArray = [klown, ...this.state.klowns]
    // this.setState({
    //   klowns: newArray
    // })

  }

  persistKlown = (klown) => {
    fetch("http://localhost:4001/klowns", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(
        klown
      )
    })
      .then(resp => resp.json())
      .then(klown => {
        let newArray = [klown, ...this.state.klowns]
        this.setState({
          klowns: newArray
        })
      }

      )
  }

  //Search Form onChange function
  searchChangeHandler = (e) => {
    let searchTerm = e.target.value
    this.setState({
      searchTerm
    })
  }
  filterKlowns = () => {
    return this.state.klowns.filter(klownObj => klownObj.name.toUpperCase().includes(this.state.searchTerm.toUpperCase()))

  }


  render() {
    return (
      <div className="App">
        {this.state.klowns.length > 0 ? (<div>
          <Switch>
            <Route path="/welcome" component={Welcome} />
            <Route path="/humans" render={() => <HumanContainer humans={this.state.humans} attackClickHandler={this.decreaseKlownScore} score={this.state.humanScore} increaseHumanScore={this.increaseHumanScore} klowns={[this.state.klowns[0].name, this.state.klowns[1].name]} attackKlown={this.attackHuman} />} />
            <Route path="/klowns" render={() => <KlownContainer searchChangeHandler={this.searchChangeHandler} searchTerm={this.state.searchTerm} submitHandler={this.klownSubmitHandler} klowns={this.filterKlowns()} increaseKlownScore={this.increaseKlownScore} score={this.state.klownScore} attackClickHandler={this.decreaseHumanScore} humans={[this.state.humans[0].name, this.state.humans[1].name]} attackHuman={this.attackHuman} />} />
            <Route path="/" render={(props) => {
              console.log("router props: ", props)


              return <FoOhFo />
            }} />
          </Switch>

        </div>) : (<h1>Loading</h1>)}

      </div>
    );
  }

}

export default App;

