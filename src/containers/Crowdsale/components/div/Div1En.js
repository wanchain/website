import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import config from '../../../../config';

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
                  <p>For participants in the gold whitelist with a cap at 6.8 ETH
                      <span className="glyphicon glyphicon-arrow-down" aria-hidden="true" style={{paddingLeft: '10px'}}></span>
                  </p>
                  <tr>
                      <td style={{verticalAlign: 'middle'}}> 1 </td>
                      <td><h4 style={{marginRight: '40px'}}>{config.app.ICOEn[0]}</h4></td>
                      <td style={{verticalAlign: 'middle'}}>Oct 03, 2017 16:00--Oct 04, 2017 15:59 <small>UTC</small></td>
                  </tr>
                  </tbody>
              </table>
            <table className="table table-striped">
              <tbody>
                  <p className={styles['table-p']}>For all whitelisted participants (gold and silver) with no cap
                      <span className="glyphicon glyphicon-arrow-down" aria-hidden="true" style={{paddingLeft: '10px'}}></span>
                  </p>
                  <tr>
                      <td style={{verticalAlign: 'middle'}}> 2 </td>
                      <td><h4>{config.app.ICOEn[0]}</h4></td>
                      <td style={{verticalAlign: 'middle'}}>Oct 04, 2017 16:00--Oct 11, 2017 15:59 <small>UTC</small></td>
                  </tr>
                  <tr>
                      <td style={{verticalAlign: 'middle'}}> 3 </td>
                      <td><h4>{config.app.ICOEn[1]}</h4></td>
                      <td style={{verticalAlign: 'middle'}}>Oct 11, 2017 16:00--Oct 18, 2017 15:59 <small>UTC</small></td>
                  </tr>
                  <tr>
                    <td style={{verticalAlign: 'middle'}}> 4 </td>
                    <td><h4>{config.app.ICOEn[2]}</h4></td>
                    <td style={{verticalAlign: 'middle'}}>Oct 18, 2017 16:00--Oct 25, 2017 15:59 <small>UTC</small></td>
                  </tr>
                  </tbody>
              </table>

              <div className={styles['crowd-div1HeaderDiv']}>
                  <h4><img src={mark}/>notes:</h4>
                  <div>
                      {/* <div className={styles['crowd-div4Header-pot']}></div> */}
                      {/* <p> Before the ICO starts, exchange ratio based on Ether will be published in accordance with the Ether price.</p><br/> */}
                      <div className={styles['crowd-div4Header-pot']}></div>
                      <p>When either 107.1 million tokens are sold or when the crowd-funding time ends, the smart contract will be automatically closed.</p>
                      {clientWidth > 767 ? <br/> : ''}
                      <div className={styles['crowd-div4Header-pot']}></div>
                      <p>The minimum and maximum contribution limit for each transaction are 0.1ETH and 65 ETH.</p>
                      {clientWidth > 767 ? <br/> : ''}
                      <div className={styles['crowd-div4Header-pot']}></div>
                      <p >There will be a maximum limit of 50 GWEI and a recommended gas limit of 120,000 in the second round of the ICO (after the 24-hour gold contribution period).</p>
                      {clientWidth > 767 ? <br/> : ''}
                      <div className={styles['crowd-div4Header-pot']}></div>
                      <p>After the crowd-funding ends, you can claim tokens from the smart contract by your address.</p>
                      {clientWidth > 767 ? <br/> : ''}
                      <div className={styles['crowd-div4Header-pot']}></div>
                      <p>When Wanchain is live, users may exchange their tokens for Wancoins at a 1:1 ratio. Wanchain version 1.0 is expected to go online in November 2017.</p>
                  </div>
               </div>
          </div>
      );
    }
}

export default Div1En;


// <img src={line} className="div1HeaderImg" />
