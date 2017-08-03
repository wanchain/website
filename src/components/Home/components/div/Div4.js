import React, {PropTypes}  from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from '../../../../store/lang';

import '../div.scss';

class Div4 extends React.Component {

    static propTypes = {
        language: PropTypes.string,
    };

    render() {

        const {language} = this.props;

        return (
            <div className="div4Header">

                <div className="div4HeaderDiv container">
                    {language === 'zn' && <h2><hr className="div1HeaderImg"/>最新通告<hr className="div1HeaderImg"/></h2>}
                    {language === 'en' && <h2><hr className="div1HeaderImg"/>News<hr className="div1HeaderImg"/></h2>}
                    <div className="col-lg-12">
                        <div className="col-lg-4">
                            <a href="https://finance.yahoo.com/news/wanchain-public-blockchain-project-releases-084300788.html" target="_blank">
                            <div className="AstroModule7" >
                                <h2>Wanchain, a Public Blockchain Project, Releases Its White Paper</h2>
                                <p>Wanchain, the first public blockchain project envisioned by the Chinese firm Wanglu Tech, recently released a white paper. Wanchain is a blockchain-based distributed financial infrastructure which allows the exchange of assets among different blockchain networks in a decentralized way. With Wanchain, more organizations are able to develop their own services and innovate in the distributed finance space.</p>
                                <h4>August 3, 2017</h4>
                            </div></a>
                        </div>

                        <a href="http://chainb.com/?P=mpost&id=5425" target="_blank">
                        <div className="col-lg-4">
                            <div className="AstroModule7" >
                                <h2>搭建数字新经济的金融基础设施 —万维链wanchain发布白皮书</h2>
                                <p>万维链是一个基于区块链的分布式金融基础设施，以去中心化的方式完成不同区块链网络的连接及价值的交换。基于该设施，更多的机构能够开发自己的服务，通过万维链wanchain进行分布式金融创新。
                                </p>
                                <h4>2017-8-1</h4>
                            </div>
                        </div></a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Div4)
