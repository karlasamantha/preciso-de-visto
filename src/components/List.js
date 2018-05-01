import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';

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
    countries: PropTypes.array
  }

  render() {
    const { countries } = this.props;

    return(
			<Ul>
				{countries.map((country, index) => {
					return (
            <Li key={index}>
              <span>{country.label}</span>
              <span>{ country.visa ? <i className="fa fa-check-circle" aria-hidden="true"></i> : <i class="fa fa-times-circle" aria-hidden="true"></i>}</span>
            </Li>
					)
				})}
			</Ul>
    )
  }
}

export default List;