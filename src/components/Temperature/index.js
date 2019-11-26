import React, { Component } from 'react';

import './Temperature.scss';

class Temperature extends Component {

  render() {
    return (
      <div className="Temperature">
        <span className="value">{Math.round(this.props.temperature)}</span>
        <sup className="unit">°</sup>
      </div>
    )
  }
}

export default Temperature;
