import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import KlownContainer from './containers/KlownContainer'
import HumanContainer from './containers/HumanContainer'
import Welcome from './components/Welcome'
import FoOhFo from './components/FoOhFo'
import Signup from './components/Signup'
import Login from './components/Login'

class App extends React.Component {

  state = {
    klownScore: 0,
    humanScore: 0,
    user: {}
  }

  componentDidMount() {
    console.log("localStorage", localStorage.token)
    if (localStorage.token) {
      let token = localStorage.token
      fetch("http://localhost:3000/api/v1/autologin", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          accepts: "application/json",
          Authorization: `${token}`
        }
      })
        .then(resp => resp.json())
        .then(user => this.setState({ user }))
    }
    console.log("test")
  }

  //functions responsible for changing Klown score
  increaseKlownScore = () => {
    this.setState({
      klownScore: this.state.klownScore + 1
    })
  }

  decreaseKlownScore = () => {
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
    this.setState({
      humanScore: this.state.humanScore - 1
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
  signup = (userInfo) => {
    console.log("submitting")
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => resp.json())
      .then(response => {
        localStorage.setItem("token", response.token)
        this.setState({ user: response.user })
      })
  }
  login = (userInfo) => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(resp => resp.json())
      .then(response => {
        localStorage.setItem("token", response.token)
        this.setState({
          user: response.user
        }, () => this.props.history.push("/klowns"))
      })
  }


  render() {
    console.log("App Props: ", this.props)
    return (
      <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route path="/signup" render={() => <Signup submitHandler={this.signup} />} />
        <Route path="/login" render={() => <Login submitHandler={this.login} />} />
        <Route path="/humans" render={() => <HumanContainer humans={this.state.humans} attackClickHandler={this.decreaseKlownScore} score={this.state.humanScore} increaseHumanScore={this.increaseHumanScore} attackKlown={this.attackHuman} />} />
        <Route path="/klowns" render={() => <KlownContainer searchChangeHandler={this.searchChangeHandler} searchTerm={this.state.searchTerm} submitHandler={this.klownSubmitHandler} increaseKlownScore={this.increaseKlownScore} score={this.state.klownScore} attackClickHandler={this.decreaseHumanScore} attackHuman={this.attackHuman} />} />
        <Route path="/" component={FoOhFo} />
      </Switch>
    );
  }

}

export default withRouter(App);

