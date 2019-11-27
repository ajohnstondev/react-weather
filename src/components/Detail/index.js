import React, { Component } from 'react';

import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <div className="Detail">
        <div className="title">{this.props.title}</div>
        <div className="value">
          {this.props.value} {this.props.unit}
        </div>
      </div>
    );
  }
}

export default Detail;
