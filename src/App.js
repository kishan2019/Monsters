import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(responseData => this.setState({ monsters: responseData.data }));
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}
      </div>
    )
  };
}

export default App;
