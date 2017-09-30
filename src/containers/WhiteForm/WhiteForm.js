import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
// import Helmet from 'react-helmet';

const whiteList = require('../../../static/upload/whiteForm.json');
import WhiteWarningModal from '../../components/WhiteWarn';
import { whiteOpenFunc, whiteCloseFunc, whiteMsgFunc} from 'redux/modules/whiteWarning';

@connect(
    state => ({whiteWarningModal: state.whiteWarning.whiteWarningModal, }),
    {whiteOpenFunc, whiteCloseFunc, whiteMsgFunc},
)
class WhiteForm extends Component {
  static propTypes = {
    whiteCloseFunc: PropTypes.func,
    whiteOpenFunc: PropTypes.func,
    whiteWarningModal: PropTypes.bool,
    whiteMsgFunc: PropTypes.func,
  };

  componentWillMount() {
    this.props.whiteCloseFunc();
    this.props.whiteMsgFunc(null);
  }

  onSubmit = () => {
    const {address} = this.refs;
    const str = address.value;
    const len = str.length;
    let hash = 0;
    for ( let ii = 1; ii <= len; ii++ ) {
      const char = str.toLowerCase.charCodeAt((ii - 1));
      hash += char * Math.pow(31, (len - ii));
      hash = hash & hash;
    }
    const addressHash = whiteList[`${hash}`];
    let mesage;
    if (addressHash) {
      let results = whiteList[`${hash}`][0];
      let type = whiteList[`${hash}`][1];

      results = results.toLowerCase();
      type = type.toLowerCase();
      console.log('result', results);
      console.log('type', type);
      if (results === 'approval') {
        if (type === 'gold') {
          mesage = 'Congratulations! Your address is in the Gold whitelist. You can join both phases of ICO (Gold and Silver). As Gold you will be have up to 24 hours on the first day of the ICO, along with an individual cap to contribute. After 24 hours, Gold may contribute along with Silver until all tokens are sold.';
          this.props.whiteMsgFunc(mesage);
        } else if (type === 'silver') {
          mesage = 'Congratulations! Your address is in the Silver whitelist. You can contribute in the second phase of the ICO (24 hours after Gold).';
          this.props.whiteMsgFunc(mesage);
        }
      } else if (results === 'unapproval') {
        mesage = 'Your address has not been whitelisted. Please check your email.';
        this.props.whiteMsgFunc(mesage);
      } else if (results === 'in progress') {
        mesage = 'Your registration form is currently in the verification process. Please check back later.';
        this.props.whiteMsgFunc(mesage);
      }
    } else {
      this.props.whiteMsgFunc('Your address has not been found, please make sure the correct ethereum address was registered.');
    }

    this.props.whiteOpenFunc();
  };

  showWarns = () => {
    this.props.whiteOpenFunc();
  };
  closeWarns = () => {
    this.props.whiteCloseFunc();
  };

  render() {
    const styles = require('./WhiteForm.scss');
    const titlePic = require('./images/img1.png');
    const bgPic = require('./images/bgImg2.jpg');

    const {whiteWarningModal} = this.props;

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
          <WhiteWarningModal show={whiteWarningModal} onHide={this.showWarns} onClose={this.closeWarns}/>
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
