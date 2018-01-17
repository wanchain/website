import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

@connect(
    state => ({language: state.auth.language, clientWidth: state.auth.clientWidth, }),
)
class Div2 extends React.Component {
    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,
    };

    render() {
      const {language} = this.props;
      const card1 = require('../../image/card1.png');
      const card2 = require('../../image/card2.png');
      const card3 = require('../../image/card3.png');
      const card4 = require('../../image/card4.png');
      const divo1Line = require('../../image/divo1Line.png');
      const pot = require('../../image/pot.png');

      const styles = require('./Div2.scss');
      return (
            <div className={styles.div1o} id="div1o">
                <div className={language === 'zn' ? styles.div1oHeader : styles.div1oHeaderEn + ' container'}>
                    <h2>
                      <hr className={styles.div1HeaderImg}/>
                      <span>{language === 'zn' ? '万维链应用场景' : 'APPLICATION SCENARIOS'}</span>
                      <hr className={styles.div1HeaderImg}/>
                    </h2>
                    <div className={styles.div1oBody}>
                        <div className={styles.div1oBodyCard} id={styles.card1}>
                            <div className={styles.div1oBodyCardModule}>
                              <p className={styles.p}>
                                <img src={card1} id="div1oimg1" />
                              </p>
                              {language === 'zn' ?
                                  <p className={styles.psize}>数字货币<br/>交易<small>兑换</small></p>
                               :
                                  <p><small>Decentralized</small><br/> Exchange</p>
                              }
                            </div>
                            <img className={styles.div1oBodyCardLine} src={divo1Line} />
                            {language === 'zn' ?
                                <ul>
                                    <img src={pot}/><li>多种数字货币的交易兑换</li>
                                    <img src={pot}/><li>不同机构或个人依托万维链提<br/>供分布式货币交易兑换服务</li>
                                    <img src={pot}/><li>万维链提供分布式跨链交易机制</li>
                                </ul>
                            :
                                <ul>
                                    <img src={pot}/><li>Exchange the world's digital<br/>assets on-chain</li>
                                    <img src={pot}/><li>Transact using Wanchain's<br/>multi-asset wallet</li>
                                    <img src={pot}/><li>Build decentralized exchange<br/>applications like Ether Delta with protocol tokens</li>
                                </ul>
                            }
                        </div>

                        <div className={styles.div1oBodyCard}>
                            <div className={styles.div1oBodyCardModule}>
                              <p className={styles.p}>
                                <img src={card2} id="div1oimg2"/>
                              </p>
                                {language === 'zn' ?
                                    <p>数字货币<br/><small>借贷</small></p>
                                :
                                    <p><small>Digital Asset</small> of<br/>Management</p>
                                }

                            </div>
                            <img className={styles.div1oBodyCardLine} src={divo1Line} />
                            {language === 'zn' ?
                                <ul>
                                    <img src={pot}/><li>所有交易过程实现基于跨链机<br/>制和智能合约的非人为执行</li>
                                    <img src={pot}/><li>用户以去中心化的方式持有自<br/>己的资产和负债(不同tokens)</li>
                                    <img src={pot}/><li>万维链确保过程中资产的安全<br/>性和客观性</li>
                                </ul>
                            :
                                <ul>
                                    <img src={pot}/><li>Minimize exchange counterparty risk</li>
                                    <img src={pot}/><li>Master address provides simplified and trusted audit</li>
                                    <img src={pot}/><li>Privacy protection for trades and positions</li>
                                </ul>
                            }
                        </div>
                        <div className={styles.div1oBodyCard}>
                            <div className={styles.div1oBodyCardModule}>
                              <p className={styles.p}>
                                <img src={card3} id="div1oimg3"/>
                              </p>
                                {language === 'zn' ?
                                    <p>数字资产<br/><small>投资</small></p>
                                :
                                    <p id={styles.div1oP3}><small>Investment</small> Through <br/>Cryptocurrencies</p>
                                }
                            </div>
                            <img className={styles.div1oBodyCardLine} src={divo1Line} />
                            {language === 'zn' ?
                                <ul>
                                    <img src={pot}/><li>通过万维链实现两种不同区块<br/>链资产的交易</li>
                                    <img src={pot}/><li>自动化执行交易过程，实现<br/>"一手交钱一手交货"</li>
                                    <img src={pot}/><li>万维链确保过程中资产的<br/>安全性</li>
                                </ul>
                            :
                                <ul>
                                    <img src={pot}/><li>Offer a wide variety of investment options through the implement-<br/>ation of cross-chain transactions via smart contract</li>
                                    <img src={pot}/><li>Automated approval process makes "Payment on Delivery" possible and effective</li>
                                    <img src={pot}/><li>Ensure stability, security, and compliance all through one platform</li>
                                </ul>
                            }
                        </div>

                        <div className={styles.div1oBodyCard} id={styles.card4}>
                            <div className={styles.div1oBodyCardModule}>
                              <p className={styles.p}>
                                <img src={card3} id="div1oimg4"/>
                              </p>
                                {language === 'zn' ?
                                    <p>多币种ICO<br/><small>众筹</small></p>
                                :
                                    <p id={styles.div1oP4}><small>ICO</small><br/>Platform</p>
                                }
                            </div>
                            <img className={styles.div1oBodyCardLine} src={divo1Line} />
                            {language === 'zn' ?
                                <ul>
                                    <img src={pot}/><li>支持多币种智能合约进行ICO</li>
                                    <img src={pot}/><li>ICO tokens转换代币 自动化</li>
                                    <img src={pot}/><li>ICO过程完全 去中心化</li>
                                </ul>
                            :
                                <ul>
                                    <img src={pot}/><li>Streamlined process to launch <br/> ICO</li>
                                    <img src={pot}/><li>Access to Wanchain's exuberant community</li>
                                    <img src={pot}/><li>Collect funds from multiple assets</li>
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            </div>
      );
    }
}

export default Div2;
