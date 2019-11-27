import React, { Component } from 'react';

import './City.scss';

class City extends Component {
  render() {
    const city = this.props.city;

    return <div className="City">{city}</div>;
  }
}

export default City;
