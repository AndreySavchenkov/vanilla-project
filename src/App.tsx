import React from 'react';
import logo from './logo.svg';
import './App.css';

const name = ['Andrew', 'Irina', 'Marat'];
const liElements = name.map((n,i) => <li key={i}>{n}</li>)

function App() {
    return (
        <div className="App">
            <ul>
              {liElements}
            </ul>
        </div>
    );
}

export default App;
