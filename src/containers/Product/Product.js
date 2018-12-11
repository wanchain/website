import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { getClientWidthFunc, getNavButtonFunc, changeLangFunc} from 'redux/modules/auth';


import {homeUlEn, homePcUlEn} from '../Home/utils/homeUl';
import Content from './Content';
import { win32 } from 'path';


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
    href: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      download: '',
      href: 'https://github.com/wanchain/go-wanchain/releases/download/v1.0.0/WanchainWalletCli-win64-1.0.0.zip',
      pop: 'false'
    };
    this.getSystem = this.getSystem.bind(this);
    this.popContent = this.popContent.bind(this);
  }
  componentDidMount() {
    const width = document.documentElement.clientWidth;
    this.props.getClientWidthFunc(width);
    this.getSystem();
  }
  componentWillUnmount() {
    // clearInterval(this.interval);
    this.props.getNavButtonFunc(false);
  }

  getNav() {
    const navButton = this.props.navButton;
    this.props.getNavButtonFunc(!navButton);
  }

  getSystem() {
    const str = navigator.userAgent.toLowerCase();
    if (str.indexOf('windows') === -1) {
      this.setState({
        href: 'https://github.com/wanchain/go-wanchain/releases/download/v1.0.0/WanchainWalletCli-linux64-1.0.0.tar.gz'
      });
    }
  }
  popContent(urlData) {
    if (urlData === 'win3') {
      this.setState({download: '/download/winwallet3'});  
    } else if (urlData === 'mac3') {
      this.setState({download: '/download/macwallet3'});
    } else if (urlData === 'linux3') {
      this.setState({download: '/download/linwallet3'});
    }
    if (this.state.pop === 'true') {
      this.setState({
        pop: 'false'
      });
      // document.body.style.overflow = 'auto';
    } else {
      this.setState({
        pop: 'true'
      });
      // document.body.style.overflow = 'hidden';
    }
  }

  render() {
    const styles = require('./Product.scss');
    const circle2 = require('./image/circle2.png');
    const win = require('./image/win.png');
    const mac = require('./image/mac.png');
    const Glinux = require('./image/Glinux.png');
    const git = require('./image/git.png');
    const banRbg = require('./image/proimg4.png');
    const banRbg5 = require('./image/proimg5.png');
    const banDownL = require('./image/banDownL.png');
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
    const bannBg = require('./image/bannBg.png');

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
            {/* <div className={styles.homeGit}>
                <a href="https://github.com/wanchain" target="_blank"><img src={clientWidth > 767 ? github : github2} /></a>
            </div> */}
          </div>
        </div>
        <div className={styles.proCont}>
          <div className={styles.bannerLeft}>
            <img className={styles.bannBg} src={bannBg} />
            <h1>WANCHAIN WALLET</h1>
            <h3>TRANSFER YOUR ASSETS WITH PRIVACY PROTECTION</h3>
            <ul className={styles.leftUl}>
              <li>
                <em><img className={styles.icoCircle} src={circle2}/></em>
                <span>Wanchain Wallet helps you manage different digital assets including WAN, BTC, ETH and other cryptocurrencies on Wanchain</span>
              </li>
              <li>
                <em><img className={styles.icoCircle} src={circle2}/></em>
                <span>You can transfer your WAN assets either the traditional way (public transactions) or in private (stealth transactions)</span>
              </li>
              <li>
                <em><img className={styles.icoCircle} src={circle2}/></em>
                <span>Wanchain Wallet now supports cross-chain transactions with Bitcoin, Ethereum, ERC20 tokens and will support more cryptocurrencies in future versions</span>
              </li>
              <li>
                <em><img className={styles.icoCircle} src={circle2}/></em>
                <span>With support of hardware wallets (Trezor™, LedgerWallet™), Wanchain transactions are more secure than ever</span>
              </li>
            </ul>
             {/* <div className={styles.downloadBoxBan}>
              <h2>Download Wanwallet 1.0.5</h2>
              <ul>
                <li onClick={(event) => this.popContent('win', event)}><img src={win}/></li>
                <li onClick={(event) => this.popContent('mac', event)}><img src={mac}/></li>
                <li onClick={(event) => this.popContent('linux', event)}><img src={Glinux}/></li>
              </ul>
              <Content isShow={this.state.pop} isPopFunc={this.popContent} download={this.state.download}/>
             </div> */}
             <div className={styles.downloadBoxBan}>
              <h2>Download Wanchain Wallet for your platform</h2>
              <ul>
                <li onClick={(event) => this.popContent('win3', event)}><img src={win}/></li>
                <li onClick={(event) => this.popContent('mac3', event)}><img src={mac}/></li>
                <li onClick={(event) => this.popContent('linux3', event)}><img src={Glinux}/></li>
              </ul>
              <Content isShow={this.state.pop} isPopFunc={this.popContent} download={this.state.download}/>
             </div>
             <a href="https://github.com/wanchain/wanchain_docs/raw/master/Wanwallet%20GUI%203.0%20mainnet.pdf" className={styles.downloadManual}>
                <img className={styles.banDownL} src={banDownL}/> <span>Instruction manual for cross-chain transactions</span>
             </a>
          </div>
          <div className={styles.bannerRight}>
            <div className={styles.comimgBox}><img className={styles.banRbg} src={banRbg}/></div>
          </div>
        </div>
        <div className={styles.proCont}>
          <div className={styles.bannerLeft2}>
            <div className={styles.comimgBox}><img className={styles.banRbg5 } src={banRbg5}/></div>
          </div>
          <div className={styles.bannerRight2}>
            <h1>CROSS-CHAIN ABILITIES</h1>
            <h4>WHY CROSS-CHAIN?</h4>
             <div className={styles.downloadBoxBan2}>
                <h3>Scalability for disparate blockchains like ETH/BTC</h3>
                <h3>Dapps are able to take advantage of interoperability</h3>
                <h3>Real-world scenarios based on cross-chain technology:</h3>
              <ul>
              <li><em><img className={styles.icoCircle} src={circle2}/></em>Multi-asset investment and financing</li>
              <li><em><img className={styles.icoCircle} src={circle2}/></em>Decentralized loans</li>
              <li><em><img className={styles.icoCircle} src={circle2}/></em>Multi-coin payments and settlements</li>
              <li><em><img className={styles.icoCircle} src={circle2}/></em>Decentralized cryptocurrency exchanges</li>
              </ul>
              </div>
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
            <h3>With privacy protection</h3>
            <ul>
              <li>
                <em className={styles.emHeight}><img className={styles.icoCircle2} src={circle}/></em>
                <span>You can deploy smart contracts on Wanchain just as with Ethereum</span>
              </li>
                <li>
                  <em><img className={styles.icoCircle2} src={circle}/></em>
                  <span>One of Wanchain's unique features is the ability to issue a new token with privacy protection in mind. Please click the button below to see how to deploy a smart contract with privacy protection</span>
                </li>
            </ul>
            <a target="_blank" href="https://github.com/wanchain/go-wanchain/wiki/How--to-deploy-smart-contracts-on-Wanchain" className={styles.comBtn}>Issue your token</a>
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
                <span>The Block Explorer can be used to check every transaction detail, and now supports cross-chain transactions!</span>
              </li>
                <li>
                  <em><img className={styles.icoCircle2} src={circle}/></em>
                  <span>From dates to fees, block heights to amounts, you can track all of this information and more</span>
                </li>
            </ul>
            <a href="https://www.wanscan.org" target="_blank"><button className={styles.comBtn}>wanchain explorer</button></a>
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
                <span>We provide command line tools for those who feel at ease with the CLI.</span>
              </li>
              <li>
                <em><img className={styles.icoCircle2} src={circle}/></em>
                <span>Check <a href="https://github.com/wanchain/go-wanchain/wiki/Using-the-Wanchain-Command-Line-Wallet" target="_blank">here</a> for more information in our Wanchain wallet CLI guide</span>
              </li>
            </ul>
            <div className={styles.downloadBox}>
            <div className={styles.cmdDload}>
              <p>CLI Tools:</p>
              <a href="https://github.com/wanchain/wanchain-js-walletcli/tree/2.1-release" target="_blank"><button className={styles.CLI}>2.1</button></a>
              <a href="https://github.com/wanchain/wanchain-crosschain-walletcli" target="_blank"><button className={styles.CLI}>3.0</button></a>
            </div>
             <div className={styles.GwanDload}>
               <p>Gwan Download:</p>
               <a href="/download/gwan-windows-amd64-1.0.5-9b532dfe.zip" className={styles.icoWin}><em></em></a>
               <a href="/download/gwan-mac-amd64-1.0.5-9b532dfe.tar.gz" className={styles.icoMac}><em></em></a>
               <a href="/download/gwan-linux-amd64-1.0.5-9b532dfe.tar.gz" className={styles.icoGLINUX}><em></em></a>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
}
export default Product;
