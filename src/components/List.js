import React, { Component } from 'react';

const request = require('superagent');

class List extends Component {
  componentDidMount() {
    request
      .get('https://restcountries.eu/rest/v2/all')
      .end((err, res) => {
        if (!err && res) {
          console.log('successss');
          let data = Object.assign({}, res.body);
          console.log(data)

        } else {
          console.log('errorrrrrr')
        }
      })
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