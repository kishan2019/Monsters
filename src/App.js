import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(responseData => this.setState({ monsters: responseData.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
      <CardList monsters={this.state.monsters} />
      </div>
    )
  };
}

export default App;
