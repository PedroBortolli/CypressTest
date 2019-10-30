import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <h1>Testing Cypress</h1>
      <p id="counter">Counter: {counter}</p>
      <button id="add" onClick={() => setCounter(counter + 1)}>Add</button>
      <button id="subtract" onClick={() => setCounter(counter - 1)}>Subtract</button>
    </div>
  );
}

export default App;
