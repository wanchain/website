import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { getClientWidthFunc, getNavButtonFunc, changeLangFunc} from 'redux/modules/auth';


import {homeUlEn, homePcUlEn, homeUl, homePcUl} from '../Home/utils/homeUl';
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
    } else if (urlData === 'winoff3') {
      this.offline = true;
      this.setState({download: '/download/winoffwallet3'});
    } else if (urlData === 'macoff3') {
      this.offline = true;
      this.setState({download: '/download/macoffwallet3'});
    } else if (urlData === 'linuxoff3') {
      this.offline = true;
      this.setState({download: '/download/linoffwallet3'});
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
    const hrefpdf = this.props.language === 'zn'
     ? 'https://github.com/wanchain/wanchain_docs/raw/master/Wanwallet_GUI_3.0_mainnet_guide_CHN.pdf'
      : 'https://github.com/wanchain/wanchain_docs/raw/master/Wanwallet%20GUI%203.0%20mainnet.pdf';
    const hrefpdf1 = 'https://github.com/wanchain/wanchain_docs/raw/master/Wanchain_Offline_Wallet_Instructions_Manual.pdf';
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


            { !navButton && clientWidth <= 1024 && language === 'zn' && homeUl(styles.homeHeaderUl, style)}
            { navButton && clientWidth <= 1024 && language === 'zn' && homeUl(styles.homeHeaderUl, style1)}

            {!navButton && clientWidth > 1024 && language === 'zn' &&
            homePcUl(styles.homeHeaderUl, style1, styles.homeDropdown, styles['homeDropdown-content'])}
          </div>
        </div>
        <div className={styles.proCont}>
          <div className={styles.bannerLeft}>
            <img className={styles.bannBg} src={bannBg} />
            <h1>{language === 'zn' ? 'Wanchain钱包' : 'WANCHAIN WALLET'}</h1>
            <h3>{language === 'zn' ? '通过隐私交易进行数字资产转账' : 'TRANSFER YOUR ASSETS WITH PRIVACY PROTECTION'}</h3>
            <ul className={styles.leftUl}>
              <li>
                <em><img className={styles.icoCircle} src={circle2}/></em>
                <span>{language === 'zn' ? '通过Wanchain钱包管理WAN，BTC，ETH等各种数字资产' : 'Wanchain Wallet helps you manage different digital assets including WAN, BTC, ETH and other cryptocurrencies on Wanchain'}</span>
              </li>
              <li>
                <em><img className={styles.icoCircle} src={circle2}/></em>
                <span>{language === 'zn' ? '支持WAN币普通交易转账，也支持隐私交易转账' : 'You can transfer your WAN assets either the traditional way (public transactions) or in private (stealth transactions)'}</span>
              </li>
              <li>
                <em><img className={styles.icoCircle} src={circle2}/></em>
                <span>{language === 'zn' ? 'Wanchain钱包现支持与比特币、以太坊、ERC20代币的跨链交易，在未来还将支持更多数字货币的跨链' : 'Wanchain Wallet now supports cross-chain transactions with Bitcoin, Ethereum, ERC20 tokens and will support more cryptocurrencies in future versions'}</span>
              </li>
              <li>
                <em><img className={styles.icoCircle} src={circle2}/></em>
                <span>{language === 'zn' ? '支持主流硬件钱包（Trezor™，LedgerWallet™），Wanchain上的交易变得更安全' : 'With support of hardware wallets (Trezor™, LedgerWallet™), Wanchain transactions are more secure than ever'}</span>
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
              <h2>{language === 'zn' ? '根据您的操作系统下载Wanchain钱包' : 'Download Wanchain Wallet for your platform'}</h2>
              <ul>
                <li onClick={(event) => this.popContent('win3', event)}><img src={win}/></li>
                <li onClick={(event) => this.popContent('mac3', event)}><img src={mac}/></li>
                <li onClick={(event) => this.popContent('linux3', event)}><img src={Glinux}/></li>
              </ul>
              <Content offline={this.offline} isShow={this.state.pop} isPopFunc={this.popContent} download={this.state.download} language={language}/>
             </div>
             <a href={hrefpdf} className={styles.downloadManual}>
                <img className={styles.banDownL} src={banDownL}/> <span>{language === 'zn' ? '跨链交易使用手册' : 'Instruction manual for cross-chain transactions'}</span>
             </a>
             <div className={styles.downloadBoxBan}>
             <h2>{language === 'zn' ? '根据您的操作系统下载Wanchain离线钱包' : 'Download Wanchain Offline Wallet for your platform'}</h2>
             <ul>
               <li onClick={(event) => this.popContent('winoff3', event)}><img src={win}/></li>
               <li onClick={(event) => this.popContent('macoff3', event)}><img src={mac}/></li>
               <li onClick={(event) => this.popContent('linuxoff3', event)}><img src={Glinux}/></li>
             </ul>
            </div>
            <a href={hrefpdf1} className={styles.downloadManual}>
               <img className={styles.banDownL} src={banDownL}/> <span>{language === 'zn' ? '离线交易使用手册' : 'Instruction manual for offline transactions'}</span>
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
            <h1>{language === 'zn' ? '跨链能力' : 'CROSS-CHAIN ABILITIES'}</h1>
            <h4>{language === 'zn' ? '为什么要跨链？' : 'WHY CROSS-CHAIN?'}</h4>
             <div className={styles.downloadBoxBan2}>
                <h3>{language === 'zn' ? '为不同区块链（例如ETH / BTC）提供可扩展性' : 'Scalability for disparate blockchains like ETH/BTC'}</h3>
                <h3>{language === 'zn' ? 'Dapp可以充分利用不同链间的互操作性' : 'Dapps are able to take advantage of interoperability'}</h3>
                <h3>{language === 'zn' ? '基于跨链技术的真实场景：' : 'Real-world scenarios based on cross-chain technology:'}</h3>
              <ul>
              <li><em><img className={styles.icoCircle} src={circle2}/></em>{language === 'zn' ? '多种数字资产的投融资' : 'Multi-asset investment and financing'}</li>
              <li><em><img className={styles.icoCircle} src={circle2}/></em>{language === 'zn' ? '去中心化借贷' : 'Decentralized loans'}</li>
              <li><em><img className={styles.icoCircle} src={circle2}/></em>{language === 'zn' ? '多币种支付和清算' : 'Multi-coin payments and settlements'}</li>
              <li><em><img className={styles.icoCircle} src={circle2}/></em>{language === 'zn' ? '去中心化交易所' : 'Decentralized cryptocurrency exchanges'}</li>
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
            <h1>{language === 'zn' ? 'Wanchain智能合约' : 'WAN smart contracts'}</h1>
            <h3>{language === 'zn' ? '具备隐私保护特性' : 'With privacy protection'}</h3>
            <ul>
              <li>
                <em className={styles.emHeight}><img className={styles.icoCircle2} src={circle}/></em>
                <span>{language === 'zn' ? '可以和在以太坊上一样在Wanchain上部署智能合约' : 'You can deploy smart contracts on Wanchain just as with Ethereum'}</span>
              </li>
                <li>
                  <em><img className={styles.icoCircle2} src={circle}/></em>
                  <span>{language === 'zn' ? 'Wanchain的独特功能之一是能够发行具备隐私保护能力的新数字通证。点击下方按钮，了解如何部署具有隐私保护特性的智能合约' : "One of Wanchain's unique features is the ability to issue a new token with privacy protection in mind. Please click the button below to see how to deploy a smart contract with privacy protection"}</span>
                </li>
            </ul>
            <a target="_blank" href="https://github.com/wanchain/go-wanchain/wiki/How--to-deploy-smart-contracts-on-Wanchain" className={styles.comBtn}>{language === 'zn' ? '发行新的通证' : 'Issue your token'}</a>
          </div>
        </div>
      </div>
      <div className={styles.grayBox}>
        <div className={styles.grayCont}>
          <div className={styles.grayLeft}>
            <h1>{language === 'zn' ? '需要检查余额' : 'Need balance check'}</h1>
            <h3>{language === 'zn' ? '监控交易历史记录？' : 'Monitor transaction history?'}</h3>
            <ul>
              <li>
                <em><img className={styles.icoCircle2} src={circle}/></em>
                <span>{language === 'zn' ? '通过Wanchain Block Explorer可查看每笔交易的细节，支持查看跨链交易！' : 'The Block Explorer can be used to check every transaction detail, and now supports cross-chain transactions!'}</span>
              </li>
                <li>
                  <em><img className={styles.icoCircle2} src={circle}/></em>
                  <span>{language === 'zn' ? '从交易日期到交易费用，从区块高度到交易金额，所有信息都可追溯' : 'From dates to fees, block heights to amounts, you can track all of this information and more'}</span>
                </li>
            </ul>
            <a href="https://www.wanscan.org" target="_blank"><button className={styles.comBtn}>{language === 'zn' ? 'WANCHAIN区块浏览器' : 'wanchain explorer'}</button></a>
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
            <h1>{language === 'zn' ? '深入使用' : 'Come and dig'}</h1>
            <h3>{language === 'zn' ? 'Wanchain命令行工具' : 'our command line tools'}</h3>
            <ul>
              <li>
                <em><img className={styles.icoCircle2} src={circle}/></em>
                <span>{language === 'zn' ? '区块链技术爱好者可以使用Wanchain命令行工具' : 'We provide command line tools for those who feel at ease with the CLI.'}</span>
              </li>
              <li>
                <em><img className={styles.icoCircle2} src={circle}/></em>
                <span>
                    {language === 'zn' ? '点击' : 'Check'}
                    <a href="https://github.com/wanchain/go-wanchain/wiki/Using-the-Wanchain-Command-Line-Wallet" target="_blank">{language === 'zn' ? '此处' : 'here'}</a>
                    {language === 'zn' ? '查看Wanchain 1.0 命令行钱包指南' : 'for more information in our Wanchain 1.0 CLI wallet guide'}
                </span>
              </li>
              <li>
                <em><img className={styles.icoCircle2} src={circle}/></em>
                <span>{language === 'zn' ? '点击2.1按钮，获取ETH和ERC20跨链交易的命令行钱包' : 'Click on 2.1 button for CLI wallet for ETH and ERC20 tokens cross-chain transactions'}</span>
              </li>
              <li>
                <em><img className={styles.icoCircle2} src={circle}/></em>
                <span>{language === 'zn' ? '点击3.0按钮，获取BTC跨链交易的命令行钱包' : 'Click on 3.0 button for CLI wallet for BTC cross-chain transactions'}</span>
              </li>
            </ul>
            <div className={styles.downloadBox}>
            <div className={styles.cmdDload}>
              <p>{language === 'zn' ? '命令行工具:' : 'CLI Tools:'}</p>
              <a href="https://github.com/wanchain/wanchain-js-walletcli/tree/2.1-release" target="_blank"><button className={styles.CLI}>2.1</button></a>
              <a href="https://github.com/wanchain/wanchain-crosschain-walletcli" target="_blank"><button className={styles.CLI}>3.0</button></a>
            </div>
             <div className={styles.GwanDload}>
               <p>{language === 'zn' ? '下载Gwan:' : 'Gwan Download:'}</p>
               <a href="/download/gwan-windows-amd64-1.0.7-3c1c638c.zip" className={styles.icoWin}><em></em></a>
               <a href="/download/gwan-mac-amd64-1.0.7-3c1c638c.tar.gz" className={styles.icoMac}><em></em></a>
               <a href="/download/gwan-linux-amd64-1.0.7-3c1c638c.tar.gz" className={styles.icoGLINUX}><em></em></a>
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
