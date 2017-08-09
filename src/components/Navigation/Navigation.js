import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';
// import cookie from 'react-cookie';

import { getClientWidthFunc, getNavButtonFunc, changeLangFunc } from 'redux/modules/auth';

@connect(
    state => ({clientWidth: state.auth.clientWidth, navButton: state.auth.navButton, language: state.auth.language, }),
    {getClientWidthFunc, getNavButtonFunc, changeLangFunc})
class Navigation extends Component {
    static propTypes = {
      clientWidth: PropTypes.number,
      getClientWidthFunc: PropTypes.func,

      navButton: PropTypes.bool,
      getNavButtonFunc: PropTypes.func,
      changeLangFunc: PropTypes.func,
      language: PropTypes.string,
    };

    componentDidMount() {
      const width = document.documentElement.clientWidth;
      this.props.getClientWidthFunc(width);
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

    render() {
      const {language} = this.props;
      const styles = require('./Navigation.scss');

      const logo = require('./image/logo2.png');
      const nav = require('./image/nav2.png');
      const github = require('./image/github2.png');

      const {navButton, clientWidth} = this.props;

      const style = {display: 'none'};
      const style1 = {display: 'inline_block'};

      return (
            <div className={styles.navRoot}>
                {language === 'zn' &&
                <div className={styles.navHeader + ' container'}>
                    <IndexLink to="/"><img src={logo} /></IndexLink>
                    <img src={nav} className={styles.navbarImg} id="homeNav" onClick={this.getNav.bind(this)}/>
                    {!navButton && clientWidth <= 1024 &&
                    <div className={styles.navHeaderUl} id="navbar-menu" style={style}>
                        <ul>
                            <li><IndexLink to="/">首页</IndexLink></li>
                            <li><Link to="/crowdsale">ICO</Link></li>
                            <li><a href="/files/Wanchain-Whitepaper-CH-version.pdf" target="_blank">白皮书</a></li>
                            <li><a href="/files/Wanchain-Yellowpaper-CH-version.pdf" target="_blank">黄皮书</a></li>
                            <li><Link to="/about">团队</Link></li>
                        </ul>
                    </div>
                    }

                    {navButton && clientWidth <= 1024 &&
                    <div className={styles.navHeaderUl} id="navbar-menu" style={style1}>
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
                    <div className={styles.navHeaderUl} id="navbar-menu" style={style1}>
                        <ul>
                            <li><IndexLink to="/">首页</IndexLink></li>
                            <li><Link to="/crowdsale">ICO</Link></li>
                            <li>
                                <div className={styles.navDropdown}>
                                    <a>文档</a>
                                    <div className={styles['navDropdown-content']}>
                                        <a href="/files/Wanchain-Whitepaper-CH-version.pdf" target="_blank">白皮书</a>
                                        <a href="/files/Wanchain-Yellowpaper-CH-version.pdf" target="_blank">黄皮书</a>
                                    </div>
                                </div>
                            </li>
                            <li><Link to="/about">团队</Link></li>
                        </ul>
                    </div>
                    }

                    <div className={styles.navGit}>
                        <a href="https://github.com/wanchain" target="_blank"><img src={github} /></a>
                        <a onClick={() => {this.onChangeZn();}}>中文</a>{' | '}
                        <a onClick={() => {this.onChangeEn();}}>English</a>
                    </div>
                </div>
                }

                {language === 'en' &&
                <div className={styles.navHeader + ' container'}>
                    <IndexLink to="/"><img src={logo} /></IndexLink>
                    <img src={nav} className={styles.navbarImg} id="homeNav" onClick={this.getNav.bind(this)}/>
                    {!navButton && clientWidth <= 1024 &&
                    <div className={styles.navHeaderUl} id="navbar-menu" style={style}>
                        <ul>
                            <li><IndexLink to="/">Home</IndexLink></li>
                            <li><Link to="/crowdsale">ICO</Link></li>
                            <li><a href="/files/Wanchain-Whitepaper-CH-version.pdf" target="_blank">Whitepaper</a></li>
                            <li><a href="/files/Wanchain-Yellowpaper-CH-version.pdf" target="_blank">Yellowpaper</a></li>
                            <li><Link to="/about">Team</Link></li>
                        </ul>
                    </div>
                    }

                    {navButton && clientWidth <= 1024 &&
                    <div className={styles.navHeaderUl} id="navbar-menu" style={style1}>
                        <ul>
                            <li><IndexLink to="/">Home</IndexLink></li>
                            <li><Link to="/crowdsale">ICO</Link></li>
                            <li><a href="/files/Wanchain-Whitepaper-CH-version.pdf" target="_blank">Whitepaper</a></li>
                            <li><a href="/files/Wanchain-Yellowpaper-CH-version.pdf" target="_blank">Yellowpaper</a></li>
                            <li><Link to="/about">Team</Link></li>
                        </ul>
                    </div>
                    }

                    {!navButton && clientWidth >= 1024 &&
                    <div className={styles.navHeaderUl} id="navbar-menu" style={style1}>
                        <ul>
                            <li><IndexLink to="/">Home</IndexLink></li>
                            <li><Link to="/crowdsale">ICO</Link></li>
                            <li>
                                <div className={styles.navDropdown}>
                                    <a>Docs</a>
                                    <div className={styles['navDropdown-content']}>
                                        <a href="/files/Wanchain-Whitepaper-CH-version.pdf" target="_blank">Whitepaper</a>
                                        <a href="/files/Wanchain-Yellowpaper-CH-version.pdf" target="_blank">Yellowpaper</a>
                                    </div>
                                </div>
                            </li>
                            <li><Link to="/about">Team</Link></li>
                        </ul>
                    </div>
                    }

                    <div className={styles.navGit}>
                        <a href="https://github.com/wanchain" target="_blank"><img src={github} /></a>
                        <a onClick={() => {this.onChangeZn();}}>中文</a>{' | '}
                        <a onClick={() => {this.onChangeEn();}}>English</a>
                    </div>
                </div>
                }

            </div>
        );
    }
}

export default Navigation;
