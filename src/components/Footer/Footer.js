import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import WarningModal from '../../components/Warn';
import { warningOpenFunc, warningCloseFunc, warningMsgFunc} from 'redux/modules/warning';
import comConfig from '../comConfig';
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
      document.getElementById('qq').style.top = '-70px';
      document.getElementById('qq').style.display = 'inline-block';
    };

    onQQLeave = () => {
      document.getElementById('qq').style.display = 'none';
    };

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
      // const email = require('./image/email.png');
      const robot1 = require('./image/reddit.png');
      const discord1 = require('./image/discord.png');
      const facebook = require('./image/facebook.png');
      const twitter1 = require('./image/twitter.png');
      const webo1 = require('./image/web.png');
      const wechat1 = require('./image/webcat.png');
      const qq1 = require('./image/qq.png');
      const gitHub = require('./image/gitHub.png');

      const wecater = require('./image/wecatZn.png');
      const wecaterEn = require('./image/wechatEn.jpg');
      const qqer = require('./image/qqer.png');
      const tm = require('./image/tm.png');
      const newsletter = require('./image/Newsletter.png');
      const text = {display: 'inline_block', width: '112px'};
      const widthWechat = {width: '120px'};

      return (
            <div className={styles.FooterRoot}>
                <div className={styles.FooterContainer + ' container'}>

                    <div className={styles.formGroupDiv + ' form-group col-lg-4'}>
                        <div className={styles.footMenuBox}>
                            <div className={styles.footMenu}>
                                <a href="https://t.me/WanchainANN" target="_blank"><img src={tm}/></a>
                                <span>Telegram</span>
                            </div>
                            <div className={styles.footMenu}>
                                <a href="https://discord.gg/3DpeV6W" target="_blank"><img src={discord1}/></a>
                                <span>Discord</span>
                            </div>
                            <div className={styles.footMenu}>
                                <a href="https://twitter.com/wanchain_org" target="_blank"><img src={twitter1}/></a>
                                <span>{language === 'zn' ? '推特' : ' Twitter'}</span>
                            </div>
                            <div className={styles.footMenu}>
                                <a href="https://www.reddit.com/r/wanchain/" target="_blank"><img src={robot1}/></a>
                                <span>Reddit</span>
                            </div>
                            <div className={styles.footMenu}>
                                <a href="https://www.facebook.com/wanchainfoundation/" target="_blank"><img src={facebook}/></a>
                                <span>Facebook</span>
                            </div>
                            <div className={styles.footMenu}>
                                <a href="http://weibo.com/wanchain" target="_blank"><img src={webo1}/></a>
                                <span>{language === 'zn' ? '微博' : 'weibo'}</span>
                            </div>
                            <div className={styles.footMenu}>
                                <a onClick={this.onSubmit.bind(this)} onMouseOver={this.onSubmit.bind(this)} onMouseLeave={this.onLeave.bind(this)}><img src={wechat1}/></a>
                                <span>{language === 'zn' ? '微信' : 'wechat'}</span>
                                <img style={widthWechat} src={language === 'zn' ? wecater : wecaterEn} className={styles.wechat} id="wechat"/>
                            </div>
                            <div className={styles.footMenu}>
                                <a onClick={this.onQQ.bind(this)} onMouseOver={this.onQQ.bind(this)} onMouseLeave={this.onQQLeave.bind(this)}><img src={qq1}/></a>
                                <span className={text}>{language === 'zn' ? 'QQ群' : 'QQ group'}</span>
                                <img style={widthWechat} src={qqer} className={styles.qq} id="qq"/>
                            </div>
                            <div className={styles.GitHub}>
                                <a href="https://github.com/wanchain" target="_blank"><img src={gitHub}/></a>
                                <span>GitHub</span>
                            </div>
                            <div className={styles.Newsletter}>
                                <a href="https://wanchain.us17.list-manage.com/subscribe?u=474affe3661620cb14a108d52&id=f76852edbb" target="_blank"><img src={newsletter}/></a>
                                <span>Newsletter</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.FooterEnd}>
                    <span>{language === 'zn' ? comConfig.Footer.footEnd.zn : comConfig.Footer.footEnd.en}</span>
                </div>
                <WarningModal show={warningModal} onHide={this.showWarn.bind(this)} onClose={this.closeWarn.bind(this)} message={this.props.warningMsg}/>
            </div>
      );
    }
}

export default Footer;
