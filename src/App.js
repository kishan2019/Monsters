import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(responseData => this.setState({ monsters: responseData.data }))
      .catch(error => console.log(error));
  }

  eventHandler = event => {
    this.setState({ searchField: event.target.value });
  }

  render() {

    const { monsters, searchField } = this.state; 
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return (
      <div className="App">
        <SearchBox 
          placeholder="Search Monster"
          eventHandler={this.eventHandler} />
        
        <CardList monsters={filteredMonster} />
      </div>
    )
  };
}

export default App;
