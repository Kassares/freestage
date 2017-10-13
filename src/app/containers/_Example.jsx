import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'This is message from state',
    };
  }

  render() {
    return (
      <section>
        <h1>This is example page</h1>
        <h2>{ this.state.msg }</h2>
        <Link to="/">Return to home</Link>
      </section>
    );
  }
}

export default Example;