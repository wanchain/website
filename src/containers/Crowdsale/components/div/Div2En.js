import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import ICOwarningModal from '../../../../components/IcoWarn';
import { icoOpenFunc, icoCloseFunc, icoMsgFunc} from 'redux/modules/icoWarning';

import VideoWarningModal from '../../../../components/VideoWarn';
import { videoOpenFunc, videoCloseFunc } from 'redux/modules/videoWarning';

const mist = require('../../image/mist.png');
const bizhongchou1 = require('../../image/bizhongchou.png');
const bizhongchou2 = require('../../image/bizhongchou2.png');
const icoage1 = require('../../image/icoage.png');
const icoage2 = require('../../image/icoage2.png');
const token1 = require('../../image/token.png');
const token2 = require('../../image/token2.png');

const info1 = require('../../image/info1.png');
const info2 = require('../../image/info2.png');

const race1 = require('../../image/race1.png');
const race2 = require('../../image/race2.png');

const ren1 = require('../../image/ren.png');
const ren2 = require('../../image/ren2.png');

@connect(
    state => ({clientWidth: state.auth.clientWidth, navButton: state.auth.navButton, language: state.auth.language,
        icoMsg: state.icoWarning.icoMsg, icoWarningModal: state.icoWarning.icoWarningModal,
        videoWarningModal: state.videoWarning.videoWarningModal, }),
    {icoOpenFunc, icoCloseFunc, icoMsgFunc, videoOpenFunc, videoCloseFunc},
)
class Div2 extends React.Component {
    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,
      icoMsg: PropTypes.string,
      icoCloseFunc: PropTypes.func,
      icoOpenFunc: PropTypes.func,
      icoWarningModal: PropTypes.bool,
      icoMsgFunc: PropTypes.func,

      videoCloseFunc: PropTypes.func,
      videoOpenFunc: PropTypes.func,
      videoWarningModal: PropTypes.bool,
    };

    componentWillMount() {
      this.props.videoCloseFunc();

      this.props.icoCloseFunc();
      this.props.icoMsgFunc(null);
    }

    onClick() {
      this.props.icoOpenFunc();
    }

    onEnter(name) {
      const img = document.getElementById(name);
      if (name === 'img1') {img.src = info2;}
      if (name === 'img2') {img.src = icoage2;}
      if (name === 'img3') {img.src = token2;}

      if (name === 'img4') {img.src = bizhongchou2;}
      if (name === 'img5') {img.src = race2;}
      if (name === 'img6') {img.src = ren2;}
    }

    onLeave(name) {
      const img = document.getElementById(name);
      if (name === 'img1') {img.src = info1;}
      if (name === 'img2') {img.src = icoage1;}
      if (name === 'img3') {img.src = token1;}
      if (name === 'img4') {img.src = bizhongchou1;}
      if (name === 'img5') {img.src = race1;}
      if (name === 'img6') {img.src = ren1;}
    }

    onSubmit = () => {
      console.log('onSubmit');
      this.props.videoOpenFunc();
    };

    showWarns = () => {
      this.props.icoOpenFunc();
    };
    closeWarns = () => {
      this.props.icoCloseFunc();
    };

    showVideoWarns = () => {
      this.props.videoOpenFunc();
    };
    closeVideoWarns = () => {
      this.props.videoCloseFunc();
    };

    render() {
      const {clientWidth, icoMsg, icoWarningModal, videoWarningModal} = this.props;
      const styles = require('../div.scss');

      let theTop = {};
      if (clientWidth >= 1025) { theTop = {top: '-68px'}; }

      return (
        <div>
      <h2 className={ styles['crowd-h2']}><hr className={styles['crowd-div1HeaderImg']}/>How to Participate<hr className={styles['crowd-div1HeaderImg']}/></h2>
          <div className={styles['crowd-div2Header']}>

              <div className={styles['crowd-div2HeaderDiv']}>
                  <div className={clientWidth > 767 ? styles['crowd-div2HeaderDivLeft'] : styles['crowd-div2HeaderDivLeftEn']} style={theTop}>
                      <hr/>
                      <h4><strong>Participation Method: </strong>using Ethereum wallets</h4>
                      <small>Participants need to have their own Ethereum wallets and contribute ETH to a smart contract address. After the ICO ends, the corresponding tokens will be sent to their Ethereum wallets.</small>
                      <img src={mist} className={styles.leftImgEn}/>
                      <div className={clientWidth > 767 ? styles['crowd-div2HeaderDivLeft-Div'] : styles['crowd-div2HeaderDivLeftEn-Div']}>
                          <div className={clientWidth > 767 ? styles['crowd-div2HeaderDivLeft-Div1'] : styles['crowd-div2HeaderDivLeftEn-Div1']}>
                              <span> * </span>
                              <p>An Ethereum wallet refers to a wallet that is totally controlled by the user and can export private keys. The above Ethereum wallets are recommended.</p>
                          </div>

                          <div className={clientWidth > 767 ? styles['crowd-div2HeaderDivLeft-Div1'] : styles['crowd-div2HeaderDivLeftEn-Div1']}>
                              <span> * </span>
                              <p>Transferring ETH from accounts on third-party platforms, such as exchanges or centralized wallets, directly to smart contract addresses, is not allowed, because by doing so, the Wanchain tokens will be sent to those addresses.</p>
                          </div>
                      </div>

                      { !icoMsg &&
                      <div id={clientWidth > 767 ? styles['crowd-div2HeaderDivLeft-foot'] : styles['crowd-div2HeaderDivLeftEn-foot']}>
                          <div className={styles['submit-area']}>
                            <a className={styles['submit-button'] + ' btn'} data-toggle="modal" data-target=".bs-example-modal-lg" onClick={this.onClick.bind(this)}>Click to show the address</a>
                          </div>
                      </div>
                      }
                      { icoMsg &&
                      <div id={clientWidth > 767 ? styles['crowd-div2HeaderDivLeft-foot'] : styles['crowd-div2HeaderDivLeftEn-foot']}>
                          <p >The Ethereum address for the token distribution is: </p>
                          <div className={styles['submit-area-p']}>
                              <p className={styles['submit-button-p']}>{icoMsg}</p>

                              <p className={ styles['common-p']}>
                                  <a className={ styles['font-color'] } onClick={this.onSubmit.bind(this)}>Click to watch the Video</a>
                              </p>

                          </div>
                          <VideoWarningModal show={videoWarningModal} onHide={this.showVideoWarns.bind(this)} onClose={this.closeVideoWarns.bind(this)}/>
                      </div>
                      }
                </div>


              </div>
              <ICOwarningModal show={icoWarningModal} onHide={this.showWarns} onClose={this.closeWarns}/>
          </div>
        </div>
      );
    }
}

export default Div2;

/*
 <a href="https://ico.info/projects/17" target="_blank">
 <img src={info1} className={styles.img1} id="img1" onMouseEnter={() => this.onEnter('img1')} onMouseLeave={() => this.onLeave('img1')}/>
 </a>
 // <img src={icoage1} className={styles.img2} id="img2" onMouseEnter={() => this.onEnter('img2')} onMouseLeave={() => this.onLeave('img2')}/>
<a href="https://ico.token.im/wanchain?r=87d577bc" target="_blank">
    <img src={token1} className={styles.img3} id="img3" onMouseEnter={() => this.onEnter('img3')} onMouseLeave={() => this.onLeave('img3')}/>
</a>

 {clientWidth > 767 &&
 <p className={ styles['common-p']}>
 <a className={ styles['font-color'] } onClick={this.onSubmit.bind(this)}>Click to watch the Video</a>
 </p>
 }
 {clientWidth <= 767 &&
 <p className={ styles['common-p']}>
 <a className={ styles['font-color'] } href="/html/video.html" target="_blank">Click to watch the Video</a>
 </p>
 }

 */
