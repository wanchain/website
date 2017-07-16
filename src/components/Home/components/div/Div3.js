import React from 'react';

import '../div.scss';
import part1 from '../../../../image/part1.png';
import part2 from '../../../../image/part2.png';
import part3 from '../../../../image/part3.png';
import part4 from '../../../../image/part4.png';

import one from '../../../../image/one.png';
import two from '../../../../image/two.png';
import three from '../../../../image/three.png';
import four from '../../../../image/four.png';

class Div3 extends React.Component {
    render() {

        return (
            <div className="div3Header">
                <div className="officalModule3">
                    <div className="container">
                        <div className="col-lg-12">
                            <img src={part1} className="col-lg-4 officalModule3Img"/>
                            <div className="officalModule3Div col-lg-8">
                                <img src={one}/>
                                <h2>去中心化的跨链机制</h2>
                                <span>DECENTRALIZED CHAIN MECHANISM</span>
                                <p>
                                    在万维链上，我们将支持主流公链的跨链交易（如BTC、ETH）、联盟链之间的资产跨链交易，以及公链与联盟链的跨链交易。
                                    通过类联合锚定，多方计算和门限秘钥共享机制结合多角色节点设计，完成跨链锁定账号的分布式秘钥管理。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="officalModule4">
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="officalModule4Div col-lg-7">
                                <img src={two}/>
                                <h2>通用跨链协议</h2>
                                <span>GENERAL AGREEMENT ACROSS THE CHAIN</span>
                                <p>
                                    万维链通用跨链协议是钱包与万维链节点，万维链节点与同构链节点的通信协议，通过协议完成跨链交易相关数据的请求、
                                    确认等相关通信。根据通用协议社区开发者可以根据应用场景开发独立的多资产钱包、建立不同开放程度的链条。
                                    通过类联合锚定，多方计算和门限秘钥共享机制结合多角色节点设计，完成跨链锁定账号的分布式秘钥管理。
                                </p>
                            </div>
                            <img src={part2} className="col-lg-4 officalModule3Img"/>
                        </div>
                    </div>
                </div>

                <div className="officalModule3">
                    <div className="container">
                        <div className="col-lg-12">
                            <img src={part3} className="col-lg-4 officalModule3Img"/>
                            <div className="officalModule3Div col-lg-8" id="officalModule3Div2">
                                <img src={three}/>
                                <h2>交易隐私保护</h2>
                                <span>TRANSACTION PRIVACY PROTECTION</span>
                                <p>
                                    万维链上本身及同构链支持基于智能合约的资产的交易隐私保护。利用环签名和一次性地址，万维链实现智能合约代币的隐私保护，
                                    万维链不但是全球第一个实现智能合约代币交易的隐私保护，更让万维链及同构联盟链更好的适用于金融等应用场景。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="officalModule4">
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="officalModule4Div col-lg-7 ">
                                <img src={four}/>
                                <h2>复杂场景支持</h2>
                                <span>TRANSACTION PRIVACY PROTECTION</span>
                                <p>
                                    于智能合约和通用协议，社区的开发者可以开发更加复杂的场景应用。尤其是需要多币种支持的场景。
                                    联盟链与公链的连接，联盟链之间的连接为区块链今后的应用前景提供了更多的选择，封闭与开放不再是非此即彼的选择题。
                                </p>
                            </div>
                            <img src={part4} className="col-lg-4 officalModule3Img"/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Div3;
