import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {cmsAddFunc} from '../../store/cms';

import './Cmsadd.scss';

class Cmsadd extends Component {
    static propTypes = {
        language: PropTypes.string,
        clientWidth: PropTypes.number,

        cmsAddFunc: PropTypes.func,
    };

    onClick() {
        const {title, news_link, des, best_time, details} = this.refs;

        const data={title: title.value, news_link: news_link.value, des: des.value, best_time: best_time.value, details: details.value};
        console.log('data', data);
        this.props.cmsAddFunc(data);

    }

    render() {
        const {language, clientWidth} = this.props;

        return (
            <div className="container addHeader">
                <h2>新增新闻</h2>
                <form className="form-horizontal" role="form">
                    <div className="form-group">
                        <label htmlFor="title" className="col-sm-2 control-label">标题</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" ref="title" placeholder="请输入标题" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="news_link" className="col-sm-2 control-label">新闻链接</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="news_link" ref="news_link" placeholder="请输入新闻链接 若无不填" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="best_time" className="col-sm-2 control-label">配置日期</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control" id="best_time" ref="best_time"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="des" className="col-sm-2 control-label">描述</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" rows="3" ref="des"></textarea>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="details" className="col-sm-2 control-label">详情</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" rows="3" ref="details"></textarea>
                        </div>
                    </div>

                </form>

                <a onClick={this.onClick.bind(this)}>提交</a>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cmsAddFunc: (data) => {
            dispatch(cmsAddFunc(data))
        },
    };
};

const mapStateToProps = (state) => ({
    language : state.lang.language,
    clientWidth: state.lang.clientWidth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cmsadd)

