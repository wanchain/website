import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';
import {insertNewsFunc, getTableStateFunc} from 'redux/modules/auth';
import Helmet from 'react-helmet';
import cookie from 'react-cookie';

import config from '../../config';

import WarningModal from '../../components/Warn';
import { warningOpenFunc, warningCloseFunc, warningMsgFunc} from 'redux/modules/warning';

@connect(
    state => ({insertResult: state.auth.insertResult,
        warningModal: state.warning.warningModal, warningMsg: state.warning.warningMsg, }),
    {insertNewsFunc, getTableStateFunc, warningOpenFunc, warningCloseFunc, warningMsgFunc, pushState: push})
export default class Add extends Component {
    static propTypes = {
      insertNewsFunc: PropTypes.func,
      insertResult: PropTypes.object,
      getTableStateFunc: PropTypes.func,
      pushState: PropTypes.func.isRequired,

      warningOpenFunc: PropTypes.func,
      warningCloseFunc: PropTypes.func,
      warningMsgFunc: PropTypes.func,
      warningModal: PropTypes.bool,
      warningMsg: PropTypes.string,

    };

    onSubmit(event) {
      event.preventDefault();
      const {title, des, best_time, news_link} = this.refs;
      const details = document.getElementById('wanchainEditor').innerHTML;

      const data = {title: title.value, des: des.value, best_time: best_time.value, news_link: news_link.value, details: details};
      this.props.insertNewsFunc(data);

      const self = this;
      let msg;

      global.dataFeedback.once('onNewsComplete', () => {
        if (self.props.insertResult.status === 1) {
          msg = '添加成功';
          self.props.warningMsgFunc(msg);
        } else {
          msg = '添加失败';
          self.props.warningMsgFunc(msg);
        }
        self.props.warningOpenFunc();
        title.value = '';
        des.value = '';
        best_time.value = '';
        news_link.value = '';
        document.getElementById('wanchainEditor').innerHTML = '';
      });
    }

    onBack() {
      this.props.pushState('/table');
    }

    showWarn = () => {
      this.props.warningOpenFunc();
    };
    closeWarn = () => {
      this.props.warningMsgFunc('');
      this.props.warningCloseFunc();
    };

    render() {
      const {warningModal} = this.props;
      const token = cookie.load('token');
      return (
            <div>
                {token &&
                <div className="container">
                    <Helmet script={[{src: config.app.JS.wangeditor.script.src, 'data-main': config.app.JS.wangeditor.script.dataMain}]}
                            link ={[{href: config.app.JS.wangeditor.link.href, type: config.app.JS.wangeditor.link.type, rel: config.app.JS.wangeditor.link.rel}]}/>
                    <div >
                        <div className="form-group">
                            <label htmlFor="title">标题</label>
                            <input type="text" className="form-control" id="title" ref="title" placeholder="请输入标题" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="des">描述</label>
                            <input type="text" className="form-control" id="des" ref="des" placeholder="请输入描述" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="best_time">配置日期</label>
                            <input type="date" className="form-control" id="best_time" ref="best_time"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="news_link">新闻链接</label>
                            <input type="text" className="form-control" id="news_link" ref="news_link" placeholder="是否有新闻链接" />
                        </div>

                        <div id="wanchainEditor" style={{height: '500px', width: '1000px'}}>
                            <p>文章内容</p>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.onSubmit.bind(this)}>提交</button>
                    <button type="button" className="btn btn-primary" onClick={this.onBack.bind(this)} style={{float: 'right'}}>返回列表</button>

                    <WarningModal show={warningModal} onHide={this.showWarn.bind(this)} onClose={this.closeWarn.bind(this)} message={this.props.warningMsg}/>
                </div>
                }
            </div>
      );
    }
}
