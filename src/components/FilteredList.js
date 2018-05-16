import React, { Component } from 'react';
import List from './List';
import styled from 'styled-components';

import COUNTRIES_DATA from '../../src/countries.json';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 3px;
  border: 1px solid lightgray;
  font-size: 1em;
`;

class FilteredList extends Component {
  constructor() {
    super();

    this.state = {
      countries: COUNTRIES_DATA,
      filteredCountries: []
    }
  }

  componentDidMount() {
    this.setState({ filteredCountries: this.state.countries })
  }

  filterList = (event) => {
    let updatedList = this.state.countries;

    updatedList = updatedList.filter((item) => {
      return item.label.toLowerCase().includes(event.target.value.toLowerCase());
    })
    this.setState({filteredCountries: updatedList})
  }
  
  render() {
    return (
      <div className="filter-wrapper">
        <form>
          <Input 
            placeholder="Digite o nome do país" 
            type="text" 
            onChange={this.filterList} />
        </form>
        <List countries={this.state.filteredCountries}/>
      </div>
    )
  }
}

export default FilteredList;