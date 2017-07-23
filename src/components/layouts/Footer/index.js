import React, {PropTypes} from 'react';
import { connect } from 'react-redux'

import { subscribe } from '../../../store/home';

import './Footer.scss';

import email from '../../../image/email.png';
import robot1 from '../../../image/share/robot1.png';
import slack1 from '../../../image/share/slack1.png';
import twitter1 from '../../../image/share/twitter1.png';
import webo1 from '../../../image/share/webo1.png';
import wechat1 from '../../../image/share/wechat1.png';
import qq1 from '../../../image/share/qq1.png';

import wecater from '../../../image/share/wecater.png';
import qqer from '../../../image/share/qqer.png';

function emailCheck (email) {
    var emailPat=/^(.+)@(.+)$/;
    var matchArray=email.match(emailPat);
    if (matchArray==null) {
        alert("电子邮件地址必须包括 ( @ 和 . )");
        return false;
    }
    return true;
}

class Footer extends React.Component {

    static propTypes = {
        language: PropTypes.string,
        subscribe: PropTypes.func,
    };

  onSubmit = () => {
      document.getElementById("wechat").style.position="absolute";
      document.getElementById("wechat").style.top="-90px";
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

      if (emailCheck(wanchain_subscribe.value)) {
          const data = {email: wanchain_subscribe.value};
          this.props.subscribe(data);

          wanchain_subscribe.value = '';
      }
  };

  render() {
    return (
      <div className="FooterRoot">
        <div className="FooterContainer container">
          <div className="FooterformGroup form-group col-lg-4">
              <img src={email}/>
              <input type="text" className="form-control" id="name" ref="wanchain_subscribe"
                     placeholder="Please enter the email address" />
              <div className="submit-area">
                  <a className="btn submit-button" data-toggle="modal" data-target=".bs-example-modal-lg" onClick={this.onClick.bind(this)}>
                      {' + '}Subscribe
                  </a>
              </div>
              <p>更多项目请咨询：<span>info@wanchain.org</span></p>
          </div>
            <div className="formGroupDiv form-group col-lg-4">
                <img src={wecater} className="wechat" id="wechat"/>
                <img src={qqer} className="qq" id="qq"/>
                <a ><img src={robot1}/></a>
                <a href="https://wanchain.herokuapp.com/" target="_blank"><img src={slack1}/></a>
                <a><img src={twitter1}/></a>
                <a><img src={webo1}/></a>
                <a onClick={this.onSubmit.bind(this)} onMouseOver={this.onSubmit.bind(this)} onMouseLeave={this.onLeave.bind(this)}><img src={wechat1}/></a>
                <a onClick={this.onQQ.bind(this)} onMouseOver={this.onQQ.bind(this)} onMouseLeave={this.onQQLeave.bind(this)}><img src={qq1}/></a>
            </div>
        </div>

        <div className="FooterEnd">
          <span>©wanchain 2017 版权所有 All Rights Reserved</span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (data) => {
            dispatch(subscribe(data));
        },
    };
};

const mapStateToProps = (state) => ({
    language : state.lang.language,
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer)