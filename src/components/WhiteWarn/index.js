import React, { Component, PropTypes } from 'react';
import {Modal} from 'react-bootstrap';
import { connect } from 'react-redux';

@connect(
    state => ({ whiteMsg: state.whiteWarning.whiteMsg, }),
)
export default class WhiteWarningModal extends Component {
  static propTypes = {
    whiteMsg: PropTypes.string,
    show: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    language: PropTypes.string,
  };

  onCloseFunc() {
    this.props.onClose();
  }

  render() {
    const styles = require('./warning.scss');
    const {whiteMsg} = this.props;
    return (
        <Modal show={this.props.show} onHide={this.props.onHide}>
            <div className={styles['astro-warning-modal']}>
              <h4>WhiteList Check</h4>
              <hr/>
              <span className="glyphicon glyphicon-remove" id={styles['astro-warning-gly']} onClick={this.onCloseFunc.bind(this)}></span>
              <p>{whiteMsg}</p>
              <div className={styles['astro-warning-modal-button']}>
                <button key="1" onClick={this.onCloseFunc.bind(this)} id="theText">Ok</button>
              </div>
            </div>
        </Modal>
    );
  }
}
