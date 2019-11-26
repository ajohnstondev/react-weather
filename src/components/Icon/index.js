import React, { Component } from 'react';

class Icon extends Component {
  render() {
    return (
      <div className="Icon">
        <img
          src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`}
        />
      </div>
    );
  }
}

export default Icon;
