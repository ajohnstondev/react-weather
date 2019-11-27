import React, { Component } from 'react';

import './Description.scss';

class Description extends Component {
  render() {
    const description = this.props.description.toUpperCase();

    return <div className="Description">{description}</div>;
  }
}

export default Description;
