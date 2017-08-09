import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import WarningModal from '../../components/Warn';
import { warningOpenFunc, warningCloseFunc, warningMsgFunc} from 'redux/modules/warning';

import emailCheck from './utils/emailCheck';

import { insertSubscribeFunc } from 'redux/modules/auth';
@connect(
    state => ({clientWidth: state.auth.clientWidth, language: state.auth.language, subscribeState: state.auth.subscribeState,
        warningModal: state.warning.warningModal, warningMsg: state.warning.warningMsg, }),
    {insertSubscribeFunc, warningOpenFunc, warningCloseFunc, warningMsgFunc}
    )
class Footer extends React.Component {

    static propTypes = {
      language: PropTypes.string,
      insertSubscribeFunc: PropTypes.func,
      subscribeState: PropTypes.object,
      clientWidth: PropTypes.number,

      warningOpenFunc: PropTypes.func,
      warningCloseFunc: PropTypes.func,
      warningMsgFunc: PropTypes.func,
      warningModal: PropTypes.bool,
      warningMsg: PropTypes.string,
    };

    componentWillMount() {
      this.props.warningCloseFunc();
    }

    onSubmit = () => {
      document.getElementById('wechat').style.position = 'absolute';
      document.getElementById('wechat').style.display = 'inline-block';
      if ( this.props.clientWidth >= 320 && this.props.clientWidth <= 767) {
        document.getElementById('wechat').style.top = '-170px';
      } else if (this.props.clientWidth >= 1025) {
        document.getElementById('wechat').style.top = '-90px';
      } else {
        document.getElementById('wechat').style.top = '-118px';
        document.getElementById('wechat').style.left = '-28px';
      }
    };

    onLeave =() => {
      document.getElementById('wechat').style.display = 'none';
    };

    onQQ = () => {
      document.getElementById('qq').style.position = 'absolute';
      document.getElementById('qq').style.top = '-90px';
      document.getElementById('qq').style.display = 'inline-block';
    };

    onQQLeave = () => {
      document.getElementById('qq').style.display = 'none';
    };

    // onClick = () => {
    //   const {wanchain_subscribe} = this.refs;
    //   const data = {email: wanchain_subscribe.value};
    //   this.props.insertSubscribeFunc(data);
    // };

    onClick = () => {
      const {wanchain_subscribe} = this.refs;

      let msg;
      if (emailCheck(wanchain_subscribe.value)) {
        const data = {email: wanchain_subscribe.value};
        this.props.insertSubscribeFunc(data);

        wanchain_subscribe.value = '';

        const self = this;
        global.dataFeedback.once('onSubscribeComplete', () => {
          console.log(self.props.subscribeState);
          console.log(self.props.subscribeState.status);
          if (self.props.subscribeState && self.props.subscribeState.status === 1) {
            if (self.props.language === 'zn') {msg = '订阅成功，请注意查收邮箱';} else {msg = 'Success! Please check the mailbox';}
            self.props.warningMsgFunc(msg);
          } else {
            if (self.props.language === 'zn') { msg = '订阅失败，请稍后再试';} else {msg = 'Failed! Please try again later';}
            self.props.warningMsgFunc(msg);
          }
          self.props.warningOpenFunc();
        });
      } else {
        if (this.props.language === 'zn') {msg = '电子邮件地址必须包括 ( @ 和 . )';} else {msg = 'E-mail addresses must include (@ and .)';}
        this.props.warningMsgFunc(msg);
        this.props.warningOpenFunc();
      }
    };

    showWarn = () => {
      this.props.warningOpenFunc();
    };
    closeWarn = () => {
      this.props.warningMsgFunc('');
      this.props.warningCloseFunc();
    };

    render() {
      const {language, warningModal} = this.props;

      const styles = require('./Footer.scss');
      const email = require('./image/email.png');
      // const robot1 = require('./image/reddit.png');
      const slack1 = require('./image/slack.png');

      const twitter1 = require('./image/twitter.png');
      const webo1 = require('./image/web.png');
      const wechat1 = require('./image/webcat.png');
      const qq1 = require('./image/qq.png');

      const wecater = require('./image/wecatZn.png');
      const qqer = require('./image/qqer.png');

      return (
            <div className={styles.FooterRoot}>
                <div className={styles.FooterContainer + ' container'}>
                    {language === 'zn' &&
                    <div className={styles.FooterformGroup + ' form-group col-lg-4'}>
                        <img src={email}/>
                        <input type="text" className="form-control" id="name" ref="wanchain_subscribe" placeholder="Please enter the email address" />
                        <div className={styles['submit-area']}>
                            <a className={styles['submit-button'] + ' btn'} data-toggle="modal" data-target=".bs-example-modal-lg"
                               onClick={this.onClick.bind(this)}>{' + '}订阅</a>
                        </div>
                        <p>更多项目请咨询：<span>info@wanchain.org</span></p>
                    </div>
                    }

                    {language === 'en' &&
                    <div className={styles.FooterformGroup + ' form-group col-lg-4'}>
                        <img src={email}/>
                        <input type="text" className="form-control" id="name" ref="wanchain_subscribe" placeholder="Please enter the email address" />
                        <div className={styles['submit-area']}>
                            <a className={styles['submit-button'] + ' btn'} data-toggle="modal" data-target=".bs-example-modal-lg"
                               onClick={this.onClick.bind(this)}>{' + '}Subscribe</a>
                        </div>
                        <p>for more information, please contact: <span>info@wanchain.org</span></p>
                    </div>
                    }

                    <div className={styles.formGroupDiv + ' form-group col-lg-4'}>
                        <img src={wecater} className={styles.wechat} id="wechat"/>
                        <img src={qqer} className={styles.qq} id="qq"/>

                        <a href="https://wanchain.herokuapp.com/" target="_blank"><img src={slack1}/></a>
                        <a href="https://twitter.com/wanchain_org" target="_blank"><img src={twitter1}/></a>
                        <a href="http://weibo.com/wanchain" target="_blank"><img src={webo1}/></a>
                        <a onClick={this.onSubmit.bind(this)} onMouseOver={this.onSubmit.bind(this)} onMouseLeave={this.onLeave.bind(this)}><img src={wechat1}/></a>
                        <a onClick={this.onQQ.bind(this)} onMouseOver={this.onQQ.bind(this)} onMouseLeave={this.onQQLeave.bind(this)}><img src={qq1}/></a>
                    </div>
                </div>
                <div className={styles.FooterEnd}>
                    { language === 'zn' && <span>©wanchain 2017 版权所有 all rights reserved</span>}
                    { language === 'en' && <span>©WANCHAIN FOUNDATION LTD 2017 all rights reserved</span>}
                </div>
                <WarningModal show={warningModal} onHide={this.showWarn.bind(this)} onClose={this.closeWarn.bind(this)} message={this.props.warningMsg}/>
            </div>
      );
    }
}

export default Footer;

// <a ><img src={robot1}/></a>
