import React, { Component } from 'react';
import List from './List';
import styled from 'styled-components';

import COUNTRIES_DATA from '../../src/countries.json';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 3px;
  border: 1px solid lightgray;
  width: 500px;
  font-size: 1em;
`;

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      countries: COUNTRIES_DATA
    }
  }
  
  render() {
    return (
      <div className="filter-wrapper">
        <form>
          <Input placeholder="Digite o nome do país" type="text" />
        </form>
        <List countries={this.state.countries}/>
      </div>
    )
  }
}

export default SearchBar;