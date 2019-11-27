import React, { Component } from 'react';

import { icons } from '../../helpers/icons';

import './Icon.scss';

class Icon extends Component {
  render() {
    const icon = this.props.icon;

    return (
      <div className="Icon">
        <img src={icons[icon]} alt={icon} />
      </div>
    );
  }
}

export default Icon;
