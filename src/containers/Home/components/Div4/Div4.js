import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import conConfig from '../../../../../test/conConfig';
@connect(
    state => ({language: state.auth.language, clientWidth: state.auth.clientWidth, }),
)
class Div4 extends React.Component {

    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,
    };

    render() {
      const {clientWidth, language} = this.props;
      const part1 = require('../../image/part1.png');
      const part2 = require('../../image/part2.png');
      const part3 = require('../../image/part3.png');
      const part4 = require('../../image/part4.png');

      const one = require('../../image/one.png');
      const two = require('../../image/two.png');
      const three = require('../../image/three.png');
      const four = require('../../image/four.png');

      const styles = require('./Div4.scss');
      return (
          <div className={clientWidth < 1025 ? styles.officalModule : ''}>
              <div className={styles.officalModule3}>
                  <div className="container">
                      {clientWidth > 1025 ? <img src={part1} id="div3img1"/> : ''}
                      <div className={styles.officalModule3Div + ' col-lg-8'}>
                          <img src={one}/>
                          <h2>{language === 'zn' ? '去中心化的跨链机制' : 'Distributed Cross-Chain Mechanism'}</h2>
                          <p>{language === 'zn' ? conConfig.HomeDiv4.part1.zn : conConfig.HomeDiv4.part1.en}
                          </p>
                      </div>
                      {clientWidth > 1025 ? '' : <img src={part1} id="div3img1" className={styles.div3img1}/>}
                  </div>
              </div>

              <div className={clientWidth < 1025 ? styles.officalModule3 : styles.officalModule4}>
                  <div className="container">
                      <div className={clientWidth < 1025 ? styles.officalModule3Div : styles.officalModule4Div + ' col-lg-7'}>
                          <img src={two}/>
                          <h2>{language === 'zn' ? '通用跨链协议' : 'Universal cross-chain protocol'}</h2>
                          <p>{language === 'zn' ? conConfig.HomeDiv4.part2.zn : conConfig.HomeDiv4.part2.en}</p>
                      </div>
                      {clientWidth > 1025 ? <img src={part2} id="div3img2" /> : <img src={part2} id="div3img2" className={styles.div3img2}/>}
                  </div>
              </div>

              <div className={styles.officalModule3}>
                  <div className="container">
                      {clientWidth > 1025 ? <img src={part3} id="div3img3"/> : ''}
                      <div className={styles.officalModule3Div + ' col-lg-8'} id="officalModule3Div2">
                          <img src={three}/>
                          <h2>{language === 'zn' ? '交易隐私保护' : 'Privacy Protection'}</h2>
                          <p>{language === 'zn' ? conConfig.HomeDiv4.part3.zn : conConfig.HomeDiv4.part3.en}</p>
                      </div>
                      {clientWidth > 1025 ? '' : <img src={part3} id="div3img3" className={styles.div3img3}/>}
                  </div>
              </div>

              <div className={clientWidth < 1025 ? styles.officalModule3 : styles.officalModule4}>
                  <div className="container">
                      <div className={clientWidth < 1025 ? styles.officalModule3Div : styles.officalModule4Div + ' col-lg-7'}>
                          <img src={four}/>
                          <h2>{language === 'zn' ? '复杂场景支持' : 'Complex Application Support'}</h2>
                          <p>{language === 'zn' ? conConfig.HomeDiv4.part4.zn : conConfig.HomeDiv4.part4.en}</p>
                      </div>
                      {clientWidth > 1025 ? <img src={part4} id="div3img4"/> : <img src={part4} id="div3img4" className={styles.div3img4}/>}
                  </div>
              </div>
          </div>
        );
    }
}

export default Div4;
