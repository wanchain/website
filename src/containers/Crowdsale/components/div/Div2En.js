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

@connect(
    state => ({clientWidth: state.auth.clientWidth, navButton: state.auth.navButton, language: state.auth.language, }),
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
    }

    onLeave(name) {
      const img = document.getElementById(name);
      if (name === 'img1') {img.src = info1;}
      if (name === 'img2') {img.src = icoage1;}
      if (name === 'img3') {img.src = token1;}
      if (name === 'img4') {img.src = bizhongchou1;}
      if (name === 'img5') {img.src = race1;}
    }
    render() {
      const {clientWidth} = this.props;
      const styles = require('../div.scss');

      return (
          <div className={styles['crowd-div2Header']}>
              <h2><hr className={styles['crowd-div1HeaderImg']}/>How to Participate<hr className={styles['crowd-div1HeaderImg']}/></h2>

              {clientWidth > 767 &&
              <div className={styles['crowd-div2HeaderDiv']}>
                  <div className={styles['crowd-div2HeaderDivLeft']} style={{top: '-36px'}}>
                      <hr/>
                      <h4><strong>1st Participation Method: </strong>using Ethereum wallets</h4>
                      <small>Participants need to have their own Ethereum wallets and contribute ETH to a smart contract address. After the ICO ends, the corresponding tokens will be sent to their Ethereum wallets.</small>
                      <img src={mist} className={styles.leftImgEn}/>
                      <div className={styles['crowd-div2HeaderDivLeft-Div']}>
                          <div className={styles['crowd-div2HeaderDivLeft-Div1']}>
                              <span> * </span>
                              <p>An Ethereum wallet refers to a wallet that is totally controlled by the user and can export private keys. The following Ethereum wallets are recommended.</p>
                          </div>

                          <div className={styles['crowd-div2HeaderDivLeft-Div1']}>
                              <span> * </span>
                              <p>Transferring ETH from accounts on third-party platforms, such as exchanges or centralized wallets, directly to smart contract addresses, is not allowed, because by doing so, the Wanchain tokens will be sent to those addresses.</p>
                          </div>
                      </div>

                      <div id={styles['crowd-div2HeaderDivLeft-foot']}>
                          <p>The Ethereum address for contribution will be released when the contribution contract is deployed</p>
                      </div>
                  </div>

                  <div className={styles['crowd-div2HeaderDivRight']}>
                      <hr/>
                      <h4><strong>2nd Participation Method: </strong>the following platforms</h4>
                      <small style={{marginRight: '10px'}}>The following platforms are official partners of Wanchain and will contribute on behalf of users. After the ICO ends, the platforms will send the corresponding tokens to the contributors’ Ethereum wallets.</small>

                      <div className={styles['rowd-div2HeaderDivRight-Div']}>
                          <img src={info1} className={styles.img1} id="img1" onMouseEnter={() => this.onEnter('img1')} onMouseLeave={() => this.onLeave('img1')}/>
                          <img src={icoage1} className={styles.img2} id="img2" onMouseEnter={() => this.onEnter('img2')} onMouseLeave={() => this.onLeave('img2')}/>
                          <img src={bizhongchou1} className={styles.img4} id="img4" onMouseEnter={() => this.onEnter('img4')} onMouseLeave={() => this.onLeave('img4')}/>
                          <img src={race1} className={styles.img5} id="img5" onMouseEnter={() => this.onEnter('img5')} onMouseLeave={() => this.onLeave('img5')}/>
                          <img src={token1} className={styles.img3} id="img3" onMouseEnter={() => this.onEnter('img3')} onMouseLeave={() => this.onLeave('img3')}/>
                      </div>
                  </div>
              </div>
              }

              {clientWidth <= 767 &&
              <div className={styles['crowd-div2HeaderDiv']}>
                  <div className={styles['crowd-div2HeaderDivLeftEn']}>
                      <hr/>
                      <h4><strong>1st Participation Method: </strong>using Ethereum wallets</h4>
                      <small>Participants need to have their own Ethereum wallets and contribute ETH to a smart contract address. After the ICO ends, the corresponding tokens will be sent to their Ethereum wallets.</small>
                      <img src={mist} className={styles.leftImgEn}/>
                      <div className={styles['crowd-div2HeaderDivLeftEn-Div']}>
                          <div className={styles['crowd-div2HeaderDivLeftEn-Div1']}>
                              <span> * </span>
                              <p>An Ethereum wallet refers to a wallet that is totally controlled by the user and can export private keys. The following Ethereum wallets are recommended.</p>
                          </div>

                          <div className={styles['crowd-div2HeaderDivLeftEn-Div1']}>
                              <span> * </span>
                              <p>Transferring ETH from accounts on third-party platforms, such as exchanges or centralized wallets, directly to smart contract addresses, is not allowed, because by doing so, the Wanchain tokens will be sent to those addresses.</p>
                          </div>
                      </div>
                      <p id={styles['crowd-div2HeaderDivLeftEn-foot']}>The Ethereum address for contribution will be released when the contribution contract is deployed</p>
                  </div>

                  <div className={styles['crowd-div2HeaderDivRightEn']}>
                      <hr/>
                      <h4><strong>2nd Participation Method: </strong>the following platforms</h4>
                      <small>The following platforms are official partners of Wanchain and will contribute on behalf of users. After the ICO ends, the platforms will send the corresponding tokens to the contributors’ Ethereum wallets.</small>
                       <div className={styles['rowd-div2HeaderDivRightEn-Div']}>
                           {/* <h2>Released Later</h2> */}
                           <img src={info1} className={styles.img1} id="img1" onMouseEnter={() => this.onEnter('img1')} onMouseLeave={() => this.onLeave('img1')}/>
                           <img src={icoage1} className={styles.img2} id="img2" onMouseEnter={() => this.onEnter('img2')} onMouseLeave={() => this.onLeave('img2')}/>
                           <img src={bizhongchou1} className={styles.img4} id="img4" onMouseEnter={() => this.onEnter('img4')} onMouseLeave={() => this.onLeave('img4')}/>
                           <img src={race1} className={styles.img5} id="img5" onMouseEnter={() => this.onEnter('img5')} onMouseLeave={() => this.onLeave('img5')}/>
                           <img src={token1} className={styles.img3} id="img3" onMouseEnter={() => this.onEnter('img3')} onMouseLeave={() => this.onLeave('img3')}/>
                       </div>
                  </div>
              </div>
              }
          </div>
      );
    }
}

export default Div2;

