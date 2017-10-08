import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';
// import cookie from 'react-cookie';
import config from '../../config';

import { joinOpenFunc, joinCloseFunc, joinMsgFunc } from 'redux/modules/joinWarning';
import JoinwarningModal from '../JoinWarn';

import { getClientWidthFunc, getNavButtonFunc, changeLangFunc } from 'redux/modules/auth';

@connect(
    state => ({clientWidth: state.auth.clientWidth, navButton: state.auth.navButton, language: state.auth.language,
        icoMsg: state.joinWarning.icoMsg, joinWarningModal: state.joinWarning.joinWarningModal, }),
    {getClientWidthFunc, getNavButtonFunc, changeLangFunc, joinOpenFunc, joinCloseFunc, joinMsgFunc })
class Navigation extends Component {
    static propTypes = {
      clientWidth: PropTypes.number,
      getClientWidthFunc: PropTypes.func,

      navButton: PropTypes.bool,
      getNavButtonFunc: PropTypes.func,
      changeLangFunc: PropTypes.func,
      language: PropTypes.string,

      icoMsg: PropTypes.string,
      joinCloseFunc: PropTypes.func,
      joinOpenFunc: PropTypes.func,
      joinWarningModal: PropTypes.bool,
      joinMsgFunc: PropTypes.func,
    };
    componentWillMount() {
      this.props.joinCloseFunc();
      this.props.getNavButtonFunc(false);
    }
    componentDidMount() {
      const width = document.documentElement.clientWidth;
      this.props.getClientWidthFunc(width);
    }

    onClick() {
      this.props.joinOpenFunc();
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

    showWarnsFunc = () => {
      this.props.joinOpenFunc();
    };
    closeWarnsFunc = () => {
      this.props.joinCloseFunc();
    };

    render() {
      const {joinWarningModal} = this.props;
      const styles = require('./Navigation.scss');

      const logo = require('./image/logo2.png');
      const logoMo = require('./image/icoLoho3.png');
      const nav = require('./image/nav2.png');
      const github = require('./image/github2.png');
      const github2 = require('./image/icoLoho1.png');

      const {clientWidth, navButton} = this.props;

      return (
            <div className={styles.navRoot}>
                <div className={styles.navHeader + ' container'}>
                    <IndexLink to="/"><img src={clientWidth > 320 ? logo : logoMo} /></IndexLink>
                    <img src={nav} className={styles.navbarImg} id="homeNav" onClick={this.getNav.bind(this)}/>
                    { !navButton && clientWidth <= 1024 &&
                    <div className={styles.navHeaderUl} id="navbar-menu" style={{display: 'none'}}>
                        <ul>
                            <li><IndexLink to="/" onClick={this.getNav.bind(this)}>Home</IndexLink></li>
                            {/* <li><Link to="/tokensale" onClick={this.getNav.bind(this)}>Tokensale</Link></li> */}
                            {/* <li><Link to="/whitelist">Whitelist</Link></li> */}
                            <li><a href={config.app.files.WhitepaperEN} target="_blank">Whitepaper</a></li>
                            <li><a href={config.app.files.YellowpaperEN} target="_blank">Yellowpaper</a></li>
                            <li><a href={config.app.files.CommercialEN} target="_blank">Commercialpaper</a></li>
                            <li><Link to="/about" onClick={this.getNav.bind(this)}>Team</Link></li>
                        </ul>
                    </div>
                    }
                    { navButton && clientWidth <= 1024 &&
                    <div className={styles.navHeaderUl} id="navbar-menu" style={{display: 'inline-block'}}>
                        <ul>
                            <li><IndexLink to="/" onClick={this.getNav.bind(this)}>Home</IndexLink></li>
                            {/* <li><Link to="/tokensale" onClick={this.getNav.bind(this)}>Tokensale</Link></li> */}
                            {/* <li><Link to="/whitelist">Whitelist</Link></li> */}
                            <li><a href={config.app.files.WhitepaperEN} target="_blank">Whitepaper</a></li>
                            <li><a href={config.app.files.YellowpaperEN} target="_blank">Yellowpaper</a></li>
                            <li><a href={config.app.files.CommercialEN} target="_blank">Commercialpaper</a></li>
                            <li><Link to="/about" onClick={this.getNav.bind(this)}>Team</Link></li>
                        </ul>
                    </div>
                    }

                    {!navButton && clientWidth > 1024 &&
                    <div className={styles.navHeaderUl} id="navbar-menu">
                        <ul>
                            <li><IndexLink to="/">Home</IndexLink></li>
                            {/* <li><Link to="/tokensale">Tokensale</Link></li> */}
                            {/* <li><Link to="/whitelist">Whitelist</Link></li> */}
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
                    <a onClick={this.onClick.bind(this)} className={styles.navJoin}>Join us</a>
                    <div className={styles.navGit}>
                        <a href="https://github.com/wanchain" target="_blank"><img src={clientWidth > 320 ? github : github2} /></a>
                    </div>
                </div>
                <JoinwarningModal show={joinWarningModal} onHide={this.showWarnsFunc} onClose={this.closeWarnsFunc}/>
            </div>
        );
    }
}

export default Navigation;
