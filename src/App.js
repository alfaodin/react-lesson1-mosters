import React, { Component } from 'react'
import './App.css';
import SearchBox from './components/seach-box/search-box.component';
import MonsterList from './components/monster-list/monster-list.component';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      searchParamer: '',
      monsters: [
        {
          id: 1,
          name: 'Christian',
          email: 'test@test.com'
        },
        {
          id: 2,
          name: 'Chago',
          email: 'chago@test.com'
        },
        {
          id: 3,
          name: 'Cijifredo',
          email: 'ciji@test.com'
        },
        {
          id: 4,
          name: 'Saul',
          email: 'saul@test.com'
        },

      ]
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => this.setState({ monsters: users }));
  }

  searchCallback = (searchParam) => {
    this.setState({ searchParamer: searchParam }, () => console.log(`HOLA MUNOD ${this.state.searchParamer}`));
  };

  render() {
    const { searchParamer, monsters } = this.state;

    const monsterList = monsters.filter(data => data.name.toLowerCase().includes(searchParamer.toLowerCase()))

    return (
      <div className="App">

        <div className="header-container">
          <h1 className="app-title">Listado de Monstruos</h1>
          <SearchBox onSearchCallback={this.searchCallback} placeHolder='Ingresa tus búsqueda'></SearchBox>
        </div>

        <MonsterList monsterList={monsterList} />
      </div>
    );
  }
}
