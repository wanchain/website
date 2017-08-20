import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { IndexLink } from 'react-router';
import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout, changeLangFunc, getTitleFunc } from 'redux/modules/auth';
// import { logout } from 'redux/modules/auth';
import { Navigation, Footer } from 'components';
import { push } from 'react-router-redux';
// import config from '../../config';
import { asyncConnect } from 'redux-async-connect';

// import getLange from '../Home/utils/getLange';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }

    return Promise.all(promises);
  }
}])

@connect(
    state => ({user: state.auth.user, transition: state.routing.locationBeforeTransitions, language: state.auth.language, appTitle: state.auth.appTitle}),
    {logout, pushState: push, changeLangFunc, getTitleFunc})
class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    language: PropTypes.string,
    changeLangFunc: PropTypes.func,

    transition: PropTypes.object,
    pushState: PropTypes.func.isRequired,

    appTitle: PropTypes.string,
    getTitleFunc: PropTypes.func,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.props.changeLangFunc(global.language);
    if (global.language === 'zn') {
      this.props.getTitleFunc('万维链(Wanchain)-资产跨链+隐私保护+智能合约 构建数字新经济基础设施');
    } else {
      this.props.getTitleFunc("wanchain-A Distributed 'Super Financial Market'");
    }
  }

  // componentDidMount() {
  //   const curr = getLange();
  //
  //   if (curr !== 'zh-CN') {
  //     this.props.changeLangFunc('en');
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/table');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const styles = require('./App.scss');
    const {transition, appTitle} = this.props;

    return (
      <div className={styles.app}>
        <Helmet title={appTitle}/>
        {transition.pathname !== '/' && <Navigation/>}
        <div className={styles.appContent}>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;

