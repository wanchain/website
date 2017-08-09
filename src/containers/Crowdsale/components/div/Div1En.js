import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

@connect(
    state => ({clientWidth: state.auth.clientWidth, navButton: state.auth.navButton, language: state.auth.language, }),
)
class Div1En extends React.Component {
    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,
    };

    render() {
      const {clientWidth} = this.props;
      const styles = require('../div.scss');
      const mark = require('../../image/mark.png');

      return (
          <div className={styles['crowd-div1Header'] + ' container'}>
              <h2> <hr className={styles['crowd-div1HeaderImg']}/> Distribution Schedule<hr className={styles['crowd-div1HeaderImg']}/></h2>
              <table className="table table-striped">
                  <tbody>
                  <tr>
                      <td> 1 </td>
                      <td><h4>15% off</h4></td>
                      <td>Sep 06, 2017 12:00 -- Sep 13, 2017 11:59 <small>UTC</small></td>
                  </tr>
                  <tr>
                      <td> 2 </td>
                      <td><h4>5% off</h4></td>
                      <td>Sep 13, 2017 12:00 -- Sep 20, 2017 11:59 <small>UTC</small></td>
                  </tr>
                  <tr>
                      <td> 3 </td>
                      <td><h4>Original Cost</h4></td>
                      <td>Sep 20, 2017 12:00 -- Sep 27, 2017 11:59 <small>UTC</small></td>
                  </tr>
                  </tbody>
              </table>

              <div className={styles['crowd-div1HeaderDiv']}>
                  <h4><img src={mark}/>notes:</h4>
                  {clientWidth > 767 &&
                  <div>
                      <div className={styles['crowd-div4Header-pot']}></div>
                      <p> Before the ICO starts, exchange ratio based on Ether will be published in accordance with the Ether price.</p><br/>
                      <div className={styles['crowd-div4Header-pot']}></div>
                      <p>When either 107.1 million tokens are sold or when the crowd-funding time ends, the smart contract will be automatically closed.</p><br/>
                      <div className={styles['crowd-div4Header-pot']}></div>
                      <p>The minimum contribution limit for each transaction is 0.1ETH. </p><br/>
                      <div className={styles['crowd-div4Header-pot']}></div>
                      <p>After the crowd-funding ends, the smart contracts will allocate the tokens to every crowd-funding address,</p><br/>
                      <p> &nbsp;&nbsp;&nbsp;&nbsp;and these tokens will be transferred via Ethereum wallets.</p><br/>
                      <div className={styles['crowd-div4Header-pot']}></div>
                      <p>When Wanchain is live, users may exchange their tokens for Wancoins at a 1:1 ratio. Wanchain version 1.0 is expected to go online in November 2017.</p>
                  </div>
                  }

                  {clientWidth <= 767 &&
                  <div>
                      <div className={styles['crowd-div4Header-pot']}></div>
                      <p> Before the ICO starts, exchange ratio based on Ether will be published in accordance with the Ether price.</p>
                      <div className={styles['crowd-div4Header-pot']}></div>
                      <p> When either 107.1 million tokens are sold or when the crowd-funding time ends, the smart contract will be automatically closed.</p>
                      <div className={styles['crowd-div4Header-pot']}></div>
                      <p>The minimum contribution limit for each transaction is 0.1ETH. </p>
                      <div className={styles['crowd-div4Header-pot']}></div>
                      <p> After the crowd-funding ends, the smart contracts will allocate the tokens to every crowd-funding address, and these tokens will be transferred via Ethereum wallets.</p>
                      <div className={styles['crowd-div4Header-pot']}></div>
                      <p> When Wanchain is live, users may exchange their tokens for Wancoins at a 1:1 ratio. Wanchain version 1.0 is expected to go online in November 2017.</p>
                  </div>
                  }
               </div>
          </div>
      );
    }
}

export default Div1En;


// <img src={line} className="div1HeaderImg" />
