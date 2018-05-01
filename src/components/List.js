import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Ul = styled.ul`
  padding: 0;
  list-style: none;
  width: 100%;
`;

const Li = styled.li`
  border-bottom: 1px solid lightgray;
  padding: 10px 0 10px 15px;
  margin: 3px 0;
`;

class List extends Component {
  static propTypes = {
    countries: PropTypes.object
  }

  render() {
    const { countries } = this.props;
		console.log(countries[0]);
    return(
			<Ul>
				{countries.map((country, index) => {
					return (
						<Li key={index}>{country.label}</Li>
					)
				})}
			</Ul>
    )
  }
}

export default List;