import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

// import { downloadWhitePaper } from '../../store/auth';

import Div1 from './components/div/Div1';
import Div2 from './components/div/Div2';
import Div3 from './components/div/Div3';
import Div4 from './components/div/Div4';
import Div5 from './components/div/Div5';

import { IndexLink, Link } from 'react-router';

import './Home.scss'
import github from '../../image/github.png';
import logo from '../../image/logo.png';


var currentDate = function (offset) {
    // get client's current date
    var date = new Date();

    // turn date to utc
    var utc = date.getTime() + (date.getTimezoneOffset() * 60000);

    // set new Date object
    var new_date = new Date(utc + (3600000*offset));

    return new_date;
};


class Home extends Component {
    static propTypes = {
        language: PropTypes.string,
        downloadWhitePaper: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.state = {date: {
            days: '00', hours: '00', minutes: '00', seconds: '00',
            ref_days: 'DAY', ref_hours: 'HOUR', ref_minutes: 'MINUTE', ref_seconds: 'SECOND'
        }};
    }

    tick() {
        var target_date = new Date('09/09/2017 23:59:59'), // set target date
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

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        const {language} = this.props;

        return (
            <div className="homeRoot">
                <div className="homeDiv" style={{background: `url(${'image/homeHeader.jpg'})`}}>
                    <nav className="homeHeader container">
                        <img src={logo} />
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars"></i>
                            </button>

                            <span className="menu-icon-span"><div className="menu-icon"></div></span>
                        </div>
                        <div className="collapse navbar-collapse homeHeaderUl" id="navbar-menu">
                            <ul className="nav navbar-nav" data-in="fadeInDown" data-out="fadeOutUp">

                                <li><IndexLink to='/'>首页</IndexLink></li>
                                <li><Link to='/counter'>众筹</Link></li>
                                <li><a href='/files/test.pdf' target="_blank">白皮书</a></li>
                                <li><Link to='/about'>关于</Link></li>
                                <li><Link to='/blog'>博客</Link></li>
                            </ul>
                        </div>

                        <div className="homeGit">
                            <img src={github} />
                            <p><a>中文</a>{' | '}<a>English</a></p>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="homeHeaderBodyDiv1">
                            <h2>分布式未来"<span>银行</span>"</h2>
                            <p>连接不同数字资产，连接现在与未来
                                <small>万维链旨在建立一个基础设施，以去中心化的方式完成不同区块链网络的连接及价值的交换</small>
                            </p>
                            <ul className="countdown">
                                <li>
                                    <span>{this.state.date.days}</span>
                                    <small>:</small>
                                    <p>{this.state.date.ref_days}</p>
                                </li>
                                <li>
                                    <span>{this.state.date.hours}</span>
                                    <small>:</small>
                                    <p>{this.state.date.ref_hours}</p>
                                </li>
                                <li>
                                    <span>{this.state.date.minutes}</span>
                                    <small>:</small>
                                    <p>{this.state.date.ref_minutes}</p>
                                </li>
                                <li>
                                    <span>{this.state.date.seconds}</span>
                                    <small style={{opacity: '0', paddingLeft: '0', paddingRight: '0'}}>:</small>
                                    <p>{this.state.date.ref_seconds}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="homeHeaderBodyDiv2">
                            <a className="btn home-submit-button" href='/files/test.pdf' target="_blank" >
                                白皮书
                            </a>

                            <a className="btn home-submit-button2" data-toggle="modal" data-target=".bs-example-modal-lg">
                                众筹
                            </a>
                        </div>
                    </div>
                </div>

                <Div1 />
                <Div2 />
                <Div3 />
                <Div5 />

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const mapStateToProps = (state) => ({
    language : state.lang.language,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// <Div4 />