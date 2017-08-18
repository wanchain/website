import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as authActions from 'redux/modules/auth';

@connect(
    state => ({insertResult: state.auth.insertResult, queryNewsResult: state.auth.queryNewsResult}),
    authActions)
export default class Table extends Component {
    static propTypes = {
      insertNewsFunc: PropTypes.func,
      insertResult: PropTypes.object,
      getTableStateFunc: PropTypes.func,
      queryNewsFunc: PropTypes.func,
      queryNewsResult: PropTypes.object,
    };

    componentWillMount() {
      console.log('Table');
      const data = {limit: 10};
      this.props.queryNewsFunc(data);
    }

    onSubmit(event) {
      event.preventDefault();
      this.props.getTableStateFunc(1);
    }

    render() {
      const {queryNewsResult} = this.props;
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
                <button type="button" className="btn btn-primary" onClick={this.onSubmit.bind(this)}>新增</button>
            </div>
      );
    }
}
