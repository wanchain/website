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
      this.props.getNavButtonFunc(!navButton);
    }

    render() {
      const {language} = this.props;
      const styles = require('./Navigation.scss');

      const logo = require('./image/logo2.png');
      const logoMo = require('./image/icoLoho3.png');
      const nav = require('./image/nav2.png');
      const github = require('./image/github2.png');
      const github2 = require('./image/icoLoho1.png');

      const {navButton, clientWidth} = this.props;

      const style = {display: 'none'};
      const style1 = {display: 'inline_block'};

      return (
            <div className={styles.navRoot}>
                {language === 'zn' &&
                <div className={styles.navHeader + ' container'}>
                  {clientWidth > 320 &&
                  <IndexLink to="/"><img src={logo} /></IndexLink>
                  }
                  {clientWidth <= 320 &&
                  <IndexLink to="/"><img src={logoMo} /></IndexLink>
                  }
                    <img src={nav} className={styles.navbarImg} id="homeNav" onClick={this.getNav.bind(this)}/>
                    {!navButton && clientWidth <= 1024 &&
                    <div className={styles.navHeaderUl} id="navbar-menu" style={style}>
                        <ul>
                            <li><IndexLink to="/">首页</IndexLink></li>
                            {/* <li><Link to="/crowdsale">ICO</Link></li> */}
                            <li><a href={config.app.files.WhitepaperCH} target="_blank">白皮书</a></li>
                            <li><a href={config.app.files.YellowpaperCH} target="_blank">黄皮书</a></li>
                            <li><a href={config.app.files.CommercialCH} target="_blank">商业白皮书</a></li>
                            <li><Link to="/about">团队</Link></li>
                        </ul>
                    </div>
                    }

                    {navButton && clientWidth <= 1024 &&
                    <div className={styles.navHeaderUl} id="navbar-menu" style={style1}>
                        <ul>
                            <li><IndexLink to="/">首页</IndexLink></li>
                            {/* <li><Link to="/crowdsale">ICO</Link></li> */}
                            <li><a href={config.app.files.WhitepaperCH} target="_blank">白皮书</a></li>
                            <li><a href={config.app.files.YellowpaperCH} target="_blank">黄皮书</a></li>
                            <li><a href={config.app.files.CommercialCH} target="_blank">商业白皮书</a></li>
                            <li><Link to="/about">团队</Link></li>
                        </ul>
                    </div>
                    }

                    {!navButton && clientWidth > 1024 &&
                    <div className={styles.navHeaderUl} id="navbar-menu" style={style1}>
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
                      {clientWidth > 320 &&
                      <a href="https://github.com/wanchain" target="_blank"><img src={github} /></a>
                      }
                      {clientWidth <= 320 &&
                      <a href="https://github.com/wanchain" target="_blank"><img src={github2} /></a>
                      }

                        <a className={styles.navGitaTit} onClick={() => {this.onChangeZn();}}>中文</a>{' | '}
                        <a onClick={() => {this.onChangeEn();}}>English</a>
                    </div>
                </div>
                }

                {language === 'en' &&
                <div className={styles.navHeader + ' container'}>
                  {clientWidth > 320 &&
                  <IndexLink to="/"><img src={logo} /></IndexLink>
                  }
                  {clientWidth <= 320 &&
                  <IndexLink to="/"><img src={logoMo} /></IndexLink>
                  }
                    <img src={nav} className={styles.navbarImg} id="homeNav" onClick={this.getNav.bind(this)}/>
                    {!navButton && clientWidth <= 1024 &&
                    <div className={styles.navHeaderUl} id="navbar-menu" style={style}>
                        <ul>
                            <li><IndexLink to="/">Home</IndexLink></li>
                            {/* <li><Link to="/crowdsale">ICO</Link></li> */}
                            <li><a href={config.app.files.WhitepaperEN} target="_blank">Whitepaper</a></li>
                            <li><a href={config.app.files.YellowpaperEN} target="_blank">Yellowpaper</a></li>
                            <li><a href={config.app.files.CommercialEN} target="_blank">Commercialpaper</a></li>
                            <li><Link to="/about">Team</Link></li>
                        </ul>
                    </div>
                    }

                    {navButton && clientWidth <= 1024 &&
                    <div className={styles.navHeaderUl} id="navbar-menu" style={style1}>
                        <ul>
                            <li><IndexLink to="/">Home</IndexLink></li>
                            {/* <li><Link to="/crowdsale">ICO</Link></li> */}
                            <li><a href={config.app.files.WhitepaperEN} target="_blank">Whitepaper</a></li>
                            <li><a href={config.app.files.YellowpaperEN} target="_blank">Yellowpaper</a></li>
                            <li><a href={config.app.files.CommercialEN} target="_blank">Commercialpaper</a></li>
                            <li><Link to="/about">Team</Link></li>
                        </ul>
                    </div>
                    }

                    {!navButton && clientWidth > 1024 &&
                    <div className={styles.navHeaderUl} id="navbar-menu" style={style1}>
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
                      {clientWidth > 320 &&
                      <a href="https://github.com/wanchain" target="_blank"><img src={github} /></a>
                      }
                      {clientWidth <= 320 &&
                      <a href="https://github.com/wanchain" target="_blank"><img src={github2} /></a>
                      }
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
