import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { getClientWidthFunc, getNavButtonFunc, changeLangFunc } from 'redux/modules/auth';

import currentDate from './utils/currentDate';
// import getLange from './utils/getLange';

import Div1 from './components/Div1/Div1';
import Div2 from './components/Div2/Div2';
import Div3 from './components/Div3/Div3';
import Div4 from './components/Div4/Div4';
import Div5 from './components/Div5/Div5';
import Div6 from './components/Div6/Div6';
import Div7 from './components/Div7/Div7';

@connect(
    state => ({clientWidth: state.auth.clientWidth, navButton: state.auth.navButton, language: state.auth.language, }),
    {getClientWidthFunc, getNavButtonFunc, changeLangFunc})
export default class Home extends Component {
    static propTypes = {
      clientWidth: PropTypes.number,
      getClientWidthFunc: PropTypes.func,
      navButton: PropTypes.bool,
      getNavButtonFunc: PropTypes.func,
      changeLangFunc: PropTypes.func,
      language: PropTypes.string,
    };

    constructor(props) {
      super(props);
      this.state = {
        date: {
          days: '00', hours: '00', minutes: '00', seconds: '00',
          ref_days: 'DAY', ref_hours: 'HOUR', ref_minutes: 'MINUTE', ref_seconds: 'SECOND'
        },
      };
    }

    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);

      const width = document.documentElement.clientWidth;
      this.props.getClientWidthFunc(width);

      // const curr = getLange();
      //
      // if (curr !== 'zh-CN') {
      //   this.props.changeLangFunc('en');
      // }
    }

    componentWillUnmount() {
      clearInterval(this.interval);
      this.props.getNavButtonFunc(false);
    }

    onChangeEn() {
      this.props.changeLangFunc('en');
    }

    onChangeZn() {
      this.props.changeLangFunc('zn');
    }

    getNav() {
      const navButton = this.props.navButton;
      this.props.getNavButtonFunc(!navButton);
    }

    tick() {
      // difference of dates
      const difference = new Date('09/06/2017 20:00:00') - currentDate(+10);

      // basic math variables
      const _second = 1000;
      const _minute = _second * 60;
      const _hour = _minute * 60;
      const _day = _hour * 24;

      // calculate dates
      let days = Math.floor(difference / _day);
      let hours = Math.floor((difference % _day) / _hour);
      let minutes = Math.floor((difference % _hour) / _minute);
      let seconds = Math.floor((difference % _minute) / _second);

      // fix dates so that it will show two digets
      days = (String(days).length >= 2) ? days : '0' + days;
      hours = (String(hours).length >= 2) ? hours : '0' + hours;
      minutes = (String(minutes).length >= 2) ? minutes : '0' + minutes;
      seconds = (String(seconds).length >= 2) ? seconds : '0' + seconds;

      // based on the date change the refrence wording
      const refDays = (days === 1) ? 'DAY' : 'DAYS';
      const refHours = (hours === 1) ? 'HOUR' : 'HOURS';
      const refMinutes = (minutes === 1) ? 'MINUTE' : 'MINUTES';
      const refSeconds = (seconds === 1) ? 'SECOND' : 'SECONDS';

      this.setState(() => ({
        date: {
          days: days, hours: hours, minutes: minutes, seconds: seconds,
          ref_days: refDays, ref_hours: refHours, ref_minutes: refMinutes, ref_seconds: refSeconds,
        }
      }));
    }


  render() {
    const styles = require('./Home.scss');
    const logo = require('./image/logo.png');
    const nav = require('./image/nav1.png');
    const github = require('./image/github.png');
    const {navButton, clientWidth, language} = this.props;

    const style = {display: 'none'};
    const style1 = {display: 'inline_block'};
    return (
        <div>
            {language === 'zn' && <Helmet title="万维链-资产跨链+隐私保护+智能合约 构建数字新经济基础设施"/>}
            {language === 'en' && <Helmet title="wanchain-A Distributed 'Super Financial Market'"/>}
            {language === 'zn' &&
            <div className={styles.homeDiv}>
                <div className={styles.homeHeader + ' container'}>
                    <IndexLink to="/"><img src={logo} /></IndexLink>
                    <img src={nav} className={styles.navbarImg} id="homeNav" onClick={this.getNav.bind(this)}/>
                    {!navButton && clientWidth <= 1024 &&
                    <div className={styles.homeHeaderUl} id="navbar-menu" style={style}>
                        <ul>
                            <li><IndexLink to="/">首页</IndexLink></li>
                            <li><Link to="/crowdsale">ICO</Link></li>
                            <li><a href="/files/Wanchain-Whitepaper-CH-version.pdf" target="_blank">白皮书</a></li>
                            <li><a href="/files/Wanchain-l-CH-version.pdf" target="_blank">黄皮书</a></li>
                            <li><Link to="/about">团队</Link></li>
                        </ul>
                    </div>
                    }

                    {navButton && clientWidth <= 1024 &&
                    <div className={styles.homeHeaderUl} id="navbar-menu" style={style1}>
                        <ul>
                            <li><IndexLink to="/">首页</IndexLink></li>
                            <li><Link to="/crowdsale">ICO</Link></li>
                            <li><a href="/files/Wanchain-Whitepaper-CH-version.pdf" target="_blank">白皮书</a></li>
                            <li><a href="/files/Wanchain-Yellowpaper-CH-version.pdf" target="_blank">黄皮书</a></li>
                            <li><Link to="/about">团队</Link></li>
                        </ul>
                    </div>
                    }

                    {!navButton && clientWidth >= 1024 &&
                    <div className={styles.homeHeaderUl} id="navbar-menu" style={style1}>
                        <ul>
                            <li><IndexLink to="/">首页</IndexLink></li>
                            <li><Link to="/crowdsale">ICO</Link></li>
                            <li>
                                <div className={styles.homeDropdown}>
                                    <a>文档</a>
                                    <div className={styles['homeDropdown-content']}>
                                        <a href="/files/Wanchain-Whitepaper-CH-version.pdf" target="_blank">白皮书</a>
                                        <a href="/files/Wanchain-Yellowpaper-CH-version.pdf" target="_blank">黄皮书</a>
                                    </div>
                                </div>
                            </li>
                            <li><Link to="/about">团队</Link></li>
                        </ul>
                    </div>
                    }

                    <div className={styles.homeGit}>
                        <a href="https://github.com/wanchain" target="_blank"><img src={github} /></a>
                        <a onClick={() => {this.onChangeZn();}}>中文</a>{' | '}
                        <a onClick={() => {this.onChangeEn();}}>English</a>
                    </div>
                </div>

                <div className="container">
                    <div className={styles.homeHeaderBodyDiv1}>
                        <div className={styles.scrolltext}>
                            <div className={styles.quotation} id="quotation" >
                                <ul>
                                    <li><h2>分布式未来"<small>银行</small>"</h2></li>
                                    <li><h2>数字经济超级"<small>金融市场</small>"</h2></li>
                                    <li><h2>区块链的"<small>互联网</small>"</h2></li>
                                </ul>
                            </div>
                        </div>
                        <p>连接不同数字资产，连接现在与未来
                            <small>万维链旨在建立一个基础设施，以去中心化的方式完成不同区块链网络的连接及价值的交换</small>
                        </p>
                        <ul className={styles.countdown}>
                            <li><span >{this.state.date.days}</span><small>:</small><p>{this.state.date.ref_days}</p></li>
                            <li><span >{this.state.date.hours}</span><small>:</small><p>{this.state.date.ref_hours}</p></li>
                            <li><span >{this.state.date.minutes}</span><small>:</small><p>{this.state.date.ref_minutes}</p></li>
                            <li><span>{this.state.date.seconds}</span><small style={{opacity: 0}}>:</small><p>{this.state.date.ref_seconds}</p></li>
                        </ul>
                    </div>
                    <div className={styles.homeHeaderBodyDiv2}>
                        <a className={styles['home-submit-button'] + ' btn'} href="/files/Wanchain-Whitepaper-CH-version.pdf" target="_blank">白皮书</a>
                        <Link to="/crowdsale" className={styles['home-submit-button2'] + ' btn'}>ICO</Link>
                    </div>
                </div>
            </div>
            }

            {language === 'en' &&
            <div className={styles.homeDiv}>
                <div className={styles.homeHeader + ' container'}>
                    <IndexLink to="/"><img src={logo} /></IndexLink>
                    <img src={nav} className={styles.navbarImg} id="homeNav" onClick={this.getNav.bind(this)}/>
                    {!navButton && clientWidth <= 1024 &&
                    <div className={styles.homeHeaderUl} id="navbar-menu" style={style}>
                        <ul>
                            <li><IndexLink to="/">Home</IndexLink></li>
                            <li><Link to="/crowdsale">ICO</Link></li>
                            <li><a href="/files/Wanchain-Whitepaper-EN-version.pdf" target="_blank">Whitepaper</a></li>
                            <li><a href="/files/Wanchain-Yellowpaper-EN-version.pdf" target="_blank">Yellowpaper</a></li>
                            <li><Link to="/about">Team</Link></li>
                        </ul>
                    </div>
                    }

                    {navButton && clientWidth <= 1024 &&
                    <div className={styles.homeHeaderUl} id="navbar-menu" style={style1}>
                        <ul>
                            <li><IndexLink to="/">Home</IndexLink></li>
                            <li><Link to="/crowdsale">ICO</Link></li>
                            <li><a href="/files/Wanchain-Whitepaper-EN-version.pdf" target="_blank">Whitepaper</a></li>
                            <li><a href="/files/Wanchain-Yellowpaper-EN-version.pdf" target="_blank">Yellowpaper</a></li>
                            <li><Link to="/about">Team</Link></li>
                        </ul>
                    </div>
                    }

                    {!navButton && clientWidth >= 1024 &&
                    <div className={styles.homeHeaderUl} id="navbar-menu" style={style1}>
                        <ul>
                            <li><IndexLink to="/">Home</IndexLink></li>
                            <li><Link to="/crowdsale">ICO</Link></li>
                            <li>
                                <div className={styles.homeDropdown}>
                                    <a>Docs</a>
                                    <div className={styles['homeDropdown-content']}>
                                        <a href="/files/Wanchain-Whitepaper-EN-version.pdf" target="_blank">Whitepaper</a>
                                        <a href="/files/Wanchain-Yellowpaper-EN-version.pdf" target="_blank">Yellowpaper</a>
                                    </div>
                                </div>
                            </li>
                            <li><Link to="/about">Team</Link></li>
                        </ul>
                    </div>
                    }

                    <div className={styles.homeGit}>
                        <a href="https://github.com/wanchain" target="_blank"><img src={github} /></a>
                        <a onClick={() => {this.onChangeZn();}}>中文</a>{' | '}
                        <a onClick={() => {this.onChangeEn();}}>English</a>
                    </div>
                </div>

                <div className="container">
                    <div className={styles.homeHeaderBodyDiv1}>
                        <div className={styles.scrolltext}>
                            <div className={styles.quotation} id="quotation" >
                                {language === 'en' && Number(clientWidth) > 767 &&
                                <ul>
                                    <li><h2>A Distributed "<small>Super Financial Market</small>"</h2></li>
                                    <li><h2>Internet of "<small>Blockchains</small>"</h2></li>
                                </ul>
                                }
                                {language === 'en' && Number(clientWidth) <= 767 &&
                                <ul>
                                    <li><h2>A Distributed <br/>"<small>Super Financial Market</small>"</h2></li>
                                    <li><h2>Internet of "<small>Blockchains</small>"</h2></li>
                                </ul>
                                }
                            </div>
                        </div>
                        <p>Links different digital assets,connecting the present and future
                            <small>Wanchain seeks to create a new distributed financial infrastructure, connecting different blockchain networks together to exchange value.</small>
                        </p>
                        <ul className={styles.countdown}>
                            <li><span >{this.state.date.days}</span><small>:</small><p>{this.state.date.ref_days}</p></li>
                            <li><span >{this.state.date.hours}</span><small>:</small><p>{this.state.date.ref_hours}</p></li>
                            <li><span >{this.state.date.minutes}</span><small>:</small><p>{this.state.date.ref_minutes}</p></li>
                            <li><span>{this.state.date.seconds}</span><small style={{opacity: 0}}>:</small><p>{this.state.date.ref_seconds}</p></li>
                        </ul>
                    </div>
                    <div className={styles.homeHeaderBodyDiv2}>
                        <a className={styles['home-submit-button'] + ' btn'} href="/files/Wanchain-Whitepaper-EN-version.pdf" target="_blank">Whitepaper</a>
                        <Link to="/crowdsale" className={styles['home-submit-button2'] + ' btn'}>ICO</Link>
                    </div>
                </div>
            </div>
            }


            <Div1/>
            <Div2/>
            <Div3/>
            <Div4/>
            <Div5/>
            <Div6/>
            <Div7/>
        </div>
    );
  }
}
