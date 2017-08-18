import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as authActions from 'redux/modules/auth';
import Helmet from 'react-helmet';

import Add from './div/Add';
import Table from './div/Table';

@connect(
    state => ({user: state.auth.user, insertResult: state.auth.insertResult, tableState: state.auth.tableState}),
    authActions)
export default class LoginSuccess extends Component {
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func,
    insertNewsFunc: PropTypes.func,
    insertResult: PropTypes.object,
    tableState: PropTypes.number,
  };

  render() {
    const {user, tableState} = this.props;
    return (user &&
      <div className="container">
        <Helmet title="万维链(Wanchain)-后台管理系统"/>
        <h1>wanchain 数据录入系统</h1>
        {tableState === 0 && <Table/>}
        {tableState === 1 && <Add/>}
      </div>
    );
  }
}
