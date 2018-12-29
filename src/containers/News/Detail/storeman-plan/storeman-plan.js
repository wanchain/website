import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getNavButtonFunc } from 'redux/modules/auth';

@connect(
    state => ({language: state.auth.language, }),
    {getNavButtonFunc}
)
class storemanplan extends Component {
    static propTypes = {
      language: PropTypes.string,
      getNavButtonFunc: PropTypes.func,
    };
    componentWillUnmount() {
      this.props.getNavButtonFunc(false);
    }
    render() {
      const {language} = this.props;
      const styles = require('./storeman-plan.scss');
      const storemanPlan1 = require('./image/storemanPlan1.png');
      const storemanPlan2 = require('./image/storemanPlan2.png');
      const timeImg2 = require('./image/time.png');

      return (
            <div className={styles.storemanPlanCom}>
              <div className={styles.storemanPlanDiv}>
                <h1>万维链Storeman节点奖励先行计划及2019年规划路线图</h1>
                {/* <p><img className={styles.timeImg2Ico} src={timeImg2} />2018-12-28</p> */}
                <img src={storemanPlan1} />
                <ul>
                  <li>各位万维链的支持者，</li>
                  <li>万维链Storeman节点奖励先行计划正式启动！同时，我们对外正式公开了万维链2019年的规划路线图。</li>
                  <li>请根据下文的指引，在规定时间内逐步完成参与节点奖励先行计划的三个阶段。</li>
                  <li>希望大家能够积极地参与进来，凡是符合要求的参与者 ，都将有机会获得万维链提供的参与激励。有任何疑问，请随时联系我们：<span className={styles.colorText}>info@wanchain.org</span></li>
                  <h3>奖励计划概要：</h3>
                  <li>每个地址参与量：1000-5000 WAN </li>
                  <li>预期奖励： 40 WAN/1000 WAN (4%的收益是3个月的收益，非年化)</li>
                  <li>计划锁仓总量： 4,000,000 WAN</li>
                  <li>锁仓期：3个月</li>
                  <h3>时间表</h3>
                  <li>2019年1月：公布Storeman奖励先行计划细则</li>
                  <li>2019年3月：开始资格竞选，为期15天。</li>
                  <li>2019年4月：进入锁仓期，为期3个月</li>
                  <h3>如何参与奖励计划？</h3>
                  <h4>第一阶段：提交调查问卷（12月28日至1月7日)</h4>                  
                  <li>请在2018年12月28日至2019年1月7日提交调查问卷。</li>
                  <li><a target="_blank" href="http://wanchainfans.mikecrm.com/yfb3INn">调查问卷</a></li>
                  <li className={styles.fontStyle}>注意：提交调查问卷的用户不代表直接拥有了参与Storeman奖励先行计划的资格，而是进入了该计划的候选名单。资格竞选阶段3月开始，所以1月未提交调查问卷的用户也不必担心会失去参加奖励计划的资格。</li>
                  <h4>第二阶段：参与资格竞选（2019年3月15日 – 2019年3月31日）</h4>
                  <li>希望参加Storeman奖励先行计划的用户会收到一个智能合约地址（不限于调查问卷渠道），用户必须在3月15日至3月31日期间将WAN转入至该地址。该智能合约上的WAN之后将锁仓3个月。</li>
                  <li>由于奖励计划名额有限，一个WAN地址允许发起多笔交易提高总参与金额，这个WAN地址是否被选中取决于此地址向智能合约发起的总参与金额。同一个WAN地址的总参与金额越大，胜出机率越大。需要指出的是，奖励机制的上限是每个WAN地址5000个WAN，超过5000个WAN的部分将不纳入奖励计算。</li>
                  <li>资格竞选结束后，每一组Storeman自动将WAN汇总，智能合约将发起转账的所有WAN地址根据投入智能合约的WAN的数量从高到低进行排序，被选中的WAN地址投入合约的代币将进入锁仓期。只有当智能合约上WAN的数量达到预先设定的数量时，或者所有参与的WAN都被锁定时，智能合约才会被激活。</li>
                  <li><a href="https://github.com/wanchain/wanchain_docs/raw/master/Wanwallet_GUI_3.0_mainnet_guide_CHN.pdf">万维链3.0钱包使用说明</a></li>
                  <li className={styles.fontStyle}>注意：针对第一阶段中提交调查问卷的和在资格竞选中落选的用户，我们将会从中抽取若干名幸运用户，给予一定的奖励。</li>
                  <h4>第三阶段：正式进入Wanchain Storeman节点奖励环节</h4>
                  <li>在竞选中胜出的WAN地址，其投入智能合约的WAN将会被锁仓3个月，从4月初锁仓至7月初。</li>
                  <li>需要特别注意的是，正式进入Wanchain Storeman节点奖励环节的所有WAN币在这三个月内是无法提前赎回的，因为智能合约会将其锁住。3个月后，这些WAN连同奖励部分将自动返回用户的WAN地址。</li>
                  <li className={styles.fontStyle}>注意：WAN会原路返回至当初用户向智能合约转账时所用的WAN地址。</li>
                  <li>锁仓的具体细则会在3月底4月初出台。</li>
                  <h3>后续计划</h3>
                  <li>此次Storeman节点奖励先行计划是2019年全年计划的第一步。之后，我们根据情况可能会推出第二轮奖励计划。此外，Wanchain正全力推进完全去中心化的PoS共识机制研发，计划于2019年底在主网上正式启用。Wanchain推出PoS共识机制后，我们还将宣布PoS的节点奖励计划。</li>
                  <li><img src={storemanPlan2}/></li>
                  <h3>2019年路线图概述</h3>
                  <li>万维链团队将继续致力于权益证明（PoS）共识机制的研发与创新。以下是我们2019年的路线图概述，具体细节和补充内容会在2019年第一季度公布。</li>
                  <h5>2019年第一季度</h5>
                  <li> -发表万维链PoS研究论文</li>
                  <li> -万维链PoS的原型（PoC）</li>
                  <li> -新一批ERC20通证的跨链集成</li>
                  <h5>2019年第二季度</h5>
                  <li> -发布万维链PoS的Alpha测试版</li>
                  <li> -实现对第三条公链的跨链（2018年已实现BTC和ETH这两条公链的跨链）</li>
                  <li> -万维链钱包的改进（包括界面和用户体验）</li>
                  <li> -新一批ERC20通证的跨链集成</li>
                  <h5>2019年第三季度</h5>
                  <li> -发布万维链PoS的Beta测试版</li>
                  <li> -新一批ERC20通证的跨链集成</li>
                  <li> -发布官方手机钱包和轻钱包（多资产）</li>
                  <h5>2019年第四季度</h5>
                  <li> -新一批ERC20通证的跨链集成</li>
                  <li> -Wanchain权益证明（PoS）共识机制上线主网</li>
                  <li> -实现对第四条公链的跨链</li>
                  <li> -发布Wanchain 4.0，实现对企业级区块链的跨链</li>
                  <h3>Wanchain 3.0，跨链比特币、以太坊和ERC20</h3>
                  <li>Wanchain 3.0的发布，意味着Wanchain打通了比特币、以太坊和ERC20通证之间的跨链交易。这将对任何基于以太坊开发的项目在跨链应用上起到示范作用。通过Wanchain跨链机制，任何基于以太坊的应用、协议和去中心化交易都将打破壁垒，实现互联互通。例如，原本基于以太坊创建的去中心化交易所或者直接在Wanchain上创建的去中心化交易所都将能够利用Wanchain3.0的跨链技术实现现有代币与比特币的交易对。支持与比特币的交易会极大提升去中心化交易的资产流动性。此外，跨链技术还能极大拓展资产借贷、代币支付等领域的业务场景。任何目前受限于以太坊单一网络的应用，都将能够连入比特币生态。实现跨链比特币、以太坊和ERC20（如Dai，LRC），将会给万维链甚至全行业带来深刻的影响。</li>
                </ul>
              </div>
            </div>
      );
    }
}

export default storemanplan;
