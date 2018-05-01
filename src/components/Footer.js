import React, { Component } from 'react';
import styled from 'styled-components';

const Rodape = styled.footer`
  width: 100%;
  padding: 5px 20px;
  background-color: #fcfdff;
  color: #b0b2b7;
`;

class Footer extends Component {
  render() {
    const date = new Date();
    const year = date.getFullYear();

    return(
      <Rodape>
        <p>{year} - Made with &#10084;</p>
      </Rodape>
    )
  }
}

export default Footer;