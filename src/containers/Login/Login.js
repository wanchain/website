import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import * as authActions from 'redux/modules/auth';

@connect(
  state => ({user: state.auth.user}),
  authActions)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
    logout: PropTypes.func,
    getUserFunc: PropTypes.func,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {email, passwd} = this.refs;
    const data = {username: email.value, password: passwd.value};
    // console.log('data', data);
    this.props.getUserFunc(data);
    email.value = '';
    passwd.value = '';
  };

  render() {
    // const {user, logout} = this.props;
    const location = require('./images/location.png');
    const styles = require('./Login.scss');
    return (
      <div className={styles['app-location'] + ' container'}>
        <Helmet title="Wanchain-Login"/>
        <h2>Welcome to Wanchian</h2>
        <div className={styles.line}><span></span></div>
        <div className={styles.location}><img src={location} className={styles['img-responsive']} alt="" /></div>
        <form>
          <input type="text" className={styles.text} placeholder="E-mail address" ref="email"/>
          <input type="password" placeholder="Password" ref="passwd"/>
          <div className={styles.submit}>
            <a id="mySubmit" onClick={this.handleSubmit.bind(this)}>Login</a>
          </div>
          <div className="clear"></div>
        </form>
      </div>
    );
  }
}
