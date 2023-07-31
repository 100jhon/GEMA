import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumber1Change = (event) => {
    setNumber1(Number(event.target.value));
  };

  const handleNumber2Change = (event) => {
    setNumber2(Number(event.target.value));
  };

  const handleAddition = () => {
    setResult(number1 + number2);
  };

  const handleSubtraction = () => {
    setResult(number1 - number2);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <div className="App">
          <h1>Calculadora Sencilla</h1>
          <div>
            <input type="number" value={number1} onChange={handleNumber1Change} />
            <input type="number" value={number2} onChange={handleNumber2Change} />
          </div>
          <div>
            <button onClick={handleAddition}>Sumar</button>
            <button onClick={handleSubtraction}>Restar</button>
          </div>
          <div>
            <p>Resultado: {result}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
