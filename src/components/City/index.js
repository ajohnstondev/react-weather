import React, { Component } from 'react';

import './City.scss';

class City extends Component {

  render() {
    return (
      <div className="City">{this.props.city}</div>
    )
  }
}

export default City;
