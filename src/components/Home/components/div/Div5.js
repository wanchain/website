import React from 'react';
import s from '../div.scss';

import line from '../../../../image/蓝色分割线.png';
import down from '../../../../image/down1.png';
import up from '../../../../image/up1.png';

class Div5 extends React.Component {
    render() {
        return (
            <div className="div5Header">
                <div className="div5HeaderDiv container" >
                    <h2>ROADMAP</h2>
                    <img src={line} className="div5HeaderImg"/>
                </div>
                <div className="module8Div clearfix container">
                    <div className="module8DivUp col-lg-3">
                        <img src={up} />
                        <h4>开始进行跨链及隐私保护相关的基础性理论研究</h4>
                        <p>2016<span>{' / '}09</span></p>
                    </div>
                    <div className="module8DivUp col-lg-3">
                        <img src={up} />
                        <h4>开始进行跨链及隐私保护相关的基础性理论研究</h4>
                        <p>2016<span>{' / '}09</span></p>
                    </div>
                    <div className="module8DivUp col-lg-3">
                        <img src={up} />
                        <h4>开始进行跨链及隐私保护相关的基础性理论研究</h4>
                        <p>2016<span>{' / '}09</span></p>
                    </div>
                    <div className="module8DivUp col-lg-3">
                        <img src={up} />
                        <h4>开始进行跨链及隐私保护相关的基础性理论研究</h4>
                        <p>2016<span>{' / '}09</span></p>
                    </div>
                </div>

                <div className="module8Div2 clearfix container">
                    <div className="module8DivUp2 col-lg-3">
                        <img src={down} />
                        <p>2016<span>{' / '}09</span></p>
                        <h4>开始进行跨链及隐私保护相关的基础性理论研究</h4>
                    </div>
                    <div className="module8DivUp2 col-lg-3">
                        <img src={down} />
                        <p>2016<span>{' / '}09</span></p>
                        <h4>开始进行跨链及隐私保护相关的基础性理论研究</h4>
                    </div>
                    <div className="module8DivUp2 col-lg-3">
                        <img src={down} />
                        <p>2016<span>{' / '}09</span></p>
                        <h4>开始进行跨链及隐私保护相关的基础性理论研究</h4>
                    </div>
                    <div className="module8DivUp2 col-lg-3">
                        <img src={down} />
                        <p>2016<span>{' / '}09</span></p>
                        <h4>开始进行跨链及隐私保护相关的基础性理论研究</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Div5;
