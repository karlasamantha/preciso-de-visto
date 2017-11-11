import React, { Component } from 'react';
const request = require('superagent');

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {commits: ''}
  }

  componentDidMount() {
    request
      .get('https://api.github.com/repos/facebook/react/commits')
      .end((err, res) => {
        if (!err && res) {
          console.log('successss');
        } else {
          console.log('errorrrrrr')
        }
      })
  }

  componentWillUnmount() {}

  render() {
    return(
      <h3>{ this.state.commits }</h3>
    )
  }
}

export default List;