import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Div1 from './components/div/Div1';
import Div2 from './components/div/Div2';
import Div3 from './components/div/Div3';

import './Crowdsale.scss';

class Crowdsale extends Component {
    static propTypes = {
        language: PropTypes.string,
    };

    render() {
        const {language} = this.props;
        const blog1 = require('../../image/crowdsale.webp');
        const corwdLogo = require('../../image/corwdLogo.png');
        return (
            <div className="crowdsaleDiv">
                {language === 'zn' &&
                <div className="crowdsaleHeader">
                    <img src={blog1} className="crowdsaleHeaderDivImg" style={{width: '100%'}}/>
                    <div className="crowdsaleHeaderDiv">
                        <h2><img src={corwdLogo}/>万维链代币分配</h2>
                        <p>万维链总共发行代币1亿个，公开销售的代币以万维链ERC-20 tokens进行，最终上线的代币与众筹token比例为1:1<br/>
                        公开销售开始日期为2017年9月19日 12:00 UTC</p>
                    </div>
                </div>
                }
                <Div1/>
                <Div2/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const mapStateToProps = (state) => ({
    language : state.lang.language,
});

export default connect(mapStateToProps, mapDispatchToProps)(Crowdsale)

