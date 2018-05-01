import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  text-transform: uppercase;
  font-weight: 900;
  margin: 20px 0;
`;

const Subtitle = styled.h2`
  font-size: 1em;
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2em;
  background: #aeae;
`; 

class Header extends Component {
  render() {
    return(
      <Wrapper>
        <Title>
          Preciso de visto?
        </Title>
        <Subtitle>
          Lista dos países que exigem visto brasileiro para turismo
        </Subtitle>
      </Wrapper>
    )
  }
}

export default Header;