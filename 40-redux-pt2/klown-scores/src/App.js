import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import AllScores from './components/AllScores'
import HumansScores from './containers/HumansScore'
import KlownsScores from './containers/KlownsScore'
import NewHuman from './components/NewHuman';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route path="/klowns" component={KlownsScores} />
        <Route path="/humans" component={HumansScores} />
        <Route path="/scores" component={AllScores} />
        <Route path="/newhuman" component={NewHuman} />
      </Switch>
    </div>
  );
}

export default App;
