import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

@connect(
    state => ({language: state.auth.language, clientWidth: state.auth.clientWidth, }),
)
class Div4 extends React.Component {

    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,
    };

    render() {
      const {clientWidth, language} = this.props;
      const part1 = require('../../image/part1.png');
      const part2 = require('../../image/part2.png');
      const part3 = require('../../image/part3.png');
      const part4 = require('../../image/part4.png');

      const one = require('../../image/one.png');
      const two = require('../../image/two.png');
      const three = require('../../image/three.png');
      const four = require('../../image/four.png');

      const styles = require('./Div4.scss');
      return (
          <div>
              {language === 'zn' &&
              <div>
                  {clientWidth >= 1025 &&
                  <div>
                      <div className={styles.officalModule3}>
                          <div className="container">
                              <img src={part1} id="div3img1"/>
                              <div className={styles.officalModule3Div + ' col-lg-8'}>
                                  <img src={one}/>
                                  <h2>去中心化的跨链机制</h2>
                                  <p>
                                      在万维链上，我们将支持主流公链的跨链交易（如BTC、ETH）、联盟链之间的资产跨链交易，以及公链与联盟链的跨链交易。
                                      通过类联合锚定，多方计算和门限秘钥共享机制结合多角色节点设计，完成跨链锁定账号的分布式秘钥管理。
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className={styles.officalModule4}>
                          <div className="container">
                              <div className={styles.officalModule4Div + ' col-lg-7'}>
                                  <img src={two}/>
                                  <h2>通用跨链协议</h2>
                                  <p>
                                      万维链通用跨链协议是钱包与万维链节点，万维链节点与同构链节点的通信协议，通过协议完成跨链交易相关数据的请求、
                                      确认等相关通信。根据通用协议社区开发者可以根据应用场景开发独立的多资产钱包、建立不同开放程度的链条。
                                      通过类联合锚定，多方计算和门限秘钥共享机制结合多角色节点设计，完成跨链锁定账号的分布式秘钥管理。
                                  </p>
                              </div>
                              <img src={part2} id="div3img2"/>
                          </div>
                      </div>

                      <div className={styles.officalModule3}>
                          <div className="container">
                              <img src={part3} id="div3img3"/>
                              <div className={styles.officalModule3Div + ' col-lg-8'} id="officalModule3Div2">
                                  <img src={three}/>
                                  <h2>交易隐私保护</h2>
                                  <p>
                                      万维链上本身及同构链支持基于智能合约的资产的交易隐私保护。利用环签名和一次性地址，万维链实现智能合约代币的隐私保护，
                                      万维链不但是全球第一个实现智能合约代币交易的隐私保护，更让万维链及同构联盟链更好的适用于金融等应用场景。
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className={styles.officalModule4}>
                          <div className="container">
                              <div className={styles.officalModule4Div + ' col-lg-7'}>
                                  <img src={four}/>
                                  <h2>复杂场景支持</h2>
                                  <p>
                                      于智能合约和通用协议，社区的开发者可以开发更加复杂的场景应用。尤其是需要多币种支持的场景。
                                      联盟链与公链的连接，联盟链之间的连接为区块链今后的应用前景提供了更多的选择，封闭与开放不再是非此即彼的选择题。
                                  </p>
                              </div>
                              <img src={part4} id="div3img4"/>
                          </div>
                      </div>
                  </div>
                  }

                  { clientWidth < 1025 &&
                  <div className={styles.officalModule}>
                      <div className={styles.officalModule3}>
                          <div className="container">
                              <div className={styles.officalModule3Div + ' col-lg-8'}>
                                  <img src={one}/>
                                  <h2>去中心化的跨链机制</h2>
                                  <p>
                                      在万维链上，我们将支持主流公链的跨链交易（如BTC、ETH）、联盟链之间的资产跨链交易，以及公链与联盟链的跨链交易。
                                      通过类联合锚定，多方计算和门限秘钥共享机制结合多角色节点设计，完成跨链锁定账号的分布式秘钥管理。
                                  </p>
                              </div>
                              <img src={part1} id="div3img1" className={styles.div3img1}/>
                          </div>
                      </div>

                      <div className={styles.officalModule3}>
                          <div className="container">
                              <div className={styles.officalModule3Div + ' col-lg-8'}>
                                  <img src={two}/>
                                  <h2>通用跨链协议</h2>
                                  <p>
                                      万维链通用跨链协议是钱包与万维链节点，万维链节点与同构链节点的通信协议，通过协议完成跨链交易相关数据的请求、
                                      确认等相关通信。根据通用协议社区开发者可以根据应用场景开发独立的多资产钱包、建立不同开放程度的链条。
                                      通过类联合锚定，多方计算和门限秘钥共享机制结合多角色节点设计，完成跨链锁定账号的分布式秘钥管理。
                                  </p>
                              </div>
                              <img src={part2} id="div3img2" className={styles.div3img2}/>
                          </div>
                      </div>

                      <div className={styles.officalModule3}>
                          <div className="container">
                              <div className={styles.officalModule3Div + ' col-lg-8'} id="officalModule3Div2">
                                  <img src={three}/>
                                  <h2>交易隐私保护</h2>
                                  <p>
                                      万维链上本身及同构链支持基于智能合约的资产的交易隐私保护。利用环签名和一次性地址，万维链实现智能合约代币的隐私保护，
                                      万维链不但是全球第一个实现智能合约代币交易的隐私保护，更让万维链及同构联盟链更好的适用于金融等应用场景。
                                  </p>
                              </div>
                              <img src={part3} id="div3img3" className={styles.div3img3}/>
                          </div>
                      </div>

                      <div className={styles.officalModule3}>
                          <div className="container">
                              <div className={styles.officalModule3Div + ' col-lg-8'}>
                                  <img src={four}/>
                                  <h2>复杂场景支持</h2>
                                  <p>
                                      于智能合约和通用协议，社区的开发者可以开发更加复杂的场景应用。尤其是需要多币种支持的场景。
                                      联盟链与公链的连接，联盟链之间的连接为区块链今后的应用前景提供了更多的选择，封闭与开放不再是非此即彼的选择题。
                                  </p>
                              </div>
                              <img src={part4} id="div3img4" className={styles.div3img4}/>
                          </div>
                      </div>
                  </div>
                  }
              </div>
              }
              {language === 'en' &&
              <div>
                  {clientWidth >= 1025 &&
                  <div>
                      <div className={styles.officalModule3}>
                          <div className="container">
                              <img src={part1} id="div3img1"/>
                              <div className={styles.officalModule3Div + ' col-lg-8'}>
                                  <img src={one}/>
                                  <h2>Distributed Cross-Chain Mechanism</h2>
                                  <p>
                                      Wanchain supports cross-chain transactions of mainstream public chains (such as Bitcoin and Ethereum), cross-chain transactions  among consortium chains as well as cross-chain transactions between public chains and consortium chains. The distributive cryptographic key management is achieved by  the threshold secret key sharing mechanism, joint anchoring, multiparty computation, and multi-role node design.
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className={styles.officalModule4}>
                          <div className="container">
                              <div className={styles.officalModule4Div + ' col-lg-7'}>
                                  <img src={two}/>
                                  <h2>Universal cross-chain protocol</h2>
                                  <p>
                                      The universal cross-chain protocol between the Wanchain and the Wanchain wallet, and the communication protocol between Wanchain and its homogeneous chain, provide request and confirmation communication for cross-chain transactions. Community developers can develop independent multi-asset wallets and set up chains according to their application requirements.
                                  </p>
                              </div>
                              <img src={part2} id="div3img2"/>
                          </div>
                      </div>

                      <div className={styles.officalModule3}>
                          <div className="container">
                              <img src={part3} id="div3img3"/>
                              <div className={styles.officalModule3Div + ' col-lg-8'} id="officalModule3Div2">
                                  <img src={three}/>
                                  <h2>Privacy Protection</h2>
                                  <p>
                                      Wanchain and homogeneous chains support privacy protection based on smart contract assets. Wanchain achieves the privacy protection of smart contract token transactions by using ring signatures and one-time addresses. Wanchain is the first to achieve privacy protection for smart contract token transactions, which makes Wanchain and blockchains more applicable to financial applications.
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className={styles.officalModule4}>
                          <div className="container">
                              <div className={styles.officalModule4Div + ' col-lg-7'}>
                                  <img src={four}/>
                                  <h2>Complex Application Support</h2>
                                  <p>
                                      Based on the smart contract and universal protocols, community developers can develop more complicated applications, such as multi-currency applications. The connections between the consortium chains and the public chains, as well as the connections among the consortium chains, provide more options for further application development.
                                  </p>
                              </div>
                              <img src={part4} id="div3img4"/>
                          </div>
                      </div>
                  </div>
                  }

                  { clientWidth < 1025 &&
                  <div className={styles.officalModule}>
                      <div className={styles.officalModule3}>
                          <div className="container">
                              <div className={styles.officalModule3Div + ' col-lg-8'}>
                                  <img src={one}/>
                                  <h2>Distributed Cross-Chain Mechanism</h2>
                                  <p>
                                      Wanchain supports cross-chain transactions of mainstream public chains (such as Bitcoin and Ethereum), cross-chain transactions  among consortium chains as well as cross-chain transactions between public chains and consortium chains. The distributive cryptographic key management is achieved by  the threshold secret key sharing mechanism, joint anchoring, multiparty computation, and multi-role node design.
                                  </p>
                              </div>
                              <img src={part1} id="div3img1" className={styles.div3img1}/>
                          </div>
                      </div>

                      <div className={styles.officalModule3}>
                          <div className="container">
                              <div className={styles.officalModule3Div + ' col-lg-8'}>
                                  <img src={two}/>
                                  <h2>Universal cross-chain protocol</h2>
                                  <p>
                                      The universal cross-chain protocol between the Wanchain and the Wanchain wallet, and the communication protocol between Wanchain and its homogeneous chain, provide request and confirmation communication for cross-chain transactions. Community developers can develop independent multi-asset wallets and set up chains according to their application requirements.
                                  </p>
                              </div>
                              <img src={part2} id="div3img2" className={styles.div3img2}/>
                          </div>
                      </div>

                      <div className={styles.officalModule3}>
                          <div className="container">
                              <div className={styles.officalModule3Div + ' col-lg-8'} id="officalModule3Div2">
                                  <img src={three}/>
                                  <h2>Privacy Protection</h2>
                                  <p>
                                      Wanchain and homogeneous chains support privacy protection based on smart contract assets. Wanchain achieves the privacy protection of smart contract token transactions by using ring signatures and one-time addresses. Wanchain is the first to achieve privacy protection for smart contract token transactions, which makes Wanchain and blockchains more applicable to financial applications.
                                  </p>
                              </div>
                              <img src={part3} id="div3img3" className={styles.div3img3}/>
                          </div>
                      </div>

                      <div className={styles.officalModule3}>
                          <div className="container">
                              <div className={styles.officalModule3Div + ' col-lg-8'}>
                                  <img src={four}/>
                                  <h2>Complex Application Support</h2>
                                  <p>
                                      Based on the smart contract and universal protocols, community developers can develop more complicated applications, such as multi-currency applications. The connections between the consortium chains and the public chains, as well as the connections among the consortium chains, provide more options for further application development.
                                  </p>
                              </div>
                              <img src={part4} id="div3img4" className={styles.div3img4}/>
                          </div>
                      </div>
                  </div>
                  }
              </div>
              }
          </div>
        );
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeLanguage: (data) => {
//             dispatch(changeLanguage(data))
//         },
//     };
// };
//
// const mapStateToProps = (state) => ({
//     language : state.lang.language,
//     clientWidth: state.lang.clientWidth,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Div4)
export default Div4;
