import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Modal} from './components/Modal'
import {Button, combineBtn} from './components/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Modal title="modal title" footer={<Button type="ppp">{123}-<Button type="aaa"/></Button>} />
        <Modal title="modal title" footer={combineBtn(<Button type="ppp">1024</Button>)} />
      </header>
    </div>
  );
}

export default App;
