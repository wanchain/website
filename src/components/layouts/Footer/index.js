import React from 'react';
import './Footer.scss';

import email from '../../../image/email.png';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="FooterRoot">
        <div className="FooterContainer container">
          <div className="FooterformGroup form-group col-lg-4">
              <img src={email}/>
              <input type="text" className="form-control" id="name"
                     placeholder="Please enter the email address" />
              <div className="submit-area">
                  <a className="btn submit-button" data-toggle="modal" data-target=".bs-example-modal-lg">
                      {' + '}Subscribe
                  </a>
              </div>
              <p>更多项目请咨询：<span>info@wanchain.org</span></p>
          </div>
            <div className="formGroupDiv form-group col-lg-4">
                <div className="social-share"  data-sites="weibo,qq,qzone,wechat,twitter,facebook"></div>
            </div>
        </div>

        <div className="FooterEnd">
          <span>©wanchain 2017 版权所有 all right reserved</span>
        </div>
      </div>
    );
  }
}
