import React from 'react';
import s from '../div.scss';

import line from '../../../../image/蓝色分割线.png';
import up from '../../../../image/down1.png';
import down from '../../../../image/up1.png';
import pot from '../../../../image/pot.png';

class Div5 extends React.Component {
    render() {
        return (
            <div className="div5Header">
                <div className="div5HeaderDiv container" >
                    <h2>ROADMAP</h2>
                    <img src={line} className="div5HeaderImg"/>
                </div>
                <div className="module8Div clearfix container">
                    <div className="module8DivUp col-lg-3">
                        <img src={up} />
                        <h4>开始理论设计及论证，跨链交易及隐私保护完成理论设计，基于智能合约代币隐私保护的POC开发</h4>
                        <p>2016<span>{' / '}06</span></p>
                    </div>
                    <div className="module8DivUp col-lg-3">
                        <img src={up} />
                        <h4>发布白皮书，万维链网站上线，进入ICO阶段</h4>
                        <p>2016<span>{' / '}12</span></p>
                    </div>
                    <div className="module8DivUp col-lg-3">
                        <img src={up} />
                        <h4>ICO tokens销售开始，发布万维链测试网络</h4>
                        <p>2017<span>{' / '}06</span></p>
                    </div>
                    <div className="module8DivUp col-lg-3">
                        <img src={up} />
                        <h4>ICO众筹开始，万维链测试网络上线</h4>
                        <p>2017<span>{' / '}09</span></p>
                    </div>
                </div>

                <div className="module8Div1 clearfix container">
                    <div className="module8Div1Up col-lg-3">
                        <img src={up} />
                        <p>2016<span>{' / '}06</span></p>
                        <h4>开始理论设计及论证，跨链交易及隐私保护完成理论设计，基于智能合约代币隐私保护的POC开发</h4>
                    </div>
                    <div className="module8Div1Up col-lg-3">
                        <img src={up} />
                        <p>2016<span>{' / '}12</span></p>
                        <h4>发布白皮书，万维链网站上线，进入ICO阶段</h4>
                    </div>
                    <div className="module8Div1Up col-lg-3">
                        <img src={up} />
                        <p>2017<span>{' / '}06</span></p>
                        <h4>ICO tokens销售开始，发布万维链测试网络</h4>
                    </div>
                    <div className="module8Div1Up col-lg-3">
                        <img src={up} />
                        <p>2017<span>{' / '}09</span></p>
                        <h4>ICO众筹开始，万维链测试网络上线</h4>
                    </div>
                </div>

                <div className="module8Div2 clearfix container">
                    <div className="module8DivUp2 col-lg-3">
                        <img src={down} />
                        <p>2017<span>{' / '}11</span></p>
                        <h4>万维链1.0上线，实现万维链钱包及带隐私保护的智能合约功能，WAN Coin发行</h4>
                    </div>
                    <div className="module8DivUp2 col-lg-3">
                        <img src={down} />
                        <p>2016<span>{' / '}09</span></p>
                        <h4>万维链2.0上线，支持以太坊跨链交易，万维链跨链协议1.0上线，多币种万维链钱包1.0上线</h4>
                    </div>
                    <div className="module8DivUp2 col-lg-3">
                        <img src={down} />
                        <p>2018<span>{' / '}05</span></p>
                        <h4>万维链3.0上线，支持比特币跨链交易，万维链跨链协议2.0上线，多币种万维链钱包2.0上线</h4>
                    </div>
                    <div className="module8DivUp2 col-lg-3">
                        <img src={down} />
                        <p>2018<span>{' / '}12</span></p>
                        <h4>万维链4.0上线，支持联盟链跨链交易，万维链跨链协议3.0上线，多币种万维链钱包3.0上线</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Div5;
