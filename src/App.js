import React, { Component } from 'react'
import './App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      name: 'Christian Cartes',
      count: 0,
    };
    this.increaseCounter0 = this.increaseCounter0.bind(this);
  }

  increaseCounter0() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  increaseCounter1 = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  increaseCounter2 = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log(this.state.count);
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="hello-world">
            HOLA <span className="user-name">{this.state.name}</span>
          </p>
          <div className="actions-button">
            <button onClick={() => this.setState({ name: 'Lur rey de Omicron' })}>
              Saludos a Lur
            </button>
            <button onClick={this.increaseCounter0}>
              INCREMENTAR
            </button>
          </div>
        </header>

        <div className="contador">
          {this.state.count}
        </div>
      </div>
    );
  }
}
