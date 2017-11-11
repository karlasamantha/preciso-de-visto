import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  border-radius: 3px;
  border: 1px solid lightgray;
  width: 50%;
  font-size: 1em;
`;

class SearchBar extends Component {
  render() {
    return (
      <Input placeholder="Digite o nome do país" type="text" />
    )
  }
}

export default SearchBar;