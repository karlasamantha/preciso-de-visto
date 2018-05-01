import React, { Component } from 'react';
import COUNTRIES_DATA from '../../src/countries.json';

class List extends Component {
  constructor() {
    super();

    this.state = {
      countries: COUNTRIES_DATA
    }
	}

  render() {
    const { countries } = this.state;
		console.log(countries[0]);
    return(
			<ul>
				{countries.map((country, index) => {
					return (
						<li key={index}>{country.label}</li>
					)
				})}
			</ul>
    )
  }
}

export default List;