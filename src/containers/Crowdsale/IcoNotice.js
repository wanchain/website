import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { insertWhiteFunc } from 'redux/modules/white';
import { getNavButtonFunc } from 'redux/modules/auth';

// insertWhiteState: state.white.insertWhiteState,
@connect(
    state => ({clientWidth: state.auth.clientWidth, }),
    {getNavButtonFunc})
// insertWhiteFunc,
class IcoNotice extends Component {
    static propTypes = {
      // insertWhiteState: PropTypes.object,
      // insertWhiteFunc: PropTypes.func,
      getNavButtonFunc: PropTypes.func,
      clientWidth: PropTypes.string,
    };

    componentWillUnmount() {
      this.props.getNavButtonFunc(false);
    }

    onSubmit = () => {
      // const {whiteEmail, whitePass} = this.refs;
      // const data = {white_mail: whiteEmail.value, };
    };
    render() {
      const styles = require('./ico.scss');

      return (
          <div className={styles.ico + ' container'}>
              <strong>NOTICE:</strong>
              <hr/>
              <p>1.THE ICO PLANNED ON SEP 6TH WILL BE DELAYED TO A FUTURE DATE (STILL TO BE CONFIRMED WHEN).</p>
              <p>2.DO NOT VISIT ANY OTHER WEBSITES CLAIMING TO BE WANCHAIN.<br/>
                 {'   '}THE OFFICIAL WANCHAIN WEBSITE IS**WANCHAIN.ORG** NOT .INFO, .COM .IO .NET -- ONLY .ORG IS REAL</p>
              <p>3.WANCHAIN.CO IS A FAKE WEBSITE, DO NOT VISIT THIS SITE</p>
              <p>4.DO NOT CLICK ON ANY LINK SENT FROM SLACKBOT</p>
              <p>5.CURRENTLY THERE IS NO ONGOING ICO. WE WILL NOT DEMAND YOU SEND ETH TO US.</p>
          </div>
      );
    }
}

export default IcoNotice;

// <input placeholder="输入邮箱" ref="whiteEmail"/>
              // <input placeholder="验证码" ref="whitePass"/>
              // <a onClick={this.onSubmit.bind(this)}>提交验证</a>
