import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Samp } from './features/samp/Samp';
import AddStudent from './features/samp/AddStudent';
import AddScores from './features/samp/AddScores';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddStudent></AddStudent>
        <br></br>
        <hr></hr>
        <AddScores/>
        <hr></hr>
        <Samp></Samp>
      </header>
    </div>
  );
}

export default App;
