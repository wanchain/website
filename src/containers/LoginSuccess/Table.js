import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';
import {insertNewsFunc, getTableStateFunc, queryNewsFunc } from 'redux/modules/auth';
import cookie from 'react-cookie';

@connect(
    state => ({insertResult: state.auth.insertResult, queryNewsResult: state.auth.queryNewsResult}),
    {insertNewsFunc, getTableStateFunc, queryNewsFunc, pushState: push})
export default class Table extends Component {
    static propTypes = {
      insertNewsFunc: PropTypes.func,
      insertResult: PropTypes.object,
      getTableStateFunc: PropTypes.func,
      queryNewsFunc: PropTypes.func,
      queryNewsResult: PropTypes.object,
      pushState: PropTypes.func.isRequired
    };

    componentWillMount() {
      console.log('Table');
      const data = {limit: 10};
      this.props.queryNewsFunc(data);
    }

    onSubmit() {
      this.props.pushState('/add');
    }

    render() {
      const {queryNewsResult} = this.props;
      const token = cookie.load('token');
      let result;
      if (queryNewsResult && queryNewsResult.status && queryNewsResult.status === 1) {
        result = queryNewsResult.result.map((value, index) => {
          return (
              <tr key={index}>
                  <td>{value.title}</td>
                  <td>{value.best_time}</td>
                  <td>{value.best_time}</td>
              </tr>
          );
        });
      }

      return (
          <div>
              {token &&
              <div className="container">
                  <Helmet title="万维链(Wanchain)-后台管理系统"/>
                  <table className="table table-hover">
                      <thead>
                      <tr>
                          <th>主题</th>
                          <th>配置时间</th>
                          <th>创建时间</th>
                      </tr>
                      </thead>
                      <tbody>
                      {result}
                      </tbody>
                  </table>
                  {/* <button type="button" className="btn btn-primary" onClick={this.onSubmit.bind(this)}>新增</button> */}
                  <a href="/add">新增</a>
              </div>
              }
          </div>
      );
    }
}
