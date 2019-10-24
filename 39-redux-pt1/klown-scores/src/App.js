import React from 'react';
import './App.css';
import AllScores from './components/AllScores'
import HumansScores from './components/HumansScore'
import KlownsScores from './components/KlownsScore'

function App() {
  return (
    <div className="App">
      <AllScores otherKlown="Joker" />
      <HumansScores />
      <KlownsScores />
    </div>
  );
}

export default App;
