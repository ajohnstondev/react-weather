import React, { Component } from 'react';

import './Detail.scss';

class Detail extends Component {
  render() {
    const { title, value, unit } = this.props;

    return (
      <div className="Detail">
        <div className="title">{title}</div>
        <div className="value">
          {value} {unit}
        </div>
      </div>
    );
  }
}

export default Detail;
