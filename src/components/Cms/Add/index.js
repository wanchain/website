import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {cmsAddFunc} from '../../../store/cms';
import WarningModal from '../../../container/Warn';
import { warningOpenFunc, warningCloseFunc, warningMsgFunc} from '../../../store/warning';
import Ueditor from '../../../container/Ueditor';

import './Cmsadd.scss';

class Cmsadd extends Component {
    static propTypes = {
        cmsAddData: PropTypes.object,
        cmsAddFunc: PropTypes.func,
        changeStepFunc: PropTypes.func,

        warningOpenFunc: PropTypes.func,
        warningCloseFunc: PropTypes.func,
        warningMsgFunc: PropTypes.func,
        warningModal: PropTypes.bool,
        warningMsg: PropTypes.string,
    };

    componentWillMount() {
        this.props.warningCloseFunc();
    }

    onClick() {
        const {title, news_link, des, best_time, details} = this.refs;

        const data={title: title.value, news_link: news_link.value, des: des.value, best_time: best_time.value, details: details.value};
        this.props.cmsAddFunc(data);

        let msg;
        const self = this;
        global.dataFeedback.once('onCmsAddComplete', () => {
            if (self.props.cmsAddData && self.props.cmsAddData.status === 1) {
                msg = '新增成功';
                self.props.warningMsgFunc(msg);
            } else {
                msg = '新增失败';
                self.props.warningMsgFunc(msg);
            }
            self.props.warningOpenFunc();
        });

    }

    showWarn = () => {
        this.props.warningOpenFunc();
    };
    closeWarn = () => {
        this.props.warningMsgFunc('');
        this.props.warningCloseFunc();

        setTimeout(() => {
            this.props.changeStepFunc(0);
        }, 500);
    };

    render() {
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

                <WarningModal show={this.props.warningModal} onHide={this.showWarn} onClose={this.closeWarn} message={this.props.warningMsg}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cmsAddFunc: (data) => {
            dispatch(cmsAddFunc(data))
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
    cmsAddData: state.cms.cmsAddData,

    warningModal: state.warning.warningModal,
    warningMsg: state.warning.warningMsg,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cmsadd)

