import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

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
        }),
)
class Div2 extends React.Component {
    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,
    };

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

    render() {
      const {clientWidth} = this.props;
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
                </div>
              </div>
          </div>
        </div>
      );
    }
}

export default Div2;

