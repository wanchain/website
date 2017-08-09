import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

@connect(
    state => ({language: state.auth.language, clientWidth: state.auth.clientWidth, }),
)
class Div6 extends React.Component {
    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,
    };

    render() {
      const {clientWidth, language} = this.props;

      const down = require('../../image/down1.png');
      const up = require('../../image/up1.png');
      const styles = require('./Div6.scss');
      return (
          <div>
              {language === 'zn' &&
              <div>
                  {clientWidth >= 1025 &&
                  <div className={styles.div5Header}>
                      <div className={styles.div5HeaderDiv + ' container'}>
                          <h2><hr className={styles.div1HeaderImg}/>ROADMAP<hr className={styles.div1HeaderImg}/></h2>
                      </div>

                      <div className={styles.module8Div + ' clearfix container'}>
                          <div className={styles.module8DivUp + ' col-lg-3'}>
                              <img src={down} />
                              <h4>开始理论设计及论证，跨链交易及隐私保护</h4>
                              <p>2016<small>{' / '}06</small></p>
                          </div>
                          <div className={styles.module8DivUp + ' col-lg-3'}>
                              <img src={down} />
                              <h4>发布白皮书，万维链网站上线，进入ICO阶段</h4>
                              <p>2017<small>{' / '}06</small></p>
                          </div>
                          <div className={styles.module8DivUp + ' col-lg-3'}>
                              <img src={down} />
                              <h4>万维链1.0上线，实现万维链钱包及带隐私保护的智能合约功能，WAN Coin发行</h4>
                              <p>2017<small>{' / '}11</small></p>
                          </div>
                          <div className={styles.module8DivUp + ' col-lg-3'}>
                              <img src={down} />
                              <h4>万维链3.0上线，支持比特币跨链交易，万维链跨链协议2.0上线，多币种万维链钱包2.0上线</h4>
                              <p>2018<small>{' / '}12</small></p>
                          </div>
                      </div>

                      <div className={styles.module8Div2 + ' clearfix container'}>
                          <div className={styles.module8DivUp2 + ' col-lg-3'}>
                              <img src={up} />
                              <p>2016<small>{' / '}12</small></p>
                              <h4>完成理论设计，基于智能合约代币隐私保护的POC开发</h4>
                          </div>
                          <div className={styles.module8DivUp2 + ' col-lg-3'}>
                              <img src={up} />
                              <p>2017<small>{' / '}09</small></p>
                              <h4>ICO tokens销售开始，发布万维链测试网络</h4>
                          </div>
                          <div className={styles.module8DivUp2 + ' col-lg-3'}>
                              <img src={up} />
                              <p>2018<small>{' / '}06</small></p>
                              <h4>万维链2.0上线，支持以太坊跨链交易，万维链跨链协议1.0上线，多币种万维链钱包1.0上线</h4>
                          </div>
                          <div className={styles.module8DivUp2 + ' col-lg-3'}>
                              <img src={up} />
                              <p>2019</p>
                              <h4>万维链4.0上线，支持联盟链跨链交易，万维链跨链协议3.0上线，多币种万维链钱包3.0上线</h4>
                          </div>
                      </div>
                  </div>
                  }

                  {clientWidth < 1025 &&
                  <div>
                      <div className={styles.div5HeaderDiv + ' container'}>
                          <h2><hr className={styles.div1HeaderImg}/>ROADMAP<hr className={styles.div1HeaderImg}/></h2>
                      </div>
                      <div className={styles.module8Div1 + ' clearfix container'}>
                          <div className={styles.module8Div1Up + ' col-lg-3'}>
                              <p>2016<small>{' / '}06</small></p>
                              <h4>开始理论设计及论证，跨链交易及隐私保护</h4>
                          </div>
                          <div className={styles.module8Div1Up + ' col-lg-3'}>
                              <p>2016<small>{' / '}12</small></p>
                              <h4>完成理论设计，基于智能合约代币隐私保护的POC开发</h4>
                          </div>
                          <div className={styles.module8Div1Up + ' col-lg-3'}>
                              <p>2017<small>{' / '}06</small></p>
                              <h4>发布白皮书，万维链网站上线，进入ICO阶段</h4>
                          </div>
                          <div className={styles.module8Div1Up + ' col-lg-3'}>
                              <p>2017<small>{' / '}09</small></p>
                              <h4>ICO tokens销售开始，发布万维链测试网络</h4>
                          </div>
                          <div className={styles.module8Div1Up + ' col-lg-3'}>
                              <p>2017<small>{' / '}11</small></p>
                              <h4>万维链1.0上线，实现万维链钱包及带隐私保护的智能合约功能，WAN Coin发行</h4>
                          </div>
                          <div className={styles.module8Div1Up + ' col-lg-3'}>
                              <p>2018<small>{' / '}06</small></p>
                              <h4>万维链2.0上线，支持以太坊跨链交易，万维链跨链协议1.0上线，多币种万维链钱包1.0上线</h4>
                          </div>
                          <div className={styles.module8Div1Up + ' col-lg-3'}>
                              <p>2018<small>{' / '}12</small></p>
                              <h4>万维链3.0上线，支持比特币跨链交易，万维链跨链协议2.0上线，多币种万维链钱包2.0上线</h4>
                          </div>
                          <div className={styles.module8Div1Up + ' col-lg-3'}>
                              <p>2019</p>
                              <h4>万维链4.0上线，支持联盟链跨链交易，万维链跨链协议3.0上线，多币种万维链钱包3.0上线</h4>
                          </div>
                      </div>
                  </div>
                  }
              </div>
              }

              {language === 'en' &&
              <div>
                  {clientWidth >= 1025 &&
                  <div className={styles.div5Header}>
                      <div className={styles.div5HeaderDiv + ' container'}>
                          <h2><hr className={styles.div1HeaderImg}/>ROADMAP<hr className={styles.div1HeaderImg}/></h2>
                      </div>

                      <div className={styles.module8Div + ' clearfix container'}>
                          <div className={styles.module8DivUp + ' col-lg-3'}>
                              <img src={down} />
                              <h4>Research on privacy protection and cross-chain transactions</h4>
                              <p>2016<small>{' / '}06</small></p>
                          </div>
                          <div className={styles.module8DivUp + ' col-lg-3'}>
                              <img src={down} />
                              <h4>Whitepaper published. Wanchain.org online</h4>
                              <p>2017<small>{' / '}06</small></p>
                          </div>
                          <div className={styles.module8DivUp + ' col-lg-3'}>
                              <img src={down} />
                              <h4>Wanchain 1.0 goes live (Privacy Protection, WANCoin，POS，Wallet, Block chain Explorer)</h4>
                              <p>2017<small>{' / '}11</small></p>
                          </div>
                          <div className={styles.module8DivUp + ' col-lg-3'}>
                              <img src={down} />
                              <h4>Wanchain 3.0 (Integration with Bitcoin, Multi-Coin Wallet)</h4>
                              <p>2018<small>{' / '}12</small></p>
                          </div>
                      </div>

                      <div className={styles.module8Div2 + ' clearfix container'}>
                          <div className={styles.module8DivUp2 + ' col-lg-3'}>
                              <img src={up} />
                              <p>2016<small>{' / '}12</small></p>
                              <h4>Development on Proof of Concept</h4>
                          </div>
                          <div className={styles.module8DivUp2 + ' col-lg-3'}>
                              <img src={up} />
                              <p>2017<small>{' / '}09</small></p>
                              <h4>ICO crowd funding</h4>
                          </div>
                          <div className={styles.module8DivUp2 + ' col-lg-3'}>
                              <img src={up} />
                              <p>2018<small>{' / '}06</small></p>
                              <h4>Wanchain 2.0 (Integration with Ethereum, Multi-Coin Wallet)</h4>
                          </div>
                          <div className={styles.module8DivUp2 + ' col-lg-3'}>
                              <img src={up} />
                              <p>2019</p>
                              <h4>Wanchain 4.0 (Integration with Private Chains, Multi-Coin Wallet)</h4>
                          </div>
                      </div>
                  </div>
                  }

                  {clientWidth < 1025 &&
                  <div>
                      <div className={styles.div5HeaderDiv + ' container'}>
                          <h2><hr className={styles.div1HeaderImg}/>ROADMAP<hr className={styles.div1HeaderImg}/></h2>
                      </div>
                      <div className={styles.module8Div1 + ' clearfix container'}>
                          <div className={styles.module8Div1Up + ' col-lg-3'}>
                              <p>2016<small>{' / '}06</small></p>
                              <h4>Research on privacy protection and cross-chain transactions</h4>
                          </div>
                          <div className={styles.module8Div1Up + ' col-lg-3'}>
                              <p>2016<small>{' / '}12</small></p>
                              <h4>Development on Proof of Concept</h4>
                          </div>
                          <div className={styles.module8Div1Up + ' col-lg-3'}>
                              <p>2017<small>{' / '}06</small></p>
                              <h4>Whitepaper published. Wanchain.org online</h4>
                          </div>
                          <div className={styles.module8Div1Up + ' col-lg-3'}>
                              <p>2017<small>{' / '}09</small></p>
                              <h4>ICO crowd funding</h4>
                          </div>
                          <div className={styles.module8Div1Up + ' col-lg-3'}>
                              <p>2017<small>{' / '}11</small></p>
                              <h4>Wanchain 1.0 goes live (Privacy Protection, WANCoin，POS，Wallet, Block chain Explorer)</h4>
                          </div>
                          <div className={styles.module8Div1Up + ' col-lg-3'}>
                              <p>2018<small>{' / '}06</small></p>
                              <h4>Wanchain 2.0 (Integration with Ethereum, Multi-Coin Wallet)</h4>
                          </div>
                          <div className={styles.module8Div1Up + ' col-lg-3'}>
                              <p>2018<small>{' / '}12</small></p>
                              <h4>Wanchain 3.0 (Integration with Bitcoin, Multi-Coin Wallet)</h4>
                          </div>
                          <div className={styles.module8Div1Up + ' col-lg-3'}>
                              <p>2019</p>
                              <h4>Wanchain 4.0 (Integration with Private Chains, Multi-Coin Wallet)</h4>
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
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Div6)
export default Div6;
