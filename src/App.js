import React, { Component } from 'react'
import './App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      name: 'Christian Cartes'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="hello-world">
            HOLA <span className="user-name">{this.state.name}</span>
          </p>
          <button onClick={() => this.setState({ name: 'Lur rey de Omicron' })}>
            Saludos a Lur
          </button>
        </header>
      </div>
    );
  }
}
