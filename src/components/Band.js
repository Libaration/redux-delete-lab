import React, { Component } from 'react';

class Band extends Component {
  render() {
    return (
      <div>
        <li>{this.props.band.name}</li>
        <button onClick={(event) => this.handleClick(event)}>delete</button>
      </div>
    );
  }
  handleClick = (event) => {
    event.preventDefault();
    this.props.removeBand(this.props.band.id);
  };
}

export default Band;
