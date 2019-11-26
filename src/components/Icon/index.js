import React, { Component } from 'react';

import { icons } from '../../helpers/icons';

import './Icon.scss';

class Icon extends Component {
  render() {
    return (
      <div className="Icon">
        <img src={icons[this.props.icon]} alt={this.props.icon} />
      </div>
    );
  }
}

export default Icon;
