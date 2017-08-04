import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import { changeLanguage } from '../../../store/lang';
import { login, users } from '../../../store/auth';
import cookie from 'react-cookie';
import './Navigation.scss';

import github from '../../../image/github2.png';
import logo from '../../../image/logo2.png';
import nav from '../../../image/nav2.png';

class Navigation extends Component {
    static propTypes = {
        changeLanguage: PropTypes.func.isRequired,
        // language: PropTypes.string,

        login: PropTypes.func,
        users: PropTypes.func,
    };

    onClick = (name) => {
        // this.props.changeLanguage(name);
        this.props.users();
        this.props.login();

        const self = this;
        global.dataFeedback.once('onLoginComplete', () => {
            const token = cookie.load('token');
            console.log('token', token);
        });
    };

    onChange(lang) {
        this.props.changeLanguage(lang);
    }

    render() {
        const {language} = this.props;
        return (
            <div className="navRoot">
                <nav className="navHeader container">
                    <IndexLink to='/'><img src={logo} /></IndexLink>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i className="fa fa-bars"></i>
                        </button>
                        <img src={nav} className="navbarImg"/>
                    </div>

                    <div className="collapse navbar-collapse navHeaderUl" id="navbar-menu">
                        {language === 'zn' &&
                        <ul className="nav navbar-nav" data-in="fadeInDown" data-out="fadeOutUp" id="navbar-brand">
                            <li><IndexLink to='/'>首页</IndexLink></li>
                            <li><Link to='/crowdsale'>ICO</Link></li>
                            <li><a href='/files/Wanchain-Whitepaper-CH-version.pdf' target="_blank" onClick={this.onClick}>白皮书</a></li>
                            <li><Link to='/about'>关于</Link></li>
                            <li><Link to='/'>博客</Link></li>
                        </ul>
                        }
                        {language === 'en' &&
                        <ul className="nav navbar-nav" data-in="fadeInDown" data-out="fadeOutUp" id="navbar-brand">
                            <li><IndexLink to='/'>Home</IndexLink></li>
                            <li><Link to='/crowdsale'>ICO</Link></li>
                            <li><a href='/files/Wanchain-Whitepaper-EN-version.pdf' target="_blank" onClick={this.onClick}>Whitepaper</a></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/'>Blog</Link></li>
                        </ul>
                        }
                    </div>

                    <div className="navGit">
                        <a href="https://github.com/wanchain" target="_blank"><img src={github} /></a>
                        <a onClick={() => {this.onChange('zn')}}>中文</a>{' | '}
                        <a onClick={() => {this.onChange('en')}}>English</a>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: (step) => {
            dispatch(changeLanguage(step));
        },
        login: () => {
            dispatch(login());
        },
        users: () => {
            dispatch(users());
        },
    };
};

const mapStateToProps = (state) => ({
    language : state.lang.language,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)

// <div className="navGit">
//     <img src={github} />
//     <p><a>中文</a>{' | '}<a>English</a></p>
// </div>