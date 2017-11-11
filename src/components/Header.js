import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
`;

const Subtitle = styled.h2`
  font-size: 1em;
  text-align: center;
`;

const Wrapper = styled.section`
  padding: 3em;
  background: lightgray;
`; 

class Header extends Component {
  render() {
    return(
      <Wrapper>
        <Title>
          Preciso de visto?
        </Title>
        <Subtitle>
          Lista dos países que exigem visto 
        </Subtitle>
      </Wrapper>
    )
  }
}

export default Header;