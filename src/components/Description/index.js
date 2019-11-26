import React, { Component } from 'react';

class Description extends Component {

  render() {
    return (
      <div className="Description">{this.props.description.toUpperCase()}</div>
    )
  }
}

export default Description;
