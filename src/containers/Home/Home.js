import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import { getClientWidthFunc, getNavButtonFunc, changeLangFunc} from 'redux/modules/auth';
import { joinOpenFunc, joinCloseFunc, joinMsgFunc } from 'redux/modules/joinWarning';
import JoinwarningModal from '../../components/JoinWarn';

import {homeUlEn, homePcUlEn} from './utils/homeUl';

import Div1 from './components/Div1/Div1';
import Div2 from './components/Div2/Div2';
import Div3 from './components/Div3/Div3';
import Div4 from './components/Div4/Div4';
import Div6 from './components/Div6/Div6';
import Div7 from './components/Div7/Div7';
import Div8 from './components/Div8/Div8';

@connect(
    state => ({clientWidth: state.auth.clientWidth, navButton: state.auth.navButton, language: state.auth.language, titleState: state.auth.titleState,
        icoMsg: state.joinWarning.icoMsg, joinWarningModal: state.joinWarning.joinWarningModal, }),
    {getClientWidthFunc, getNavButtonFunc, changeLangFunc, joinOpenFunc, joinCloseFunc, joinMsgFunc})
export default class Home extends Component {
    static propTypes = {
      clientWidth: PropTypes.number,
      getClientWidthFunc: PropTypes.func,
      navButton: PropTypes.bool,
      getNavButtonFunc: PropTypes.func,
      changeLangFunc: PropTypes.func,
      language: PropTypes.string,

      titleState: PropTypes.string,

      icoMsg: PropTypes.string,
      joinCloseFunc: PropTypes.func,
      joinOpenFunc: PropTypes.func,
      joinWarningModal: PropTypes.bool,
      joinMsgFunc: PropTypes.func,
    };

    componentWillMount() {
      this.props.joinCloseFunc();
    }
    componentDidMount() {
      const width = document.documentElement.clientWidth;
      this.props.getClientWidthFunc(width);
    }

    componentWillUnmount() {
      // clearInterval(this.interval);
      this.props.getNavButtonFunc(false);
    }

    onClick() {
      this.props.joinOpenFunc();
    }

    getNav() {
      const navButton = this.props.navButton;
      this.props.getNavButtonFunc(!navButton);
    }

    showWarns = () => {
      this.props.joinOpenFunc();
    };
    closeWarns = () => {
      this.props.joinCloseFunc();
    };


  render() {
    const styles = require('./Home.scss');
    const logo = require('./image/logo.png');
    const logo2 = require('./image/icoLoho2.png');
    const nav = require('./image/nav1.png');
    const github = require('./image/github.png');
    const github2 = require('./image/icoLog4.png');

    const Telegram = require('./image/Telegram.png');
    const Reddit = require('./image/Reddit.png');
    const Twitter = require('./image/Twitter.png');
    const Discord = require('./image/Discord.png');
    const Facebook = require('./image/Facebook.png');
    const {navButton, clientWidth, language, joinWarningModal} = this.props;

    const style = {display: 'none'};
    const style1 = {display: 'inline_block'};

    return (
        <div>
            <Helmet script={[{src: '/jquery/jquery.min.js'}]} link={[{rel: 'stylesheet', href: '/css/style4.css'}]}/>

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

                <div className="container">
                    <div className={styles.homeHeaderBodyDiv1}>
                        <div>
                          <p className={styles.bannerTitle}>PRIVATE CROSS-CHAIN</p>
                          <p className={styles.bannerTitleSmall}>SMART CONTRACTS</p>
                        </div>
                        <p className={styles.bannerp}>
                            {language === 'zn' ? '连接不同数字资产，连接现在与未来' :
                                'Links different digital assets, connecting the present and future'}
                            <small>
                                {language === 'zn' ? '万维链旨在建立一个基础设施，以去中心化的方式完成不同区块链网络的连接及价值的交换' :
                                    'Wanchain seeks to create a new distributed financial infrastructure, connecting different blockchain networks together to exchange value.'}
                            </small>
                        </p>

                        <div className={styles.bannerShare}>
                            <a href="https://t.me/WanchainANN" target="_blank"><img src={Telegram}/></a>
                            <a href="https://www.reddit.com/r/wanchain/" target="_blank"><img src={Reddit}/></a>
                            <a href="https://twitter.com/wanchain_org" target="_blank"><img src={Twitter}/></a>
                            <a href="https://discord.gg/3DpeV6W" target="_blank"><img src={Discord}/></a>
                            <a href="https://www.facebook.com/wanchainfoundation/" target="_blank"><img src={Facebook}/></a>
                        </div>
                    </div>
                </div>

                <JoinwarningModal show={joinWarningModal} onHide={this.showWarns} onClose={this.closeWarns}/>
            </div>

            <Div1/>
            <Div2/>
            <Div3/>
            <Div8/>
            <Div4/>
            <Div6/>
            <Div7/>
        </div>
    );
  }
}
