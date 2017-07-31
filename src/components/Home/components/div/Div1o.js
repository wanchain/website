import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from '../../../../store/lang';
import '../div.scss';

import card1 from '../../../../image/car1.png';
import card2 from '../../../../image/card2.png';
import card3 from '../../../../image/card3.png';
import card4 from '../../../../image/card4.png';
import divo1Line from '../../../../image/divo1Line.png';
import pot from '../../../../image/pot.png';

class Div1o extends React.Component {
    static propTypes = {
        language: PropTypes.string,
    };

    render() {
        const {language} = this.props;

        return (
            <div className="div1o" id="div1o">
                {language === 'zn' &&
                <div className="container div1oHeader">
                    <h2><hr className="div1HeaderImg"/>万维链应用场景<hr className="div1HeaderImg"/></h2>
                    <div className="div1oBody">
                        <div className="div1oBodyCard" id="card1">
                            <div className="div1oBodyCardModule">
                                <img src={card1} id="div1oimg1" />
                                <p>数字货币<br/>交易<span>兑换</span></p>
                            </div>
                            <img className="div1oBodyCardLine" src={divo1Line} />
                            <ul>
                                <img src={pot}/><li>多种数字货币的交易兑换</li>
                                <img src={pot}/><li>不同机构或个人依托万维链提<br/>供分布式货币交易兑换服务</li>
                                <img src={pot}/><li>万维链提供分布式跨链交易机制</li>
                            </ul>
                        </div>
                        <div className="div1oBodyCard">
                            <div className="div1oBodyCardModule">
                                <img src={card2} id="div1oimg2"/>
                                <p>数字货币<br/><span>借贷</span></p>
                            </div>
                            <img className="div1oBodyCardLine" src={divo1Line} />
                            <ul>
                                <img src={pot}/><li>所有交易过程实现基于跨链机<br/>制和智能合约的非人为执行</li>
                                <img src={pot}/><li>用户以去中心化的方式持有自<br/>己的资产和负债(不同tokens)</li>
                                <img src={pot}/><li>万维链确保过程中资产的安全<br/>性和客观性</li>
                            </ul>
                        </div>
                        <div className="div1oBodyCard">
                            <div className="div1oBodyCardModule">
                                <img src={card3} id="div1oimg3"/>
                                <p>数字货币<br/><span>投资</span></p>
                            </div>
                            <img className="div1oBodyCardLine" src={divo1Line} />
                            <ul>
                                <img src={pot}/><li>通过万维链实现两种不同区块<br/>链资产的交易</li>
                                <img src={pot}/><li>自动化执行交易过程，实现<br/>"一手交钱一手交货"</li>
                                <img src={pot}/><li>万维链确保过程中资产的<br/>安全性</li>
                            </ul>
                        </div>
                        <div className="div1oBodyCard" id="card4">
                            <div className="div1oBodyCardModule">
                                <img src={card4} id="div1oimg4"/>
                                <p>数字货币<br/><span>ICO</span></p>
                            </div>
                            <img className="div1oBodyCardLine" src={divo1Line} />
                            <ul>
                                <img src={pot}/><li>支持多币种智能合约进行ICO</li>
                                <img src={pot}/><li>ICO tokens转换代币 自动化<br/>ICO过程完全 去中心化</li>
                            </ul>
                        </div>
                    </div>
                </div>
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(Div1o)
