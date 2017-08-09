import React, { Component, PropTypes } from 'react';
import {Modal} from 'react-bootstrap';

export default class WarningModal extends Component {
  static propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    message: PropTypes.string,
  };

  render() {
    const styles = require('./warning.scss');

    return (
        <Modal show={this.props.show} onHide={this.props.onHide}>
            <div className={styles['astro-warning-modal']}>
              <h4>Warning</h4>
              <div className={styles['astro-warning-modal-button']}>
                <p>{this.props.message}</p>
                <button key="1" onClick={this.props.onClose}>Close</button>
              </div>
            </div>
        </Modal>
    );
  }
}
