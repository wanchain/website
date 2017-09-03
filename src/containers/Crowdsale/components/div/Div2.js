import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import ICOwarningModal from '../../../../components/IcoWarn';
import { icoOpenFunc, icoCloseFunc, icoMsgFunc} from 'redux/modules/icoWarning';

const mist = require('../../image/mist.png');

const bizhongchou1 = require('../../image/bizhongchou.png');
const bizhongchou2 = require('../../image/bizhongchou2.png');
const icoage1 = require('../../image/icoage.png');
const icoage2 = require('../../image/icoage2.png');
const token1 = require('../../image/token.png');
const token2 = require('../../image/token2.png');

const info1 = require('../../image/info1.png');
const info2 = require('../../image/info2.png');

const race1 = require('../../image/race1.png');
const race2 = require('../../image/race2.png');

const ren1 = require('../../image/ren.png');
const ren2 = require('../../image/ren2.png');

@connect(
    state => ({icoWarningModal: state.icoWarning.icoWarningModal, icoMsg: state.icoWarning.icoMsg}),
    {icoOpenFunc, icoCloseFunc, icoMsgFunc}
)
class Div2 extends React.Component {
    static propTypes = {
      icoCloseFunc: PropTypes.func,
      icoOpenFunc: PropTypes.func,
      icoWarningModal: PropTypes.bool,
      icoMsg: PropTypes.string,
      icoMsgFunc: PropTypes.func,
    };

    componentWillMount() {
      this.props.icoCloseFunc();
      this.props.icoMsgFunc(null);
    }

    onClick() {
      this.props.icoOpenFunc();
    }

    onEnter(name) {
      const img = document.getElementById(name);
      if (name === 'img1') {img.src = info2;}
      if (name === 'img2') {img.src = icoage2;}
      if (name === 'img3') {img.src = token2;}

      if (name === 'img4') {img.src = bizhongchou2;}
      if (name === 'img5') {img.src = race2;}

      if (name === 'img6') {img.src = ren2;}
    }

    onLeave(name) {
      const img = document.getElementById(name);
      if (name === 'img1') {img.src = info1;}
      if (name === 'img2') {img.src = icoage1;}
      if (name === 'img3') {img.src = token1;}
      if (name === 'img4') {img.src = bizhongchou1;}
      if (name === 'img5') {img.src = race1;}
      if (name === 'img6') {img.src = ren1;}
    }

    showWarns = () => {
      this.props.icoOpenFunc();
    };
    closeWarns = () => {
      this.props.icoCloseFunc();
    };
    render() {
      const {icoWarningModal, icoMsg} = this.props;

      const styles = require('../div.scss');

      return (
            <div className={styles['crowd-div2Header']}>
                <h2><hr className={styles['crowd-div1HeaderImg']}/>参与方式<hr className={styles['crowd-div1HeaderImg']}/></h2>

                <div className={styles['crowd-div2HeaderDiv']}>
                    <div className={styles['crowd-div2HeaderDivLeft']}>
                        <hr/>
                        <h4><strong>参与方式 1 : </strong>通过以太坊钱包购买</h4>
                        <small>参与者需要拥有以太坊钱包，并将ETH发送到智能合约地址，完成认购。认购结束后，对应的token将发送到认购者的以太坊钱包。</small>
                        <img src={mist} className={styles.leftImg}/>
                        <div className={styles['crowd-div2HeaderDivLeft-Div']}>
                            <div className={styles['crowd-div2HeaderDivLeft-Div1']}>
                                <span> * </span>
                                <p>以太坊钱包是指能够由用户完全控制能够导出私钥的钱包，推荐如上以太坊钱包</p>
                            </div>

                            <div className={styles['crowd-div2HeaderDivLeft-Div1']}>
                                <span> * </span>
                                <p>不能从交易所、中心化钱包等第三方平台的账号中直接向智能合约地址转账，
                                如果这样操作token将被发送到交易所管理的地址中</p>
                            </div>
                        </div>

                        { !icoMsg &&
                        <div id={styles['crowd-div2HeaderDivLeft-foot']}>
                            <p style={{opacity: '0', position: 'relative', top: '-20px'}} >token购买的以太坊地址为 : </p>
                            <div className={styles['submit-area']}>
                                <a className={styles['submit-button'] + ' btn'} data-toggle="modal" data-target=".bs-example-modal-lg"
                                   onClick={this.onClick.bind(this)}>查看合约购买地址</a>
                            </div>
                        </div>
                        }
                        { icoMsg &&
                        <div id={styles['crowd-div2HeaderDivLeft-foot']}>
                            <p >购买万维链Token的以太坊地址 : </p>
                            <div className={styles['submit-area-p']}>
                                <p className={styles['submit-button-p']}>{icoMsg}</p>
                            </div>
                        </div>
                        }
                    </div>
                    <div className={styles['crowd-div2HeaderDivRight']}>
                        <hr/>
                        <h4><strong>参与方式 2 : </strong>通过指定平台购买</h4>
                        <small>以下平台是与万维链官方合作的平台，平台将代用户完成认购的操作，认购结束后，由平台将对应的token发送到认购者的以太坊钱包。</small>

                        <div className={styles['rowd-div2HeaderDivRight-Div']}>
                            {/* <h2>指定平台待定</h2> */}
                            <img src={bizhongchou1} className={styles.img4} id="img4" />
                            <img src={race1} className={styles.img5} id="img5" />
                            <img src={ren1} className={styles.img6} id="img6" />
                        </div>
                        <p>平台锁定已经结束</p>
                    </div>
                </div>
                <ICOwarningModal show={icoWarningModal} onHide={this.showWarns} onClose={this.closeWarns}/>
            </div>
      );
    }
}

export default Div2;

/*
 <a href="https://ico.info/projects/17" target="_blank">
 <img src={info1} className={styles.img1} id="img1" onMouseEnter={() => this.onEnter('img1')} onMouseLeave={() => this.onLeave('img1')}/>
 </a>
 // <img src={icoage1} className={styles.img2} id="img2" onMouseEnter={() => this.onEnter('img2')} onMouseLeave={() => this.onLeave('img2')}/>
<a href="https://ico.token.im/wanchain?r=87d577bc" target="_blank">
    <img src={token1} className={styles.img3} id="img3" onMouseEnter={() => this.onEnter('img3')} onMouseLeave={() => this.onLeave('img3')}/>
</a>
 */
// onMouseEnter={() => this.onEnter('img4')} onMouseLeave={() => this.onLeave('img4')}
