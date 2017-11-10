import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import SearchBar from './SearchBar';
import List from './List';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <List />
      </div>
    );
  }
}

export default App;
