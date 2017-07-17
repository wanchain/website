import React from 'react';

import '../div.scss';

import line from '../../../../image/蓝色分割线.png';
import wanchain from '../../../../image/wanchain.png';
import one from '../../../../image/1.png';
import two from '../../../../image/2.png';
import download from '../../../../image/download.png';

class Div2 extends React.Component {
    render() {
        return (
            <div className="container div2Header">
                <h2><hr className="div2HeaderImg"/>万维链整体架构<hr className="div2HeaderImg"/></h2>
                <p>万维链旨在建立一个基础设施--能够以去中心化的方式完成不同区块链网络的连接及价值的交换</p>
                <div className="astroModule2">
                    <img src={wanchain} className="astroModule2Img" />
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
                            <a className="div2-submit-button btn">
                                白皮书<img src={download} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Div2;

// <a className="div2-submit-button btn" href="http://localhost:3001/white_paper/database.sql" download="database1.sql">
//    白皮书<img src={download} />
// </a>