import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from '../../../../store/lang';
import '../div.scss';

import bizhongchou1 from '../../../../image/bizhongchou.png';
import bizhongchou2 from '../../../../image/bizhongchou2.png';

import icoage1 from '../../../../image/icoage.png';
import icoage2 from '../../../../image/icoage2.png';

import token1 from '../../../../image/token.png';
import token2 from '../../../../image/token2.png';

class Div2 extends React.Component {
    static propTypes = {
        language: PropTypes.string,
    };

    onEnter(name) {
        const img = document.getElementById(name);
        if (name === 'img1') {img.src = bizhongchou2;}
        if (name === 'img2') {img.src = icoage2;}
        if (name === 'img3') {img.src = token2;}
    }

    onLeave(name) {
        const img = document.getElementById(name);
        if (name === 'img1') {img.src = bizhongchou1;}
        if (name === 'img2') {img.src = icoage1;}
        if (name === 'img3') {img.src = token1;}
    }
    render() {
        const {language} = this.props;

        return (
            <div className="crowd-div2Header">
                {language === 'zn' && <h2><hr className="crowd-div1HeaderImg"/>参与方式<hr className="crowd-div1HeaderImg"/></h2>}
                {language === 'en' && <h2><hr className="crowd-div1HeaderImg"/>参与方式<hr className="crowd-div1HeaderImg"/></h2>}

                <div className="crowd-div2HeaderDiv">
                    <div className="crowd-div2HeaderDivLeft">
                        <hr/>
                        <h4><strong>参与方式 1 : </strong>通过以太坊钱包购买</h4>
                        <small>参与者需要拥有以太坊钱包，并将ETH发送到智能合约地址，完成认购。认购结束后，对应的token将发送到认购者的以太坊钱包。</small>

                        <div className="crowd-div2HeaderDivLeft-Div">
                            <div className="crowd-div2HeaderDivLeft-Div1">
                                <span> * </span>
                                <p>以太坊钱包是指能够由用户完全控制能够导出私钥的钱包，推荐如下<br/>以太坊钱包：以太坊官方钱包（Mist）</p>
                            </div>

                            <div className="crowd-div2HeaderDivLeft-Div1">
                                <span> * </span>
                                <p>不能从交易所、中心化钱包等第三方平台的账号中直接向智能合约地址转账，<br/>如果这样操作token将被发送到交易所管理的地址中</p>
                            </div>
                        </div>

                        <p id="crowd-div2HeaderDivLeft-foot">token购买的以太坊地址为 : <br/><span>合约上线前公布</span></p>
                    </div>
                    <div className="crowd-div2HeaderDivRight">
                        <hr/>
                        <h4><strong>参与方式 2 : </strong>通过指定平台购买</h4>
                        <small>以下平台是与万维链官方合作的平台，平台将代用户完成认购的操作，认购结束后，由平台将对应的token发送到认购者的以太坊钱包。</small>

                        <div className="rowd-div2HeaderDivRight-Div">
                            <h2>指定平台待定</h2>
                            {/*<img src={bizhongchou1} id="img1" onMouseEnter={() => this.onEnter('img1')} onMouseLeave={() => this.onLeave('img1')}/>*/}
                            {/*<img src={icoage1} id="img2" onMouseEnter={() => this.onEnter('img2')} onMouseLeave={() => this.onLeave('img2')}/>*/}
                            {/*<img src={token1} id="img3" onMouseEnter={() => this.onEnter('img3')} onMouseLeave={() => this.onLeave('img3')}/>*/}
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Div2)
