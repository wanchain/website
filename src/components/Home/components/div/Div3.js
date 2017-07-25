import React, {PropTypes}  from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from '../../../../store/lang';

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

    static propTypes = {
        language: PropTypes.string,
    };

    render() {

        const {language} = this.props;

        return (
            <div className="div3Header">
                <div className="officalModule3">
                    <div className="container">
                        <img src={part1} className="officalModule3Img"/>
                        {language === 'zn' &&
                        <div className="officalModule3Div col-lg-8">
                            <img src={one}/>
                            <h2>去中心化的跨链机制</h2>
                            {/*<span>DECENTRALIZED CHAIN MECHANISM</span>*/}
                            <p>
                                在万维链上，我们将支持主流公链的跨链交易（如BTC、ETH）、联盟链之间的资产跨链交易，以及公链与联盟链的跨链交易。
                                通过类联合锚定，多方计算和门限秘钥共享机制结合多角色节点设计，完成跨链锁定账号的分布式秘钥管理。
                            </p>
                        </div>
                        }

                        {language === 'en' &&
                        <div className="officalModule3Div col-lg-8">
                            <img src={one}/>
                            <h2>Decentralized Cross-Chain Mechanism</h2>
                            {/*<span>DECENTRALIZED CHAIN MECHANISM</span>*/}
                            <p>
                                On Wanchain, we support cross-chain transactions (such as BTC and ETH) of mainstream public chains,
                                assets cross-chain transaction among alliance chains as well as cross-chain transaction of public chain and alliance chain.
                                The distributive secret key management of the cross-link locking account can be realized by joint anchoring,
                                multiparty computation, threshold secret key sharing mechanism and multi-role node design.
                            </p>
                        </div>
                        }
                    </div>
                </div>

                <div className="officalModule4">
                    <div className="container">
                        {language === 'zn' &&
                        <div className="officalModule4Div col-lg-7">
                            <img src={two}/>
                            <h2>通用跨链协议</h2>
                            {/*<span>GENERAL AGREEMENT ACROSS THE CHAIN</span>*/}
                            <p>
                                万维链通用跨链协议是钱包与万维链节点，万维链节点与同构链节点的通信协议，通过协议完成跨链交易相关数据的请求、
                                确认等相关通信。根据通用协议社区开发者可以根据应用场景开发独立的多资产钱包、建立不同开放程度的链条。
                                通过类联合锚定，多方计算和门限秘钥共享机制结合多角色节点设计，完成跨链锁定账号的分布式秘钥管理。
                            </p>
                        </div>
                        }

                        {language === 'en' &&
                        <div className="officalModule4Div col-lg-7">
                            <img src={two}/>
                            <h2>Universal cross-chain protocol</h2>
                            {/*<span>GENERAL AGREEMENT ACROSS THE CHAIN</span>*/}
                            <p>
                                The universal cross-chain protocol of Wanchain is the node of the wallet and the Wanchain;
                                and the communication protocol between the Wanchain node and the isomorphic chain node can realize the related communication,
                                such as requiring and confirming the related data of the cross-chain transaction.
                                The universal protocol community developer can develop independent multi-assets wallets and set up chains with different
                                opening degrees according to the application scenarios.
                            </p>
                        </div>
                        }
                        <img src={part2} className="officalModule3Img"/>
                    </div>
                </div>

                <div className="officalModule3">
                    <div className="container">
                        <img src={part3} className="officalModule3Img"/>
                        {language === 'zn' &&
                        <div className="officalModule3Div col-lg-8" id="officalModule3Div2">
                            <img src={three}/>
                            <h2>交易隐私保护</h2>
                            {/*<span>TRANSACTION PRIVACY PROTECTION</span>*/}
                            <p>
                                万维链上本身及同构链支持基于智能合约的资产的交易隐私保护。利用环签名和一次性地址，万维链实现智能合约代币的隐私保护，
                                万维链不但是全球第一个实现智能合约代币交易的隐私保护，更让万维链及同构联盟链更好的适用于金融等应用场景。
                            </p>
                        </div>
                        }
                        {language === 'en' &&
                        <div className="officalModule3Div col-lg-8" id="officalModule3Div2">
                            <img src={three}/>
                            <h2>Privacy Protection</h2>
                            {/*<span>TRANSACTION PRIVACY PROTECTION</span>*/}
                            <p>
                                Wanchain and isomorphic chain support privacy protection based on smart contract assets.
                                Wanchain realizes the privacy protection of smart contract token transactions by using ring signatures and one-off addresses.
                                Wanchain is the first to realize privacy protection for smart contract token transactions which makes Wanchain and blockchains more applicable for use in financial applications.
                            </p>
                        </div>
                        }

                    </div>
                </div>

                <div className="officalModule4">
                    <div className="container">
                        {language === 'zn' &&
                        <div className="officalModule4Div col-lg-7 ">
                            <img src={four}/>
                            <h2>复杂场景支持</h2>
                            {/*<span>TRANSACTION PRIVACY PROTECTION</span>*/}
                            <p>
                                于智能合约和通用协议，社区的开发者可以开发更加复杂的场景应用。尤其是需要多币种支持的场景。
                                联盟链与公链的连接，联盟链之间的连接为区块链今后的应用前景提供了更多的选择，封闭与开放不再是非此即彼的选择题。
                            </p>
                        </div>
                        }
                        {language === 'en' &&
                        <div className="officalModule4Div col-lg-7 ">
                            <img src={four}/>
                            <h2>Support complex scene</h2>
                            {/*<span>TRANSACTION PRIVACY PROTECTION</span>*/}
                            <p>
                                Based on the smart contract and universal protocol, the community developer can develop more complicated scene application,
                                particularly the scene needing multi-currency supporting. The connection between the alliance chain and the public chain as well as
                                the connection among the alliance chains can provide more selections for further application prospect.
                                Sealing and opening is no longer either-or question.
                            </p>
                        </div>
                        }
                        <img src={part4} className="officalModule3Img"/>
                    </div>
                </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Div3)
