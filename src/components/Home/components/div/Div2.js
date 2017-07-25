import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from '../../../../store/lang';
import '../div.scss';

import wanchain from '../../../../image/wanchain.png';
import one from '../../../../image/1.png';
import two from '../../../../image/2.png';
import download from '../../../../image/download.png';

class Div2 extends React.Component {
    static propTypes = {
        language: PropTypes.string,
    };

    render() {
        const {language} = this.props;

        return (
            <div className="container div2Header">
                {language === 'zn' && <h2><hr className="div2HeaderImg"/>万维链整体架构<hr className="div2HeaderImg"/></h2>}
                {language === 'zn' && <p>万维链旨在建立一个基础设施--能够以去中心化的方式完成不同区块链网络的连接及价值的交换</p>}

                {language === 'en' && <h2><hr className="div2HeaderImg"/>Overall Structure of Wanchain<hr className="div2HeaderImg"/></h2>}
                {language === 'en' && <p>Wanchain aims to establish an infrastructure capable of connecting the blockchain networks and exchanging value in a decentralized manner.</p>}

                <div className="astroModule2">
                    <img src={wanchain} className="astroModule2Img" />

                    {language === 'zn' &&
                    <div className= "astroModule2word col-lg-4">
                        <div className="astroModule2wordDiv">
                            <img src={one} />
                            <p>万维链不仅仅是一个<span>通用的跨链协议<br/></span>同时是一个记录跨链交易、链内交易的<span>分布式账本</span></p>
                        </div>
                        <div className="astroModule2wordDiv">
                            <img src={two} />
                            <p>这个账本不但支持<span>智能合约虚拟机<br/></span>而且能支持智能合约下的<span>交易隐私保护</span></p>
                        </div>

                        <div className="div2-submit-area">
                            <a className="div2-submit-button btn" href='/files/Wanchain-Whitepaper-CH-version.pdf' target="_blank">
                                白皮书<img src={download} />
                            </a>
                        </div>
                    </div>
                    }

                    {language === 'en' &&
                    <div className= "astroModule2word">
                        <div className="astroModule2wordDivEn">
                            <img src={one} />
                            <p>Wanchain is not merely a <span>universal cross-chain protocol,</span>it is a<span> distributed ledger </span>that records cross-chain and intra-chain transactions.</p>
                        </div>
                        <div className="astroModule2wordDivEn">
                            <img src={two} />

                            <p>The ledger not only supports<span>smart contracts,</span> but also supports <span>privacy protection</span> for the smart contracts.</p>
                        </div>

                        <div className="div2-submit-area">
                            {language === 'zn' &&
                            <a className="div2-submit-button btn" href='/files/Wanchain-Whitepaper-CH-version.pdf' target="_blank">
                                白皮书<img src={download} />
                            </a>
                            }
                            {language === 'en' &&
                            <a className="div2-submit-buttonEn btn" href='/files/Wanchain-Whitepaper-CH-version.pdf' target="_blank">
                                Whitepaper<img src={download} />
                            </a>
                            }
                        </div>
                    </div>
                    }

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