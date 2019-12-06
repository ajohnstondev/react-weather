import React, { Component } from 'react';

import './Day.scss';

class Day extends Component {
  render() {
    const { time, temperatureHigh, temperatureMin } = this.props.day;

    const date = new Date(time * 1000);
    const day = date.toLocaleDateString('fr-FR', { weekday: 'long' });

    const temperature = (temperatureHigh + temperatureMin) / 2;

    return (
      <li className="Day">
        <div className="day">{day}</div>
        <div className="temperature">{Math.round(temperature)}</div>
      </li>
    );
  }
}

export default Day;
