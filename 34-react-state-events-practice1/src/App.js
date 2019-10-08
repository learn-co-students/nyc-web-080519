import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DogsList from './Containers/DogsList'

class App extends Component {
  render() {
    return <DogsList />;
  }
}

export default App;
