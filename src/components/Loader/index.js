import React, { Component } from 'react';

import { ReactComponent as Logo } from '../../svg/puff.svg';

import './Loader.scss';

class Loader extends Component {
  render() {
    return (
      <div className="Loader">
        <p>Looking outside for you...</p>
        <p>One second...</p>
        <Logo className="spinner" />
      </div>
    );
  }
}

export default Loader;
