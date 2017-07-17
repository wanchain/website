import React from 'react';

import '../div.scss';

import line from '../../../../image/蓝色分割线.png';
import div1Img from '../../../../image/div1.png';

class Div1 extends React.Component {
    render() {
        return (
            <div className="container div1Header">
                <h2> <hr className="div1HeaderImg"/>万维链是什么？<hr className="div1HeaderImg"/></h2>
                <p>基于数字资产的分布式金融基础设施</p>
                <img src={div1Img} className="div1HeaderImg2"/>
            </div>
        );
    }
}

export default Div1;

// <img src={line} className="div1HeaderImg" />