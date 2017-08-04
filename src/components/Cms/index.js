import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './Cms.scss';

class Cms extends Component {
    static propTypes = {
        language: PropTypes.string,
        clientWidth: PropTypes.number,
    };

    render() {
        const {language, clientWidth} = this.props;

        return (
            <div className="container cmsHeader">
                <h2>新闻列表</h2>
                <Link to="cms/add">新增</Link>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>标题</th>
                        <th>创建日期</th>
                        <th>配置日期</th>
                        <th>修改配置日期</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Tanmay</td>
                        <td>Bangalore</td>
                        <td>560001</td>
                        <td><a>修改</a></td>
                    </tr>
                    <tr>
                        <td>Sachin</td>
                        <td>Mumbai</td>
                        <td>400003</td>
                        <td><a>修改</a></td>
                    </tr>
                    <tr>
                        <td>Uma</td>
                        <td>Pune</td>
                        <td>411027</td>
                        <td><a>修改</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const mapStateToProps = (state) => ({
    language : state.lang.language,
    clientWidth: state.lang.clientWidth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cms)

