import React from 'react';
import './App.css';

function App() {
  const name = 'Christian Cartes';
  return (
    <div className="App">
      <header className="App-header">
        <p className="hello-world">
          HOLA MUNDO <span className="user-name">{name}</span>
        </p>
      </header>
    </div>
  );
}

export default App;
