// import React, {PropTypes} from 'react';
import React from 'react';

// import { connect } from 'react-redux';


class Div1 extends React.Component {
    // static propTypes = {
    //     language: PropTypes.string,
    //     clientWidth: PropTypes.number,
    // };

    render() {
      // const {language} = this.props;
      const mark = require('../../image/mark.png');

      const styles = require('../div.scss');
      return (
            <div className={styles['crowd-div1Header'] + ' container'}>
                <h2><hr className={styles['crowd-div1HeaderImg']}/>公开销售计划<hr className={styles['crowd-div1HeaderImg']}/></h2>

                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <td>第一阶段</td>
                        <td><h4>8.5折</h4></td>
                        <td>2017 09-06 12:00 -- 09-13 11:59 <small>UTC</small></td>
                    </tr>
                    <tr>
                        <td>第二阶段</td>
                        <td><h4>9.5折</h4></td>
                        <td>2017 09-13 12:00 -- 09-20 11:59 <small>UTC</small></td>
                    </tr>
                    <tr>
                        <td>第三阶段</td>
                        <td><h4>原价</h4></td>
                        <td>2017 09-20 12:00 -- 09-27 11:59 <small>UTC</small></td>
                    </tr>
                    </tbody>
                </table>

                <div className={styles['crowd-div1HeaderDiv']}>
                    <h4><img src={mark}/>说明:</h4>
                    <div className={styles['crowd-div4Header-pot']}></div>
                    <p>以太坊作价的兑换比例将在销售开始前根据当时以太坊价格情况进行公布。</p><br/>
                    <div className={styles['crowd-div4Header-pot']}></div>
                    <p>当公开销售部分完毕或者ICO时间结束智能合约将自动关闭。每笔交易的最小购买额度为0.1ETH。</p><br/>
                    <div className={styles['crowd-div4Header-pot']}></div>
                    <p>ICO结束后，智能合约将分配token到每个ICO地址，这些token可以通过以太坊钱包进行转账。</p><br/>
                    <div className={styles['crowd-div4Header-pot']}></div>
                    <p>项目上线时，用户根据所持token的份额等比例兑换为万维链原生币 wancoin，1.0版本的预计上线日期为2017年11月。</p>
                </div>
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
//     clientWidth: state.lang.clientWidth,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Div1)
export default Div1;

// <img src={line} className="div1HeaderImg" />
