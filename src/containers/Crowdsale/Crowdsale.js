import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getNavButtonFunc } from 'redux/modules/auth';

import Div1En from './components/div/Div1En';
import Div2En from './components/div/Div2En';

import Div3 from './components/div/Div3';
import Div4 from './components/div/Div4';

const unComplieConfig = require('../../../static/upload/unCompileConfig.json');

@connect(
    state => ({clientWidth: state.auth.clientWidth, navButton: state.auth.navButton, language: state.auth.language, }),
    {getNavButtonFunc}
    )
class Crowdsale extends Component {
    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,

      getNavButtonFunc: PropTypes.func,
    };

    componentWillUnmount() {
      this.props.getNavButtonFunc(false);
    }

    render() {
      const { clientWidth} = this.props;
      const corwdLogo = require('./image/corwdLogo.png');
      const cor2 = require('./image/crowdsale.jpg');
      const crowdNumEn = require('./image/crowdNumEn.png');
      const styles = require('./Crowdsale.scss');

      const stylesHome = require('../Home/Home.scss');
      return (
            <div className={styles.crowdsaleDiv}>
                <div className={styles.crowdsaleHeader}>
                    <img src={cor2} className={styles.crowdsaleHeaderDivImg} style={{width: '100%'}}/>
                    { clientWidth > 1024 ?
                        <img src={crowdNumEn} className={styles.crowdsaleHeaderDivNumPC}/> :
                        <img src={crowdNumEn} style={{position: 'relative', top: '-80px', width: '100%'}}/>
                    }
                    <div className={styles.crowdsaleHeaderDiv}>
                        <h2><img src={corwdLogo}/>Token Distribution</h2>
                        <p style={clientWidth > 1024 ? {} : {fontSize: '13px'}}>The total supply of Wancoins is 210 million.
                            The publicly offered digital tokens will be in the form of Wanchain ERC-20 tokens.
                            {clientWidth > 1024 ? <br/> : ''}
                            Eventually the online tokens will be equal to the crowd-funding tokens in quantity.
                            {clientWidth > 1024 ? <br/> : ''}
                            The ICO will start on October 3th, 2017, 16:00 UTC</p>
                    </div>
                </div>
                { unComplieConfig.isBar === 'True' &&
                <div className={stylesHome.ingBox}>
                    <h2 className={stylesHome.ingTitle}>The distribution is ongoing: </h2>
                    <div className="row" style={{width: '100%'}}>
                        <div className="col-md-offset-2 col-md-8">
                            <div className="progress" style={{position: 'relative', marginBottom: '0'}}></div>
                            <div className="progress-bar progress-bar-info progress-bar-striped active"
                                 style={{width: `${unComplieConfig.rate}`, position: 'absolute', top: '0px'}}>
                            </div>
                        </div>
                    </div>
                    <p className={stylesHome.ingDetal}>Total amount: {unComplieConfig.amount}
                        <span className={stylesHome.ingDetalSpan}><em className="progress-value">{unComplieConfig.rate}</em></span>
                    </p>
                </div>
                }
                <Div1En/>
                <Div2En/>
                <Div3/>
                <Div4/>
            </div>
      );
    }
}

export default Crowdsale;

