import React, { Component, PropTypes } from 'react';
import {Modal} from 'react-bootstrap';
import { connect } from 'react-redux';

@connect(
    state => ({ language: state.auth.language, }),
)
export default class JoinwarningModal extends Component {
  static propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    language: PropTypes.string,
  };

  onCloseJoinFunc() {
    this.props.onClose();
  }

  render() {
    const styles = require('./warning.scss');

    return (
        <Modal show={this.props.show} onHide={this.props.onHide}>
            <div className={styles['astro-warning-modal']}>
              <h4>JOIN US</h4>
              <hr/>

              <div className={styles['astro-warning-modal-button']}>
                <div className={styles['astro-warning-modal-div']}>
                  <p>Wanchain is hiring new employees and contract workers in the following areas:<br/>
                    -Blockchain Development<br/>
                    -Leadership</p>
                  <p>
                    Working in either our Austin or Beijing is preferred; however, we are open to remote hires for the right candidates.
                  </p>
                  <p>We are also hiring new International Community Managers.</p>
                  <p>
                    Pay is competitive.<br/><br/>
                    If you are interested in working on next generation blockchain architecture and rebuilding the financial services industry please send your resume, Github repository, and/or LinkedIn profile to:
                    <span className={styles.spanColor}> info@wanchain.org</span>
                  </p>
                </div>
                <button key="1" onClick={this.onCloseJoinFunc.bind(this)} id="theText">close</button>
              </div>
            </div>
        </Modal>
    );
  }
}
