import React, { Component } from 'react';

class Icon extends Component {
  render() {
    return (
      <div className="Icon">
        <img
          src={`https://openweathermap.org/img/wn/${this.props.icon}@2x.png`}
          alt={this.props.icon}
        />
      </div>
    );
  }
}

export default Icon;
