import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Helmet from 'react-helmet';
import { IndexLink, Link, browserHistory } from 'react-router';

import { changeLanguage } from '../../store/lang';

import Div1 from './components/div/Div1';
import Div1o from './components/div/Div1o';
import Div2 from './components/div/Div2';
import Div3 from './components/div/Div3';
import Div4 from './components/div/Div4';
import Div5 from './components/div/Div5';
import Div6 from './components/div/Div6';


import './Home.scss'
import github from '../../image/github.png';
import logo from '../../image/logo.png';
import nav from '../../image/nav1.png';

import currentDate from './helpers/currentDate';


var getLange = () => {
    var currentLang = navigator.language;   //判断除IE外其他浏览器使用语言
    if(!currentLang){//判断IE浏览器使用语言
        currentLang = navigator.browserLanguage;
    } else {
        currentLang = navigator.language;   //判断除IE外其他浏览器使用语言
    }

    return currentLang;
};

class Home extends Component {
    static propTypes = {
        language: PropTypes.string,
        changeLanguage: PropTypes.func,

        hash: PropTypes.string,
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

    tick() {
        var target_date = new Date('09/06/2017 20:00:00'), // set target date
            current_date = currentDate(+10); // get fixed current date

        // difference of dates
        var difference = target_date - current_date;


        // basic math variables
        var _second = 1000,
            _minute = _second * 60,
            _hour = _minute * 60,
            _day = _hour * 24;

        // calculate dates
        var days = Math.floor(difference / _day),
            hours = Math.floor((difference % _day) / _hour),
            minutes = Math.floor((difference % _hour) / _minute),
            seconds = Math.floor((difference % _minute) / _second);

        // fix dates so that it will show two digets
        days = (String(days).length >= 2) ? days : '0' + days;
        hours = (String(hours).length >= 2) ? hours : '0' + hours;
        minutes = (String(minutes).length >= 2) ? minutes : '0' + minutes;
        seconds = (String(seconds).length >= 2) ? seconds : '0' + seconds;

        // based on the date change the refrence wording
        var ref_days = (days === 1) ? 'DAY' : 'DAYS',
            ref_hours = (hours === 1) ? 'HOUR' : 'HOURS',
            ref_minutes = (minutes === 1) ? 'MINUTE' : 'MINUTES',
            ref_seconds = (seconds === 1) ? 'SECOND' : 'SECONDS';

        this.setState((prevState) => ({
            date: {
                days: days, hours: hours, minutes: minutes, seconds: seconds,
                ref_days: ref_days, ref_hours: ref_hours, ref_minutes: ref_minutes, ref_seconds: ref_seconds,
            }
        }));
    }

    componentWillMount() {
        const {hash, language} = this.props;

        const curr = getLange();
        console.log('curr', curr);

        if (curr !== 'zh-CN') {
            this.props.changeLanguage('en');

            console.log(language);

            // if (language === 'zn') {
            //     if (hash === '#en') { this.props.changeLanguage('en')}
            //     else { this.props.changeLanguage('zn')}
            //
            //     global.dataFeedback.once('onchangeLangComplete', () => {
            //         browserHistory.push('/');
            //     });
            // }
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onChange(lang) {
        this.props.changeLanguage(lang);
    }

    render() {
        const {language, clientWidth} = this.props;
        const style = {width: '890px'};

        return (
            <div className="homeRoot">
                {language === 'en' &&
                <Helmet title="wanchain-A Distributed 'Super Financial Market' "/>
                }
                {language === 'zn' &&
                <Helmet title="万维链-资产跨链+隐私保护+智能合约 构建数字新经济基础设施"/>
                }
            <div className="homeDiv" style={{background: `url(${'image/homeHeader.jpg'})`}}>
                <nav className="homeHeader container">
                    <IndexLink to='/'><img src={logo} /></IndexLink>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i className="fa fa-bars"></i>
                        </button>
                        <img src={nav} className="navbarImg"/>
                    </div>
                    <div className="collapse navbar-collapse homeHeaderUl" id="navbar-menu">
                        {language === 'zn' &&
                        <ul className="nav navbar-nav" data-in="fadeInDown" data-out="fadeOutUp">
                            <li><IndexLink to='/'>首页</IndexLink></li>
                            <li><Link to='/crowdsale'>ICO</Link></li>
                            <li><a href='/files/Wanchain-Whitepaper-CH-version.pdf' target="_blank">白皮书</a></li>
                            <li><Link to='/about'>关于</Link></li>
                            <li><Link to='/'>博客</Link></li>
                        </ul>
                        }
                        {language === 'en' &&
                        <ul className="nav navbar-nav" data-in="fadeInDown" data-out="fadeOutUp">
                            <li><IndexLink to='/'>Home</IndexLink></li>
                            <li><Link to='/crowdsale'>ICO</Link></li>
                            <li><a href='/files/Wanchain-Whitepaper-EN-version.pdf' target="_blank">Whitepaper</a></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/'>Blog</Link></li>
                        </ul>
                        }
                    </div>

                    <div className="homeGit">
                        <a href="https://github.com/wanchain" target="_blank"><img src={github} /></a>
                        <a onClick={() => {this.onChange('zn')}}>中文</a>{' | '}
                        <a onClick={() => {this.onChange('en')}}>English</a>
                    </div>
                </nav>

                <div className="container">
                    <div className="homeHeaderBodyDiv1">

                        {language === 'zn' &&
                        <div className="scrolltext">
                            <div id="quotation">
                                <ul>
                                    <li><h2>分布式未来"<span>银行</span>"</h2></li>
                                    <li><h2>数字经济超级"<span>金融市场</span>"</h2></li>
                                    <li><h2>区块链的"<span>互联网</span>"</h2></li>
                                </ul>
                            </div>
                        </div>
                        }
                        {language === 'en' && Number(clientWidth) > 767 &&
                        <div className="scrolltext">
                            <div id="quotation">
                                <ul style={style}>
                                    <li><h2>A Distributed "<span>Super Financial Market</span>"</h2></li>
                                    <li><h2>Internet of "<span>Blockchains</span>"</h2></li>
                                </ul>
                            </div>
                        </div>
                        }
                        {language === 'en' && Number(clientWidth) <= 767 &&
                        <div className="scrolltext">
                            <div id="quotation">
                                <ul>
                                    <li><h2>A Distributed<br/> "<span>Super Financial Market</span>"</h2></li>
                                    <li><h2>Internet of "<span>Blockchains</span>"</h2></li>
                                </ul>
                            </div>
                        </div>
                        }
                        {language === 'zn' &&
                        <p>连接不同数字资产，连接现在与未来
                            <small>万维链旨在建立一个基础设施，以去中心化的方式完成不同区块链网络的连接及价值的交换</small>
                        </p>
                        }
                        {language === 'en' &&
                        <p>Links different digital assets,connecting the present and future
                            <small>Wanchain seeks to create a new distributed financial infrastructure, connecting different blockchain networks together to exchange value.</small>
                        </p>
                        }
                        <ul className="countdown">
                            <li>
                                <span style={{background: `url(${'image/radius2.png'})`}}>{this.state.date.days}</span>
                                <small>:</small>
                                <p>{this.state.date.ref_days}</p>
                            </li>
                            <li>
                                <span style={{background: `url(${'image/radius2.png'})`}}>{this.state.date.hours}</span>
                                <small>:</small>
                                <p>{this.state.date.ref_hours}</p>
                            </li>
                            <li>
                                <span style={{background: `url(${'image/radius2.png'})`}}>{this.state.date.minutes}</span>
                                <small>:</small>
                                <p>{this.state.date.ref_minutes}</p>
                            </li>
                            <li>
                                <span style={{background: `url(${'image/radius2.png'})`}}>{this.state.date.seconds}</span>
                                <small style={{opacity: '0', paddingLeft: '0', paddingRight: '0'}}>:</small>
                                <p>{this.state.date.ref_seconds}</p>
                            </li>
                        </ul>
                    </div>

                    {language === 'zn' &&
                    <div className="homeHeaderBodyDiv2">
                        <a className="btn home-submit-button" href='/files/Wanchain-Whitepaper-CH-version.pdf' target="_blank">白皮书</a>
                        <Link to="/crowdsale"><a className="btn home-submit-button2" data-toggle="modal" data-target=".bs-example-modal-lg">ICO</a></Link>
                    </div>
                    }
                    {language === 'en' &&
                    <div className="homeHeaderBodyDiv2En">
                        <a className="btn home-submit-button" href='/files/Wanchain-Whitepaper-EN-version.pdf' target="_blank">Whitepaper</a>
                        <Link to="/crowdsale"><a className="btn home-submit-button2" data-toggle="modal" data-target=".bs-example-modal-lg">ICO</a></Link>
                    </div>
                    }
                </div>
            </div>

                <Div1 />
                <Div1o/>
                <Div2 />
                <Div3 />
                <Div4 />
                <Div5 />
                <Div6 />

            </div>
    )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: (data) => {
            dispatch(changeLanguage(data))
        },
    };
};

const mapStateToProps = (state, ownProps) => ({
    language : state.lang.language,
    clientWidth: state.lang.clientWidth,

    hash: state.location.hash,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// <Div4 />

