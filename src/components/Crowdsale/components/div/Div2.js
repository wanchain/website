import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from '../../../../store/lang';
import '../div.scss';

class Div2 extends React.Component {
    static propTypes = {
        language: PropTypes.string,
    };

    render() {
        const {language} = this.props;

        return (
            <div className="crowd-div2Header">
                {language === 'zn' && <h2><hr className="crowd-div2HeaderImg"/>参与方式<hr className="crowd-div2HeaderImg"/></h2>}
                {language === 'en' && <h2><hr className="crowd-div2HeaderImg"/>参与方式<hr className="crowd-div2HeaderImg"/></h2>}

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

                        <p>token购买的以太坊地址为 : <br/><span>1234567890</span></p>
                    </div>
                    {/*<div className="crowd-div2HeaderDivRight">*/}
                    {/*</div>*/}
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

// <a className="div2-submit-button btn" href="http://localhost:3001/white_paper/database.sql" download="database1.sql">
//    白皮书<img src={download} />
// </a>