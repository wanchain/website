import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { getNavButtonFunc } from 'redux/modules/auth';

@connect(
    state => ({language: state.auth.language, }),
    {getNavButtonFunc}
)
class Roadmap extends Component {
    static propTypes = {
      language: PropTypes.string,
      getNavButtonFunc: PropTypes.func,
    };
    componentWillUnmount() {
      this.props.getNavButtonFunc(false);
    }
    render() {
      const styles = require('./Roadmap.scss');
      const {language} = this.props;
      return (
            <div className={styles.roadmapDiv}>
            {<Helmet script={[{src: '/jquery/jquery.min.js'}, {src: '/js/career/roadmap.js'}]}/>}
                <div className={styles.title}>
                    <h1>{language === 'zn' ? '路线图' : 'Roadmap'}</h1>
                    <p>{language === 'zn' ? '已完成进度和未来规划' : 'Completed and Upcoming Milestones'}</p>
                </div>
                <div className={styles.container}>
                    <div className={styles.w}>
                        <ul className={styles.ul}>
                            <li className={styles.li1}>{language === 'zn' ? '项目进度关键节点' : 'Milestone'}</li>
                            <li className={styles.li2}>{language === 'zn' ? '时间' : 'Date'}</li>
                            <li className={styles.li3}>{language === 'zn' ? '状态' : 'Status'}</li>
                        </ul>
                        <div className={styles.Rcontainer}>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv} id="clickDiv">
                                    <li className={styles.m}><i className={styles.comIco}></i>{language === 'zn' ? '万维链 1.0' : 'Wanchain 1.0'}</li>
                                    <li className={styles.d}>{language === 'zn' ? '2018/01' : 'January 2018'}</li>
                                    <li className={styles.s}>{language === 'zn' ? '已完成' : 'Complete'}<i className={styles.ico}></i></li>
                                </ul>
                                <div className={styles.showDiv} id="showDiv">
                                    <p>
                                    {language === 'zn'
                                     ? '万维链1.0标志着含隐私交易特性的万维原生链主网上线。万维链的创世区块于2018年1月16日被挖出，并与1月18日在迈阿密进行了正式发布会。'
                                     : 'Wanchain 1.0 brought us the native Wanchain blockchain and privacy features. The genesis block of Wanchain took place on January 16, 2018 and was launched to the public in Miami on January 18, 2018.'}
                                    </p>
                                </div>
                            </div>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv} id="clickDiv2">
                                    <li className={styles.m}><i className={styles.comIco}></i>{language === 'zn' ? '万维链 2.0' : 'Wanchain 2.0'}</li>
                                    <li className={styles.d}>{language === 'zn' ? '2018/07' : 'July 2018'}</li>
                                    <li className={styles.s}>{language === 'zn' ? '已完成' : 'Complete'}<i className={styles.ico}></i></li>
                                </ul>
                                <div className={styles.showDiv} id="showDiv2">
                                    <p>
                                    {language === 'zn'
                                     ? '万维链2.0实现了与以太坊的跨链。万维链的跨链机制使用安全多方计算（SMPC）来生成跨链交易中的私钥。这些私钥以去中心化的形式分散存储在万维链被称为Storeman的特殊节点之中，通过安全多方计算来合力行成跨链交易所需的私钥。门限秘钥共享机制则保障即使一部分节点无法连通，仍能生成交易私钥。'
                                     : 'Wanchain 2.0 was the launch of the bridge to the Ethereum blockchain. The cross-chain mechanism uses Secure Multi-Party Computation (SMPC) to generate and store private keys in the transaction. These keys are held by nodes in the Wanchain network called Storeman nodes, using SMPC to split the private key across multiple nodes. Wanchain\'s system can rebuild the private key using threshold key sharing even if some of the nodes are offline.'}
                                    </p>
                                </div>
                            </div>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv} id="clickDiv3">
                                    <li className={styles.m}><i className={styles.comIco}></i>{language === 'zn' ? '万维链 3.0' : 'Wanchain 3.0'}</li>
                                    <li className={styles.d}>{language === 'zn' ? '2018/12' : 'December 2018'}</li>
                                    <li className={styles.s}>{language === 'zn' ? '已完成' : 'Complete'}<i className={styles.ico}></i></li>
                                </ul>
                                <div className={styles.showDiv} id="showDiv3">
                                    <p>
                                        {language === 'zn'
                                         ? '2018年末万维链迎来了3.0的盛大发布。这次更新打通了与比特币的跨链交易，首次将以太坊生态圈与比特币生态圈连到了一起。这次发布同时包含了ERC20通证的跨链，包括MakerDAO项目的DAI稳定币和MKR代币，以及Loopring的LRC代币。'
                                         : 'Wanchain ended 2018 with a major launch of Wanchain 3.0. This launch finalized the cross-chain integration with Bitcoin, bridging the Bitcoin community to the Ethereum community. Wanchain 3.0 also added cross-chain ERC20 tokens including MakerDAO\'s DAI and MKR and Loopring\'s LRC.'}
                                    </p>
                                </div>
                            </div>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv}>
                                    <li className={styles.m}><i className={styles.comIco}></i>{language === 'zn' ? '发表万维链权益证明（PoS）研究论文' : 'Release Wanchain Proof of Stake (PoS) research paper'}</li>
                                    <li className={styles.d}>Q1 2019</li>
                                    <li className={styles.s}>{language === 'zn' ? '已完成' : 'Complete'}</li>
                                </ul>
                            </div>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv}>
                                    <li className={styles.m}><i className={styles.comIco}></i>{language === 'zn' ? 'PoS原型' : 'Proof of Concept for PoS'}</li>
                                    <li className={styles.d}>Q1 2019</li>
                                    <li className={styles.s}>{language === 'zn' ? '已完成' : 'Complete'}</li>
                                </ul>
                            </div>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv}>
                                    <li className={styles.m}><i className={styles.comIco}></i>{language === 'zn' ? '集成新一批ERC20通证' : 'Next batch of ERC20 integrations released'}</li>
                                    <li className={styles.d}>Q1 2019</li>
                                    <li className={styles.s}>{language === 'zn' ? '已完成' : 'Complete'}</li>
                                </ul>
                            </div>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv}>
                                    <li className={styles.m}><i className={styles.comIco2}></i>{language === 'zn' ? 'Storeman节点奖励先行计划' : 'Staking Pilot April-July'}</li>
                                    <li className={styles.d}>Q2 2019</li>
                                    <li className={styles.s}>{language === 'zn' ? '进行中' : 'Ongoing'}</li>
                                </ul>
                            </div>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv}>
                                    <li className={styles.m}><i className={styles.comIco2}></i>{language === 'zn' ? '万维链PoS Alpha测试网' : 'Alpha testnet for Wanchain-PoS'}</li>
                                    <li className={styles.d}>Q2 2019</li>
                                    <li className={styles.s}>{language === 'zn' ? '进行中' : 'Ongoing'}</li>
                                </ul>
                            </div>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv}>
                                    <li className={styles.m}><i className={styles.comIco2}></i>{language === 'zn' ? '集成新的公链' : 'Integration with new blockchain'}</li>
                                    <li className={styles.d}>Q2 2019</li>
                                    <li className={styles.s}>{language === 'zn' ? '进行中' : 'Ongoing'}</li>
                                </ul>
                            </div>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv}>
                                    <li className={styles.m}><i className={styles.comIco2}></i>{language === 'zn' ? '钱包改进（界面，用户体验）' : 'Wallet improvement (UX/UI)'}</li>
                                    <li className={styles.d}>Q2 2019</li>
                                    <li className={styles.s}>{language === 'zn' ? '进行中' : 'Ongoing'}</li>
                                </ul>
                            </div>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv}>
                                    <li className={styles.m}><i className={styles.comIco2}></i>{language === 'zn' ? '集成新一批ERC20通证' : 'Next batch of ERC20 integrations released'}</li>
                                    <li className={styles.d}>Q2 2019</li>
                                    <li className={styles.s}>{language === 'zn' ? '进行中' : 'Ongoing'}</li>
                                </ul>
                            </div>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv}>
                                    <li className={styles.m}><i className={styles.comIco2}></i>{language === 'zn' ? '万维链PoS Beta测试网' : 'Beta testnet for Wanchain-PoS'}</li>
                                    <li className={styles.d}>Q3 2019</li>
                                    <li className={styles.s}>{language === 'zn' ? '待启动' : 'Pending'}</li>
                                </ul>
                            </div>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv}>
                                    <li className={styles.m}><i className={styles.comIco2}></i>{language === 'zn' ? '集成新一批ERC20通证' : 'Next batch of ERC20 integrations released'}</li>
                                    <li className={styles.d}>Q3 2019</li>
                                    <li className={styles.s}>{language === 'zn' ? '待启动' : 'Pending'}</li>
                                </ul>
                            </div>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv}>
                                    <li className={styles.m}><i className={styles.comIco2}></i>{language === 'zn' ? '移动和桌面端轻钱包发布' : 'Mobile/light multi-asset wallet release'}</li>
                                    <li className={styles.d}>Q3 2019</li>
                                    <li className={styles.s}>{language === 'zn' ? '待启动' : 'Pending'}</li>
                                </ul>
                            </div>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv}>
                                    <li className={styles.m}><i className={styles.comIco2}></i>{language === 'zn' ? 'PoS主网上线' : 'Proof of Stake goes live on mainnet'}</li>
                                    <li className={styles.d}>Q4 2019</li>
                                    <li className={styles.s}>{language === 'zn' ? '待启动' : 'Pending'}</li>
                                </ul>
                            </div>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv}>
                                    <li className={styles.m}><i className={styles.comIco2}></i>{language === 'zn' ? '集成新的公链' : 'Integration with another new blockchain'}</li>
                                    <li className={styles.d}>Q4 2019</li>
                                    <li className={styles.s}>{language === 'zn' ? '待启动' : 'Pending'}</li>
                                </ul>
                            </div>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv}>
                                    <li className={styles.m}><i className={styles.comIco2}></i>{language === 'zn' ? '集成新一批ERC20通证' : 'Next batch of ERC20 integrations released'}</li>
                                    <li className={styles.d}>Q4 2019</li>
                                    <li className={styles.s}>{language === 'zn' ? '待启动' : 'Pending'}</li>
                                </ul>
                            </div>
                            <div className={styles.comContainer}>
                                <ul className={styles.clickDiv}>
                                    <li className={styles.m}><i className={styles.comIco2}></i>{language === 'zn' ? '万维链4.0 - 与企业区块链的跨链集成' : 'Wanchain 4.0 - Cross-chain Integration with Enterprise Blockchain'}</li>
                                    <li className={styles.d}>Q4 2019</li>
                                    <li className={styles.s}>{language === 'zn' ? '待启动' : 'Pending'}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      );
    }
}

export default Roadmap;
