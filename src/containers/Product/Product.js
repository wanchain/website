import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { getClientWidthFunc, getNavButtonFunc, changeLangFunc} from 'redux/modules/auth';


import {homeUlEn, homePcUlEn} from '../Home/utils/homeUl';

@connect(
    state => ({clientWidth: state.auth.clientWidth, navButton: state.auth.navButton, language: state.auth.language, titleState: state.auth.titleState,
        icoMsg: state.joinWarning.icoMsg, joinWarningModal: state.joinWarning.joinWarningModal, }),
    {getClientWidthFunc, getNavButtonFunc, changeLangFunc})

class Product extends Component {
  static propTypes = {
    clientWidth: PropTypes.number,
    getClientWidthFunc: PropTypes.func,
    navButton: PropTypes.bool,
    getNavButtonFunc: PropTypes.func,
    changeLangFunc: PropTypes.func,
    language: PropTypes.string,
    titleState: PropTypes.string,
    src: PropTypes.string,
  };

  componentDidMount() {
    const width = document.documentElement.clientWidth;
    this.props.getClientWidthFunc(width);
    this.systemFun();
  }
  componentWillUnmount() {
    // clearInterval(this.interval);
    this.props.getNavButtonFunc(false);
  }

  getNav() {
    const navButton = this.props.navButton;
    this.props.getNavButtonFunc(!navButton);
  }

  systemFun() {
    console.log(navigator.userAgent);
    const str = navigator.userAgent;
    if (str.indexOf('Windows1') !== -1) {
      this.props.src = 'www.baidu.com';
    }else {
      this.props.src = 'www.sina.com';
    }
  }

  render() {
    const styles = require('./Product.scss');
    const circle2 = require('./image/circle2.png');
    const win = require('./image/win.png');
    const mac = require('./image/mac.png');
    const Glinux = require('./image/Glinux.png');
    const win2 = require('./image/win2.png');
    const mac2 = require('./image/mac2.png');
    const linux2 = require('./image/linux2.png');
    const git = require('./image/git.png');
    const banRbg = require('./image/proimg4.png');
    const coin = require('./image/coin.png');
    const circle = require('./image/circle.png');
    const proimg1 = require('./image/proimg1.png');
    const proimg2 = require('./image/proimg2.png');
    const proimg3 = require('./image/proimg3.gif');

    // const stylesH = require('../Home/Home.scss');
    const logo = require('../Home/image/logo.png');
    const logo2 = require('../Home/image/icoLoho2.png');
    const nav = require('../Home/image/nav1.png');
    const github = require('../Home/image/github.png');
    const github2 = require('../Home/image/icoLog4.png');

    const {navButton, clientWidth, language} = this.props;

    const style = {display: 'none'};
    const style1 = {display: 'inline_block'};
    return (
    <div>
      <div className={styles.productBox}>
        <div className={styles.homeDiv}>
          <div className={styles.homeHeader + ' container'}>
            <IndexLink to="/"><img src={clientWidth > 320 ? logo : logo2} /></IndexLink>
            <img src={nav} className={styles.navbarImg} id="homeNav" onClick={this.getNav.bind(this)}/>

            { !navButton && clientWidth <= 1024 && language === 'en' && homeUlEn(styles.homeHeaderUl, style)}
            { navButton && clientWidth <= 1024 && language === 'en' && homeUlEn(styles.homeHeaderUl, style1)}

            {!navButton && clientWidth > 1024 && language === 'en' &&
            homePcUlEn(styles.homeHeaderUl, style1, styles.homeDropdown, styles['homeDropdown-content'])}

            {/* <a onClick={this.onClick.bind(this)} className={styles.navJoin}>Join us</a> */}
            <div className={styles.homeGit}>
                <a href="https://github.com/wanchain" target="_blank"><img src={clientWidth > 767 ? github : github2} /></a>
            </div>
          </div>
        </div>
        <div className={styles.proCont}>
          <div className={styles.bannerLeft}>
            <h1>WAN WALLET CONNECTING</h1>
            <h3>different blockchain networks</h3>
            <ul>
              <li>
                <em><img className={styles.icoCircle} src={circle2}/></em>
                <span>Wan Wallet allows any blockchain network, whether a public, private or consortium chain,  and perform low-cost inter-ledger asset transfers. </span>
              </li>
              <li>
                <em><img className={styles.icoCircle} src={circle2}/></em>
                <span>The asset transfer is achieved through a decentralized cross-chain mechanism and a universal cross-chain protocol.</span>
              </li>
              <li>
                <em><img className={styles.icoCircle} src={circle2}/></em>
                <span>Multiple blockchains will be connected for the purpose of transferring value across networks.</span>
              </li>
            </ul>
             <div className={styles.downloadBox}>
              <h2>download :</h2>
              <ul>
                <li><img src={win}/></li>
                <li><img src={mac}/></li>
                <li><img src={Glinux}/></li>
                <li className={styles.gitBtn}><a href="https://github.com/wanchain/go-wanchain/releases" target="_blank"><img className={styles.icoGit} src={git}/></a></li>
              </ul>
             </div>
          </div>
          <div className={styles.bannerRight}>
            <div className={styles.comimgBox}><img className={styles.banRbg} src={banRbg}/></div>
            <div><img className={styles.banRico} src={coin}/></div>
          </div>
        </div>
      </div>
      <div className={styles.whiteBox}>
        <div className={styles.whiteCont}>
          <div className={styles.whiteLeft}>
            <div><img className={styles.proimg1} src={proimg1}/></div>
          </div>
          <div className={styles.whiteRight}>
            <h1>WAN smart contracts</h1>
            <h3>are self-executing contracts</h3>
            <ul>
              <li>
                <em><img className={styles.icoCircle2} src={circle}/></em>
                <span>WAN Smart contracts permit trusted transactions and agreements to be carried out among disparate,</span>
                <span>anonymous parties without the need for a central authority, legal system, or external enforcement mechanism.</span>
              </li>
            </ul>
            <button className={styles.comBtn}>Issue your token</button>
          </div>
        </div>
      </div>
      <div className={styles.grayBox}>
        <div className={styles.grayCont}>
          <div className={styles.grayLeft}>
            <h1>Need balance check</h1>
            <h3>Monitor transaction history?</h3>
            <ul>
              <li>
                <em><img className={styles.icoCircle2} src={circle}/></em>
                <span>Use our block explorer to check every transaction details</span>
              </li>
                <li>
                  <em><img className={styles.icoCircle2} src={circle}/></em>
                  <span>From dates to fees, block heights to amounts, you can track them all and more</span>
                </li>
            </ul>
            <a href="https://explorer.wanchain.org" target="_blank"><button className={styles.comBtn}>wanchan exlporer</button></a>
          </div>
          <div className={styles.grayRight}>
            <div><img className={styles.proimg2} src={proimg2}/></div>
          </div>
        </div>
      </div>
      <div className={styles.whiteBox2}>
        <div className={styles.whiteCont}>
          <div className={styles.whiteLeft}>
            <div><img className={styles.proimg3} src={proimg3}/></div>
          </div>
          <div className={styles.whiteRight}>
            <h1>Come and dig</h1>
            <h3>our command line tools</h3>
            <ul>
              <li>
                <em><img className={styles.icoCircle2} src={circle}/></em>
                <span>We provide command line tools for anyone who is comfortable using CMD terminology</span>
              </li>
              <li>
                <em><img className={styles.icoCircle2} src={circle}/></em>
                <span>Check here for more information on How to Use Cli Guide</span>
              </li>
            </ul>
            <div className={styles.downloadBox}>
             <ul>
               <li><img className={styles.icoWin} src={win2}/></li>
               <li><img className={styles.icoMac} src={mac2}/></li>
               <li><img className={styles.icoGLINUX} src={linux2}/></li>
               <li><a><button className={styles.comBtn}>download</button></a></li>
             </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
}
export default Product;
