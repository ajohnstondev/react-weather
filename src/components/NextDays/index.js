import React, { Component } from 'react';

import Day from '../Day';

class NextDays extends Component {
  render() {
    const { days } = this.props;

    const listItems = days.map((day, key) => <Day key={key} day={day} />);

    return (
      <div className="NextDays">
        <ol>{listItems}</ol>
      </div>
    );
  }
}

export default NextDays;
