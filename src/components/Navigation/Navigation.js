import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';
// import cookie from 'react-cookie';
import config from '../../config';

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
      const navbar = document.getElementById('navbar-menu');
      if (this.props.clientWidth <= 1024) {
        this.props.getNavButtonFunc(!navButton);
        if ( navButton ) {navbar.style.display = 'none'; } else {navbar.style.display = 'inline-block'; }
      }
    }

    render() {
      const {language} = this.props;
      const styles = require('./Navigation.scss');

      const logo = require('./image/logo2.png');
      const logoMo = require('./image/icoLoho3.png');
      const nav = require('./image/nav2.png');
      const github = require('./image/github2.png');
      const github2 = require('./image/icoLoho1.png');

      const {clientWidth} = this.props;

      return (
            <div className={styles.navRoot}>
                {language === 'zn' &&
                <div className={styles.navHeader + ' container'}>
                    <IndexLink to="/"><img src={clientWidth > 320 ? logo : logoMo} /></IndexLink>
                    <img src={nav} className={styles.navbarImg} id="homeNav" onClick={this.getNav.bind(this)}/>
                    {clientWidth <= 1024 ?
                    <div className={styles.navHeaderUl} id="navbar-menu" style={{display: 'none'}}>
                        <ul>
                            <li><IndexLink to="/">首页</IndexLink></li>
                            {/* <li><Link to="/crowdsale">ICO</Link></li> */}
                            <li><a href={config.app.files.WhitepaperCH} target="_blank">白皮书</a></li>
                            <li><a href={config.app.files.YellowpaperCH} target="_blank">黄皮书</a></li>
                            <li><a href={config.app.files.CommercialCH} target="_blank">商业白皮书</a></li>
                            <li><Link to="/about">团队</Link></li>
                        </ul>
                    </div>
                    :
                    <div className={styles.navHeaderUl} id="navbar-menu">
                        <ul>
                            <li><IndexLink to="/">首页</IndexLink></li>
                            {/* <li><Link to="/crowdsale">ICO</Link></li> */}
                            <li>
                                <div className={styles.navDropdown}>
                                    <a>文档</a>
                                    <div className={styles['navDropdown-content']}>
                                        <a href={config.app.files.WhitepaperCH} target="_blank">白皮书</a>
                                        <a href={config.app.files.YellowpaperCH} target="_blank">黄皮书</a>
                                        <a href={config.app.files.CommercialCH} target="_blank">商业白皮书</a>
                                    </div>
                                </div>
                            </li>
                            <li><Link to="/about">团队</Link></li>
                        </ul>
                    </div>
                    }
                    <div className={styles.navGit}>
                        <a href="https://github.com/wanchain" target="_blank"><img src={clientWidth > 320 ? github : github2} /></a>
                        <a className={styles.navGitaTit} onClick={() => {this.onChangeZn();}}>中文</a>{' | '}
                        <a onClick={() => {this.onChangeEn();}}>English</a>
                    </div>
                </div>
                }

                {language === 'en' &&
                <div className={styles.navHeader + ' container'}>
                    <IndexLink to="/"><img src={clientWidth > 320 ? logo : logoMo} /></IndexLink>
                    <img src={nav} className={styles.navbarImg} id="homeNav" onClick={this.getNav.bind(this)}/>
                    {clientWidth <= 1024 ?
                    <div className={styles.navHeaderUl} id="navbar-menu" style={{display: 'none'}}>
                        <ul>
                            <li><IndexLink to="/">Home</IndexLink></li>
                            {/* <li><Link to="/crowdsale">ICO</Link></li> */}
                            <li><a href={config.app.files.WhitepaperEN} target="_blank">Whitepaper</a></li>
                            <li><a href={config.app.files.YellowpaperEN} target="_blank">Yellowpaper</a></li>
                            <li><a href={config.app.files.CommercialEN} target="_blank">Commercialpaper</a></li>
                            <li><Link to="/about">Team</Link></li>
                        </ul>
                    </div>
                    :
                    <div className={styles.navHeaderUl} id="navbar-menu">
                        <ul>
                            <li><IndexLink to="/">Home</IndexLink></li>
                            {/* <li><Link to="/crowdsale">ICO</Link></li> */}
                            <li>
                                <div className={styles.navDropdown}>
                                    <a>Docs</a>
                                    <div className={styles['navDropdown-content']}>
                                        <a href={config.app.files.WhitepaperEN} target="_blank">Whitepaper</a>
                                        <a href={config.app.files.YellowpaperEN} target="_blank">Yellowpaper</a>
                                        <a href={config.app.files.CommercialEN} target="_blank">Commercialpaper</a>
                                    </div>
                                </div>
                            </li>
                            <li><Link to="/about">Team</Link></li>
                        </ul>
                    </div>
                    }
                    <div className={styles.navGit}>
                        <a href="https://github.com/wanchain" target="_blank"><img src={clientWidth > 320 ? github : github2} /></a>
                        <a className={styles.navGitaTit} onClick={() => {this.onChangeZn();}}>中文</a>{' | '}
                        <a onClick={() => {this.onChangeEn();}}>English</a>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default Navigation;
