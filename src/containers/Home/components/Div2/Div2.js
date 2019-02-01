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
      const widthL = {width: '380px'};
      return (
            <div className={styles.div1o} id="div1o">
                <div className={language === 'zn' ? styles.div1oHeaderEn : styles.div1oHeaderEn + ' container'}>
                    <h2>
                      <hr className={styles.div1HeaderImg}/>
                      <span>{language === 'zn' ? 'Wanchain应用场景' : 'Potential Use Cases for Wanchain'}</span>
                      <hr className={styles.div1HeaderImg}/>
                    </h2>
                    <div className={styles.div1oBody}>
                        <div style={widthL} className={styles.div1oBodyCard} id={styles.card1}>
                            <div className={styles.div1oBodyCardModule}>
                              <p className={styles.p}>
                                <img src={card1} id="div1oimg1" />
                              </p>
                              {language === 'zn' ?
                                  <p><small>去中心化</small><br/> 交易所</p>
                                  :
                                  <p><small>Decentralized</small><br/> Exchange</p>
                              }
                            </div>
                            <img className={styles.div1oBodyCardLine} src={divo1Line} />
                            {language === 'zn' ?
                                <ul>
                                    <img src={pot}/><li>全球数字资产在链上自由交易</li>
                                    <img src={pot}/><li>使用万维链多资产钱包进行交易</li>
                                    <img src={pot}/><li>在跨链平台上构建去中心化交易所应用</li>
                                </ul>
                            :
                                <ul>
                                    <img src={pot}/><li>Exchange the world's digital assets on-chain</li>
                                    <img src={pot}/><li>Transact using Wanchain's multi-asset wallet</li>
                                    <img src={pot}/><li>Build decentralized exchange applications with protocol tokens</li>
                                </ul>
                            }
                        </div>

                        <div style={widthL} className={styles.div1oBodyCard}>
                            <div className={styles.div1oBodyCardModule}>
                              <p className={styles.p}>
                                <img src={card2} id="div1oimg2"/>
                              </p>
                                {language === 'zn' ?
                                    <p><small>资产</small><br/>管理工具</p>
                                    :
                                    <p><small>Asset</small><br/>Management Tools</p>
                                }

                            </div>
                            <img className={styles.div1oBodyCardLine} src={divo1Line} />
                            {language === 'zn' ?
                                <ul>
                                    <img src={pot}/><li>将交易风险降至最低</li>
                                    <img src={pot}/><li>公开地址允许方便且可信的审计</li>
                                    <img src={pot}/><li>对交易过程和交易地址进行隐私保护</li>
                                </ul>
                            :
                                <ul>
                                    <img src={pot}/><li>Minimize exchange counterparty risk</li>
                                    <img src={pot}/><li>Master address provides simplified and trusted audit</li>
                                    <img src={pot}/><li>Privacy protection for trades and positions</li>
                                </ul>
                            }
                        </div>

                        <div style={widthL} className={styles.div1oBodyCard} id={styles.card4}>
                            <div className={styles.div1oBodyCardModule}>
                              <p className={styles.p}>
                                <img src={card3} id="div1oimg4"/>
                              </p>
                                {language === 'zn' ?
                                    <p id={styles.div1oP4}><small>去中心化</small><br/>跨链应用</p>
                                    :
                                    <p id={styles.div1oP4}><small>Cross-chain</small><br/>dApps</p>
                                }
                            </div>
                            <img className={styles.div1oBodyCardLine} src={divo1Line} />
                            {language === 'zn' ?
                                <ul>
                                    <img src={pot}/><li>通过跨链增加资产流动性</li>
                                    <img src={pot}/><li>直接在Wanchain上部署或者将跨链机制嵌入已有的任何应用</li>
                                    <img src={pot}/><li>对基于以太坊的应用和BTC之间进行跨链交易</li>
                                </ul>
                            :
                                <ul>
                                    <img src={pot}/><li>Leverage our interoperability for added liquidity</li>
                                    <img src={pot}/><li>Build on Wanchain or add cross-chain to any existing dApp</li>
                                    <img src={pot}/><li>Access to BTC for Ethereum-based dApps</li>
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
