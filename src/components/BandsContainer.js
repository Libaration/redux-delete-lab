import React, { Component } from 'react';
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.renderBands()}
      </div>
    );
  }

  renderBands = () => {
    let bands = this.props.bands.map((band) => {
      return (
        <Band band={band} key={band.id} removeBand={this.props.removeBand} />
      );
    });
    return bands;
  };
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = (dispatch) => ({
  addBand: (name) => dispatch({ type: 'ADD_BAND', name }),
  removeBand: (id) => dispatch({ type: 'DELETE_BAND', id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
