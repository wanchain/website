import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { IndexLink } from 'react-router';
import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout, changeLangFunc } from 'redux/modules/auth';
// import { logout } from 'redux/modules/auth';
import { Navigation, Footer } from 'components';
import { push } from 'react-router-redux';
// import config from '../../config';
import { asyncConnect } from 'redux-async-connect';

import getLange from '../Home/utils/getLange';

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
    state => ({user: state.auth.user, transition: state.routing.locationBeforeTransitions, language: state.auth.language, }),
    {logout, pushState: push, changeLangFunc})
class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    language: PropTypes.string,
    changeLangFunc: PropTypes.func,

    transition: PropTypes.object,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const curr = getLange();

    if (curr !== 'zh-CN') {
      this.props.changeLangFunc('en');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/loginSuccess');
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
    const {transition, language} = this.props;

    return (
      <div className={styles.app}>
        {language === 'zn' && <Helmet title="万维链-资产跨链+隐私保护+智能合约 构建数字新经济基础设施"/>}
        {language === 'en' && <Helmet title="wanchain-A Distributed 'Super Financial Market'"/>}
        {transition.pathname !== '/' && <Navigation/>}
        <div className={styles.appContent}>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     logout: () => {
//       dispatch(logout());
//     },
//   };
// };
//
// const mapStateToProps = (state) => ({
//   user: state.auth.user,
//   transition: state.routing.locationBeforeTransitions,
//   language: state.auth.language,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
//  <Helmet {...config.app.head}/>
