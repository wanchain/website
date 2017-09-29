import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
// import Helmet from 'react-helmet';

const whiteList = require('../../../static/files/whiteForm.json');
import WhiteWarningModal from '../../components/WhiteWarn';
import { icoOpenFunc, icoCloseFunc, icoMsgFunc} from 'redux/modules/whiteWarning';

@connect(
    state => ({icoWarningModal: state.whiteWarning.icoWarningModal, }),
    {icoOpenFunc, icoCloseFunc, icoMsgFunc},
)
class WhiteForm extends Component {
  static propTypes = {
    icoCloseFunc: PropTypes.func,
    icoOpenFunc: PropTypes.func,
    icoWarningModal: PropTypes.bool,
    icoMsgFunc: PropTypes.func,
  };

  componentWillMount() {
    this.props.icoCloseFunc();
    this.props.icoMsgFunc(null);
  }

  onSubmit = () => {
    const {address} = this.refs;
    const str = address.value;
    const len = str.length;
    let hash = 0;
    for ( let ii = 1; ii <= len; ii++ ) {
      const char = str.charCodeAt((ii - 1));
      hash += char * Math.pow(31, (len - ii));
      hash = hash & hash;
    }
    const addressHash = whiteList[`${hash}`];
    let mesage;
    if (addressHash) {
      const results = whiteList[`${hash}`][0];
      const type = whiteList[`${hash}`][1];
      if (results === 'approval') {
        if (type === 'gold') {
          mesage = 'Congratulations! Your address is in the Gold whitelist. You can join the all phases of ICO, especially 1st phase only for the Gold whitelist';
          this.props.icoMsgFunc(mesage);
        } else if (type === 'silver') {
          mesage = 'Congratulations! Your address is in the Silver whitelist. You can join the ICO from 2nd phase.';
          this.props.icoMsgFunc(mesage);
        }
      } else if (results === 'unapproval') {
        mesage = 'Your address has been rejected by some reason. Please check your email.';
        this.props.icoMsgFunc(mesage);
      } else if (results === 'in progress') {
        mesage = 'Your information is in verification progress now. Please check later.';
        this.props.icoMsgFunc(mesage);
      }
    } else {
      this.props.icoMsgFunc('Your address is not found, please make sure the address was submitted before.');
    }

    this.props.icoOpenFunc();
  };

  showWarns = () => {
    this.props.icoOpenFunc();
  };
  closeWarns = () => {
    this.props.icoCloseFunc();
  };

  render() {
    const styles = require('./WhiteForm.scss');
    const titlePic = require('./images/img1.png');
    const bgPic = require('./images/bgImg2.jpg');

    const {icoWarningModal} = this.props;

    return (
        <div className={styles.whiteForm}>
          <div className={styles.content}>
            <img src={bgPic} className={styles.bgImg} />
            <div className={styles.contentDetail}>
              <img src={titlePic} className={styles.titleImg} />
              <input type="text" className={styles.inp} placeholder="Pls input your ETH address submited before" ref="address"/>
              <input type="button" className={styles.checkBtn} value="check" onClick={this.onSubmit.bind(this)}/>
            </div>
          </div>
          <WhiteWarningModal show={icoWarningModal} onHide={this.showWarns} onClose={this.closeWarns}/>
        </div>
    );
  }
}

export default WhiteForm;
// <Helmet script={[{src: '/whiteForm/whiteForm.js'}]}/>
// id="wufoo-zccmpzw1ve8srz"
// <h3 className={styles.h3Title}>
// <span className={styles.circular}></span>
// <span className={styles.h3Text}>Get the verification code from your Email</span>
// </h3>
