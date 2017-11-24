import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import SearchBar from './SearchBar';
import List from './List';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <SearchBar />
          <List />
        </Container>
      </div>
    );
  }
}

export default App;
