import React, { Component, PropTypes } from 'react';
import {Modal} from 'react-bootstrap';

import './warning.scss'

export default class WarningModal extends Component {
  static propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    message: PropTypes.string,
  };

  render() {

    return (
        <Modal show={this.props.show} onHide={this.props.onHide}>
            <div className="astro-warning-modal">
              <h4>Warning</h4>
              <div className="astro-warning-modal-button">
                <p>{this.props.message}</p>
                <button key="1" onClick={this.props.onClose}>Close</button>
              </div>
            </div>
        </Modal>
    );
  }
}
