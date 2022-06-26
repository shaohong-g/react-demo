import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Fib from './components/Fib'
import Form from './components/Form'

function App() {

  const [num, setNum] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Form num = {num} changeNum = {setNum} ></Form>

        <Fib num = {num}></Fib>

      </header>
    </div>
  );
}

export default App;
