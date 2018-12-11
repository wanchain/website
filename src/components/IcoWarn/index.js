import React, { Component, PropTypes } from 'react';
import {Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import {icoMsgFunc} from 'redux/modules/icoWarning';

import comConfig from '../comConfig';
import config from '../../config';

@connect(
    state => ({ language: state.auth.language, }),
    {icoMsgFunc}
)
export default class ICOwarningModal extends Component {
  static propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    language: PropTypes.string,

    icoMsgFunc: PropTypes.func,
  };

  onCloseFunc() {
    this.props.onClose();
  }

  onCheck() {
    const str = document.getElementsByName('warn');
    const objarray = str.length;
    const warnList = [];

    for ( let ii = 0; ii < objarray; ii++ ) {
      if (str[ii].checked === true) {
        warnList.push(str[ii].value);
      }
    }

    if (objarray === warnList.length) {
      this.props.icoMsgFunc(config.app.icoBar.address);
      setTimeout(() => {
        this.props.onClose();
      }, 50);
    } else {
      const pValue = document.getElementById('pText');
      if (!pValue) {
        const theText = document.getElementById('theText');
        let pText;
        if (this.props.language === 'zn') {
          pText = '<p id="pText" >请认真阅读并勾选以上所有内容</p>';
        } else {
          pText = '<p id="pText" >Check all boxes to proceed</p>';
        }
        theText.insertAdjacentHTML('beforeBegin', pText);
      } else {
        return;
      }
    }
  }

  render() {
    const styles = require('./warning.scss');
    const {language} = this.props;

    return (
        <Modal show={this.props.show} onHide={this.props.onHide}>
            <div className={styles['astro-warning-modal']}>
              <h4>{language === 'zn' ? comConfig.IcoWarn.titleH4.zn : comConfig.IcoWarn.titleH4.en}</h4>
              <p>{language === 'zn' ? comConfig.IcoWarn.titleP.zn : comConfig.IcoWarn.titleP.en}</p>
              <hr/>
              <span className="glyphicon glyphicon-remove" id={styles['astro-warning-gly']} onClick={this.onCloseFunc.bind(this)}></span>
              <div className={styles['astro-warning-modal-button']}>
                <div className={styles['astro-warning-modal-div']}>
                  <div className="checkbox" id={styles['astro-warning-checkbox']}>
                    <label><input type="checkbox" name="warn" value="" />
                      {language === 'zn' ? comConfig.IcoWarn.checkIn.one.zn : comConfig.IcoWarn.checkIn.one.en}</label>
                  </div>
                  <div className="checkbox" id={styles['astro-warning-checkbox']}>
                    <label><input type="checkbox" name="warn" value="" />
                      {language === 'zn' ? comConfig.IcoWarn.checkIn.two.zn : comConfig.IcoWarn.checkIn.two.en}
                      <a href={config.app.files.ConfirmEn} target="_blank">
                        Risk Factor and Disclaimer Statement</a>.
                    </label>
                  </div>
                  <div className="checkbox" id={styles['astro-warning-checkbox']}>
                    <label>
                      <input type="checkbox" name="warn" value="" />Check here to comfirm that you have read and understand the
                      <a href={config.app.files.WhitepaperEN} target="_blank"> Wanchain White Paper </a>and
                      <a href={config.app.files.CommercialEN} target="_blank"> Wanchain Commecial White Paper</a>.
                    </label>
                  </div>
                  <div className="checkbox" id={styles['astro-warning-checkbox']}>
                    <label>
                      <input type="checkbox" name="warn" value="" />
                      Check here to confirm that you will not buy/sell Wanchain Tokens after the crowdsale until the Wanchain mainnet is
                      launched, which is expected in Nov, 2017.
                    </label>
                  </div>
                </div>
                {language === 'zn' && <button key="1" onClick={this.onCheck.bind(this)} id="theText">确定</button>}
                {language === 'en' && <button key="1" onClick={this.onCheck.bind(this)} id="theText">Ok</button>}
              </div>
            </div>
        </Modal>
    );
  }
}
