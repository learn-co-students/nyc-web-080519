import React from 'react';
import './App.css';
import KlownContainer from './containers/KlownContainer'
import HumanContainer from './containers/HumanContainer'

function App() {
  return (
    <div className="App">
      <KlownContainer /> {/*create an h1 with inner text Klown Container*/}
      <HumanContainer />
    </div>
  );
}

export default App;

