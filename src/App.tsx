import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isDisable, toggleState] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" disabled={isDisable}/>
        <button onClick={() => toggleState(!isDisable)}>toggle disable state</button>
      </header>
    </div>
  );
}

export default App;
