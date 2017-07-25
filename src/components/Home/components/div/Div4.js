import React, {PropTypes}  from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from '../../../../store/lang';

import '../div.scss';

import line from '../../../../image/蓝色分割线.png';


class Div4 extends React.Component {

    static propTypes = {
        language: PropTypes.string,
    };

    render() {

        const {language} = this.props;

        return (
            <div className="div4Header">
                {language === 'zn' &&
                <div className="div4HeaderDiv container">
                    <h2>最新通告</h2>
                    <img src={line} />
                    <div className="col-lg-12">
                        <div className="col-lg-4">
                            <div className="AstroModule7" >
                                <h2>算法推荐 + 场景结合</h2>
                                <p>万维链通用跨链协议是钱包与万维链节点，万维链节点与同构链节点的通信协议，通过协议完成跨链交易相关数据的请求、确认等相关通信。根据通用协议社区开发者可以根据应用场景开发独立的多资产钱包、建立不同开放程度的链条。
                                    万维链通用跨链协议是钱包与万维链节点，万维链节点与同构链节点的通信协议，通过协议完成跨链交易相关数据的请求、确认等相关通信。根据通用协议社区开发者可以根据应用场景开发独立的多资产钱包、建立不同开放程度的链条。
                                </p>
                                <h4>2017-01-02</h4>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="AstroModule7">
                                <h2>算法推荐 + 场景结合</h2>
                                <p>万维链通用跨链协议是钱包与万维链节点，万维链节点与同构链节点的通信协议，通过协议完成跨链交易相关数据的请求、确认等相关通信。根据通用协议社区开发者可以根据应用场景开发独立的多资产钱包、建立不同开放程度的链条。
                                    万维链通用跨链协议是钱包与万维链节点，万维链节点与同构链节点的通信协议，通过协议完成跨链交易相关数据的请求、确认等相关通信。根据通用协议社区开发者可以根据应用场景开发独立的多资产钱包、建立不同开放程度的链条。
                                </p>
                                <h4>2017-01-02</h4>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="AstroModule7" >
                                <h2>算法推荐 + 场景结合</h2>
                                <p>万维链通用跨链协议是钱包与万维链节点，万维链节点与同构链节点的通信协议，通过协议完成跨链交易相关数据的请求、确认等相关通信。根据通用协议社区开发者可以根据应用场景开发独立的多资产钱包、建立不同开放程度的链条。
                                    万维链通用跨链协议是钱包与万维链节点，万维链节点与同构链节点的通信协议，通过协议完成跨链交易相关数据的请求、确认等相关通信。根据通用协议社区开发者可以根据应用场景开发独立的多资产钱包、建立不同开放程度的链条。
                                </p>
                                <h4>2017-01-02</h4>
                            </div>
                        </div>
                    </div>
                </div>
                }

                {language === 'en' &&
                <div className="div4HeaderDiv container">
                    <h2>最新通告</h2>
                    <img src={line} />
                    <div className="col-lg-12">
                        <div className="col-lg-4">
                            <div className="AstroModule7" >
                                <h2>算法推荐 + 场景结合</h2>
                                <p>万维链通用跨链协议是钱包与万维链节点，万维链节点与同构链节点的通信协议，通过协议完成跨链交易相关数据的请求、确认等相关通信。根据通用协议社区开发者可以根据应用场景开发独立的多资产钱包、建立不同开放程度的链条。
                                    万维链通用跨链协议是钱包与万维链节点，万维链节点与同构链节点的通信协议，通过协议完成跨链交易相关数据的请求、确认等相关通信。根据通用协议社区开发者可以根据应用场景开发独立的多资产钱包、建立不同开放程度的链条。
                                </p>
                                <h4>2017-01-02</h4>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="AstroModule7">
                                <h2>算法推荐 + 场景结合</h2>
                                <p>万维链通用跨链协议是钱包与万维链节点，万维链节点与同构链节点的通信协议，通过协议完成跨链交易相关数据的请求、确认等相关通信。根据通用协议社区开发者可以根据应用场景开发独立的多资产钱包、建立不同开放程度的链条。
                                    万维链通用跨链协议是钱包与万维链节点，万维链节点与同构链节点的通信协议，通过协议完成跨链交易相关数据的请求、确认等相关通信。根据通用协议社区开发者可以根据应用场景开发独立的多资产钱包、建立不同开放程度的链条。
                                </p>
                                <h4>2017-01-02</h4>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="AstroModule7" >
                                <h2>算法推荐 + 场景结合</h2>
                                <p>万维链通用跨链协议是钱包与万维链节点，万维链节点与同构链节点的通信协议，通过协议完成跨链交易相关数据的请求、确认等相关通信。根据通用协议社区开发者可以根据应用场景开发独立的多资产钱包、建立不同开放程度的链条。
                                    万维链通用跨链协议是钱包与万维链节点，万维链节点与同构链节点的通信协议，通过协议完成跨链交易相关数据的请求、确认等相关通信。根据通用协议社区开发者可以根据应用场景开发独立的多资产钱包、建立不同开放程度的链条。
                                </p>
                                <h4>2017-01-02</h4>
                            </div>
                        </div>
                    </div>
                </div>
                }

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: (data) => {
            dispatch(changeLanguage(data))
        },
    };
};

const mapStateToProps = (state) => ({
    language : state.lang.language,
});

export default connect(mapStateToProps, mapDispatchToProps)(Div4)
