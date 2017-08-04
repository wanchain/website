import React, {PropTypes} from 'react';
import { connect } from 'react-redux'

import WarningModal from '../../../container/Warn';
import { subscribe } from '../../../store/home';
import { warningOpenFunc, warningCloseFunc, warningMsgFunc} from '../../../store/warning';

import './Footer.scss';

import email from '../../../image/email.png';
import robot1 from '../../../image/share/reddit.png';
import slack1 from '../../../image/share/slack.png';
import twitter1 from '../../../image/share/twitter.png';
import webo1 from '../../../image/share/web.png';
import wechat1 from '../../../image/share/webcat.png';
import qq1 from '../../../image/share/qq.png';

import wecater from '../../../image/share/wecatZn.png';
import wecaterEn from '../../../image/share/wecatEn.png';
import qqer from '../../../image/share/qqer.png';

function emailCheck (email) {
    var regu = "^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT)$";
    var re = new RegExp(regu);
    if (email.search(re) != -1) {
        return true;
    } else {
        return false;
    }
}

class Footer extends React.Component {

    static propTypes = {
        language: PropTypes.string,
        subscribe: PropTypes.func,
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
      document.getElementById("wechat").style.position="absolute";
      if ( this.props.clientWidth >= 320 && this.props.clientWidth <= 767) {document.getElementById("wechat").style.top="-170px";}
      else if (this.props.clientWidth >= 1025) {document.getElementById("wechat").style.top="-90px";}
      else {document.getElementById("wechat").style.top="-118px"; document.getElementById("wechat").style.left="-28px";}
      document.getElementById("wechat").style.display="inline-block";
    };

    onLeave =() => {
      document.getElementById("wechat").style.display="none";
    };

    onQQ = () => {
      document.getElementById("qq").style.position="absolute";
      document.getElementById("qq").style.top="-90px";
      document.getElementById("qq").style.display="inline-block";
    };

    onQQLeave = () => {
      document.getElementById("qq").style.display="none";
    };

    onClick = () => {
      const {wanchain_subscribe} = this.refs;

      let msg;
      if (emailCheck(wanchain_subscribe.value)) {
          const data = {email: wanchain_subscribe.value};
          this.props.subscribe(data);

          wanchain_subscribe.value = '';

          const self = this;
          global.dataFeedback.once('onSubscribeComplete', () => {
              if (self.props.subscribeState && self.props.subscribeState.message === 'Subscribe created!') {
                  if (self.props.language === 'zn') {msg = '订阅成功，请注意查收邮箱'} else {msg= 'Success! Please check the mailbox'}
                  self.props.warningMsgFunc(msg);
              } else if (self.props.subscribeState && self.props.subscribeState.errors && self.props.subscribeState.errors[0].message === 'email must be unique') {
                  if (self.props.language === 'zn') {msg = '您已订阅成功，无需重复订阅'} else {msg= 'You have subscribed successfully, Not need subscribe again'}
                  self.props.warningMsgFunc(msg);
              } else { if (self.props.language === 'zn') {msg = '订阅失败，请稍后再试'} else {msg= 'Failed! Please try again later'}
                  self.props.warningMsgFunc(msg);
              }
              self.props.warningOpenFunc();
          });
      } else {
          if (this.props.language === 'zn') {msg = '电子邮件地址必须包括 ( @ 和 . )'} else {msg= 'E-mail addresses must include (@ and .)'}
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
        const {language} = this.props;
        return (
            <div className="FooterRoot">
                <div className="FooterContainer container">
                    <div className="FooterformGroup form-group col-lg-4">
                        <img src={email}/>
                        <input type="text" className="form-control" id="name" ref="wanchain_subscribe" placeholder="Please enter the email address" />
                        <div className="submit-area">
                            {language === 'zn' &&
                            <a className="btn submit-button" data-toggle="modal" data-target=".bs-example-modal-lg" onClick={this.onClick.bind(this)}>{' + '}订阅</a>
                            }
                            {language === 'en' &&
                            <a className="btn submit-button" data-toggle="modal" data-target=".bs-example-modal-lg" onClick={this.onClick.bind(this)}>{' + '}Subscribe</a>
                            }
                        </div>
                        {language === 'zn' && <p>更多项目请咨询：<span>info@wanchain.org</span></p>}
                        {language === 'en' && <p>for more information, please contact: <span>info@wanchain.org</span></p>}
                    </div>

                    <div className="formGroupDiv form-group col-lg-4">
                        {language === 'zn' && <img src={wecater} className="wechat" id="wechat"/>}
                        {language === 'en' && <img src={wecaterEn} className="wechat" id="wechat"/>}
                        <img src={qqer} className="qq" id="qq"/>
                        <a ><img src={robot1}/></a>
                        <a href="https://wanchain.herokuapp.com/" target="_blank"><img src={slack1}/></a>
                        <a href="https://twitter.com/wanchain_org" target="_blank"><img src={twitter1}/></a>
                        <a href="http://weibo.com/wanchain" target="_blank"><img src={webo1}/></a>
                        <a onClick={this.onSubmit.bind(this)} onMouseOver={this.onSubmit.bind(this)} onMouseLeave={this.onLeave.bind(this)}><img src={wechat1}/></a>
                        <a onClick={this.onQQ.bind(this)} onMouseOver={this.onQQ.bind(this)} onMouseLeave={this.onQQLeave.bind(this)}><img src={qq1}/></a>
                    </div>
                </div>

                {language === 'zn' && <div className="FooterEnd"><span>©wanchain 2017 版权所有 all rights reserved</span></div>}
                {language === 'en' && <div className="FooterEnd"><span>©WANCHAIN FOUNDATION LTD  2017 all rights reserved</span></div>}

                <WarningModal show={this.props.warningModal} onHide={this.showWarn} onClose={this.closeWarn} message={this.props.warningMsg}/>
            </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (data) => {
            dispatch(subscribe(data));
        },

        warningOpenFunc: () => {
            dispatch(warningOpenFunc());
        },
        warningCloseFunc: () => {
            dispatch(warningCloseFunc());
        },
        warningMsgFunc: (msg) => {
            dispatch(warningMsgFunc(msg));
        },
    };
};

const mapStateToProps = (state) => ({
    language : state.lang.language,
    subscribeState: state.home.subscribeState,
    clientWidth: state.lang.clientWidth,

    warningModal: state.warning.warningModal,
    warningMsg: state.warning.warningMsg,
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer)