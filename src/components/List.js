import React, { Component } from 'react';


class List extends Component {
  componentDidMount() {
    
  }

  componentWillUnmount() {}

  render() {
    return(
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
    )
  }
}

export default List;