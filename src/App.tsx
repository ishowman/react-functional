import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button'

import {ThemeContext, themes} from './contexts/theme.context'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ThemeContext.Provider value={themes.dark} >
        <Button > dark </Button>
      </ThemeContext.Provider>
      <Button> light </Button> {/* default context value */}
    </div>
  );
}

export default App;
