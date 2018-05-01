import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import FilteredList from './FilteredList';
import Container from './Container';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <FilteredList />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
