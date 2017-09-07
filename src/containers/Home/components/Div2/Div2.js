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
      const card1 = require('../../image/car1.png');
      const card2 = require('../../image/card2.png');
      const card3 = require('../../image/card3.png');
      const card4 = require('../../image/card4.png');
      const divo1Line = require('../../image/divo1Line.png');
      const pot = require('../../image/pot.png');

      const styles = require('./Div2.scss');
      return (
            <div className={styles.div1o} id="div1o">
                <div className={language === 'zn' ? styles.div1oHeader : styles.div1oHeaderEn + ' container'}>
                    <h2><hr className={styles.div1HeaderImg}/>
                        {language === 'zn' ? '万维链应用场景' : 'Application Scenarios'}
                        <hr className={styles.div1HeaderImg}/></h2>
                    <div className={styles.div1oBody}>
                        <div className={styles.div1oBodyCard} id={styles.card1}>
                            <div className={styles.div1oBodyCardModule}>
                                <img src={card1} id="div1oimg1" />
                                {language === 'zn' ?
                                    <p className={styles.psize}>数字货币<br/>交易<small>兑换</small></p>
                                 :
                                    <p><small>Exchanges</small>of<br/>Cryptocurrencies</p>
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
                                    <img src={pot}/><li>Transact across multiple token<br/>exchanges through private smart contracts</li>
                                    <img src={pot}/><li>Utilize Wanchain for distributed<br/>cryptocurrency exchange services</li>
                                    <img src={pot}/><li>Wanchain offers a distributed<br/>cross-blockchain transaction mechanism</li>
                                </ul>
                            }
                        </div>

                        <div className={styles.div1oBodyCard}>
                            <div className={styles.div1oBodyCardModule}>
                                <img src={card2} id="div1oimg2"/>
                                {language === 'zn' ?
                                    <p>数字货币<br/><small>借贷</small></p>
                                :
                                    <p><small>Loans</small> of<br/>Cryptocurrencies</p>
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
                                    <img src={pot}/><li>a.Eliminate loan paperwork and inefficiency through cross-chain smart contract execution</li>
                                    <img src={pot}/><li>Users hold their assets and debts in a decentralized way (different tokens)</li>
                                    <img src={pot}/><li>c.Wanchain ensures asset safety and transparency throughout the process</li>
                                </ul>
                            }
                        </div>
                        <div className={styles.div1oBodyCard}>
                            <div className={styles.div1oBodyCardModule}>
                                <img src={card3} id="div1oimg3"/>
                                {language === 'zn' ?
                                    <p>数字资产<br/><small>投资</small></p>
                                :
                                    <p id={styles.div1oP3}><small>Investment</small><br/> Through <br/>Cryptocurrencies</p>
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
                                    <img src={pot}/><li>Offer a wide variety of investment options through the implementation of cross-chain transactions via smart contract</li>
                                    <img src={pot}/><li>Automated approval process makes " Payment on Delivery" possible and effective</li>
                                    <img src={pot}/><li>Ensure stability, security, and compliance all through one platform</li>
                                </ul>
                            }
                        </div>

                        <div className={styles.div1oBodyCard} id={styles.card4}>
                            <div className={styles.div1oBodyCardModule}>
                                <img src={card4} id="div1oimg4"/>
                                {language === 'zn' ?
                                    <p>多币种ICO<br/><small>众筹</small></p>
                                :
                                    <p id={styles.div1oP4}><small>Crowd-Funding</small> <br/>Through <br/>Cryptocurrencies</p>
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
                                    <img src={pot}/><li>Supports ICOs with multi-cryptocurrency smart contracts</li>
                                    <img src={pot}/><li>Converts ICO tokens to real cryptocurrencies for ease of use</li>
                                    <img src={pot}/><li>Completely decentralized ICO process; create and participate in token events</li>
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
