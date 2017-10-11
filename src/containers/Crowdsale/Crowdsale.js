import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getNavButtonFunc } from 'redux/modules/auth';

// import Div1En from './components/div/Div1En';
// import Div2En from './components/div/Div2En';
//
// import Div3 from './components/div/Div3';
// import Div4 from './components/div/Div4';

@connect(
    state => ({clientWidth: state.auth.clientWidth, navButton: state.auth.navButton, language: state.auth.language, }),
    {getNavButtonFunc}
    )
class Crowdsale extends Component {
    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,

      getNavButtonFunc: PropTypes.func,
    };

    componentWillMount() {
      this.props.getNavButtonFunc(false);
    }
    componentWillUnmount() {
      this.props.getNavButtonFunc(false);
    }

    render() {
      // const homeHeader = require('../Home/image/homeHeader.jpg');
      const styles = require('./Crowdsale.scss');
      return (
            <div className={styles.crowdsaleDiv}>
                <div className={styles.homeHeaderDiv}>
                    {/* <img src={homeHeader}/> */}
                    <h3 className={styles.titleH3}>Wanchain Announcement</h3>
                  <div className={styles.contentDiv}>
                    <h6>Thank you for your participation!</h6>
                    <h6>Please note, these ERC20 tokens should be kept in the whitelisted addresses. If you need to transfer them to another wallet please contact us first.</h6>
                    <h6>These ERC20 tokens will be swapped for the native coin: Wancoin when the mainnet is released (Q4 2017).</h6>
                    <h6>There should be no trading of these tokens on the secondary markets prior to. (This includes buyers and sellers).</h6>
                  </div>
                  <div className={styles.contentDiv2}>
                    <h4 className={styles.titleH4}>In summary:</h4>
                    <h6><span className={styles.icoColor}>-</span>Transferring to another wallet you control is okay (but don't move them unless you need to for security purposes).</h6>
                    <h6><span className={styles.icoColor}>-</span>Transferring/selling to someone else is not okay.</h6>
                    <h6><span className={styles.icoColor}>-</span>We can only guarantee the exchange of ERC20 tokens for Wancoins that come from the same purchasing address (including the exact amount received during the crowdsale).</h6>
                    <h6><span className={styles.icoColor}>-</span>Even if you are whitelisted we cannot guarantee the extra tokens you accumulate (after the Token sale) will be swapped for the native coin.</h6>
                    <h6><span className={styles.icoColor}>-</span>Edge cases may pop up and we will review on a case by case basis</h6>
                  </div>
                  <div className={styles.contentDiv3}>
                    <h6>We will do what is fair, equitable, and legal for all parties.</h6>
                    <h6>Purchasing or selling these tokens prior to the mainnet launch in November is a violation of the tokensale terms and could result in losing the ability to exchange your remaining tokens when the network goes live.</h6>
                  </div>
                </div>

            </div>
      );
    }
}

export default Crowdsale;

// <Div1En/>
// <Div2En/>
// <Div3/>
// <Div4/>
