import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

// import { changeLanguage } from '../../../../store/lang';
// import '../div.scss';
//
// import bizhongchou1 from '../../../../image/bizhongchou.png';
// import bizhongchou2 from '../../../../image/bizhongchou2.png';
//
// import icoage1 from '../../../../image/icoage.png';
// import icoage2 from '../../../../image/icoage2.png';
//
// import token1 from '../../../../image/token.png';
// import token2 from '../../../../image/token2.png';

@connect(
    state => ({clientWidth: state.auth.clientWidth, navButton: state.auth.navButton, language: state.auth.language, }),
)
class Div2 extends React.Component {
    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,
    };

    // onEnter(name) {
    //     const img = document.getElementById(name);
    //     if (name === 'img1') {img.src = bizhongchou2;}
    //     if (name === 'img2') {img.src = icoage2;}
    //     if (name === 'img3') {img.src = token2;}
    // }
    //
    // onLeave(name) {
    //     const img = document.getElementById(name);
    //     if (name === 'img1') {img.src = bizhongchou1;}
    //     if (name === 'img2') {img.src = icoage1;}
    //     if (name === 'img3') {img.src = token1;}
    // }
    render() {
      const {clientWidth} = this.props;
      const styles = require('../div.scss');

      return (
          <div className={styles['crowd-div2Header']}>
              <h2><hr className={styles['crowd-div1HeaderImg']}/>How to Participate<hr className={styles['crowd-div1HeaderImg']}/></h2>

              {clientWidth > 767 &&
              <div className={styles['crowd-div2HeaderDiv']}>
                  <div className={styles['crowd-div2HeaderDivLeft']} style={{top: '-16px'}}>
                      <hr/>
                      <h4><strong>1st Participation Method: </strong>using Ethereum wallets</h4>
                      <small>Participants need to have their own Ethereum wallets and contribute ETH to a smart contract address. After the ICO ends, the corresponding tokens will be sent to their Ethereum wallets.</small>

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
                          <h2>Released Later</h2>
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
                           <h2>Released Later</h2>
                       </div>
                  </div>
              </div>
              }
          </div>
      );
    }
}

export default Div2;

// {/*<img src={bizhongchou1} id="img1" onMouseEnter={() => this.onEnter('img1')} onMouseLeave={() => this.onLeave('img1')}/>*/}
// {/*<img src={icoage1} id="img2" onMouseEnter={() => this.onEnter('img2')} onMouseLeave={() => this.onLeave('img2')}/>*/}
// {/*<img src={token1} id="img3" onMouseEnter={() => this.onEnter('img3')} onMouseLeave={() => this.onLeave('img3')}/>*/}
