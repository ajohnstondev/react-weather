import React, { Component } from 'react';

import './Temperature.scss';

class Temperature extends Component {
  render() {
    const temperature = this.props.temperature;

    return (
      <div className="Temperature">
        <span className="value">{Math.round(temperature)}</span>
        <sup className="unit">°</sup>
      </div>
    );
  }
}

export default Temperature;
