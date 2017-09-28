import React, { Component, PropTypes } from 'react';
import {Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import {icoMsgFunc} from 'redux/modules/whiteWarning';

@connect(
    state => ({ icoMsg: state.whiteWarning.icoMsg, }),
    {icoMsgFunc}
)
export default class WhiteWarningModal extends Component {
  static propTypes = {
    icoMsg: PropTypes.string,
    show: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    language: PropTypes.string,

    icoMsgFunc: PropTypes.func,
  };

  onCloseFunc() {
    this.props.onClose();
  }

  render() {
    const styles = require('./warning.scss');
    const {icoMsg} = this.props;
    return (
        <Modal show={this.props.show} onHide={this.props.onHide}>
            <div className={styles['astro-warning-modal']}>
              <h4>WhiteList Check</h4>
              <hr/>
              <span className="glyphicon glyphicon-remove" id={styles['astro-warning-gly']} onClick={this.onCloseFunc.bind(this)}></span>
              <p>{icoMsg}</p>
              <div className={styles['astro-warning-modal-button']}>
                <button key="1" onClick={this.onCloseFunc.bind(this)} id="theText">Ok</button>
              </div>
            </div>
        </Modal>
    );
  }
}
