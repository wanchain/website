import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as authActions from 'redux/modules/auth';
import Helmet from 'react-helmet';

@connect(
    state => ({user: state.auth.user}),
    authActions)
export default
class LoginSuccess extends Component {
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func
  };

  render() {
    const {user} = this.props;
    return (user &&
      <div className="container">
        <Helmet title="万维链(Wanchain)-后台管理系统" script={[{src: '/wangeditor/js/require.js', 'data-main': '/wangeditor/js/main'}]} link ={[{href: '/wangeditor/editor/css/wangEditor.min.css', type: 'text/css', rel: 'stylesheet'}]}/>
        <h1>Login Success</h1>

        <div>
          <div id="wanchainEditor" style={{height: '500px', width: '1000px'}}>
            <p>文章内容</p>
          </div>
        </div>
      </div>
    );
  }
}
