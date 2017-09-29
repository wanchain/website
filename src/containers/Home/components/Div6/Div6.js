import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import conConfig from '../../../conConfig';

@connect(
    state => ({language: state.auth.language, clientWidth: state.auth.clientWidth, }),
)
class Div6 extends React.Component {
    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,
    };

    render() {
      const {clientWidth, language} = this.props;

      const down = require('../../image/down1.png');
      const up = require('../../image/up1.png');
      const styles = require('./Div6.scss');
      return (
          <div className={clientWidth > 1025 ? styles.div5Header : ''}>
              <div className={styles.div5HeaderDiv + ' container'}>
                  <h2><hr className={styles.div1HeaderImg}/>ROADMAP<hr className={styles.div1HeaderImg}/></h2>
              </div>

              {clientWidth > 1025 ?
                  <div>
                      {/* 上 */}
                      <div className={styles.module8Div + ' clearfix container'}>
                          <div className={styles.module8DivUp + ' col-lg-3'}>
                              <img src={down} />
                              <h4>{language === 'zn' ? conConfig.HomeDiv6.part1.zn : conConfig.HomeDiv6.part1.en}</h4>
                              <p>2016<small>{' / '}06</small></p>
                          </div>
                          <div className={styles.module8DivUp + ' col-lg-3'}>
                              <img src={down} />
                              <h4>{language === 'zn' ? conConfig.HomeDiv6.part3.zn : conConfig.HomeDiv6.part3.en}</h4>
                              <p>2017<small>{' / '}06</small></p>
                          </div>
                          <div className={styles.module8DivUp + ' col-lg-3'}>
                              <img src={down} />
                              <h4>{language === 'zn' ? conConfig.HomeDiv6.part5.zn : conConfig.HomeDiv6.part5.en}</h4>
                              <p>2017<small>{' / '}11</small></p>
                          </div>
                          <div className={styles.module8DivUp + ' col-lg-3'}>
                              <img src={down} />
                              <h4>{language === 'zn' ? conConfig.HomeDiv6.part7.zn : conConfig.HomeDiv6.part7.en}</h4>
                              <p>2018<small>{' / '}12</small></p>
                          </div>
                      </div>

                      {/* 下 */}
                      <div className={styles.module8Div2 + ' clearfix container'}>
                          <div className={styles.module8DivUp2 + ' col-lg-3'}>
                              <img src={up} />
                              <p>2016<small>{' / '}12</small></p>
                              <h4>{language === 'zn' ? conConfig.HomeDiv6.part2.zn : conConfig.HomeDiv6.part2.en}</h4>
                          </div>
                          <div className={styles.module8DivUp2 + ' col-lg-3'}>
                              <img src={up} />
                              <p>2017<small>{' / '}09</small></p>
                              <h4>{language === 'zn' ? conConfig.HomeDiv6.part4.zn : conConfig.HomeDiv6.part4.en}</h4>
                          </div>
                          <div className={styles.module8DivUp2 + ' col-lg-3'}>
                              <img src={up} />
                              <p>2018<small>{' / '}06</small></p>
                              <h4>{language === 'zn' ? conConfig.HomeDiv6.part6.zn : conConfig.HomeDiv6.part6.en}</h4>
                          </div>
                          <div className={styles.module8DivUp2 + ' col-lg-3'}>
                              <img src={up} />
                              <p>2019</p>
                              <h4>{language === 'zn' ? conConfig.HomeDiv6.part8.zn : conConfig.HomeDiv6.part8.en}</h4>
                          </div>
                      </div>
                  </div>
              :
                  <div className={styles.module8Div1 + ' clearfix container'}>
                      <div className={styles.module8Div1Up + ' col-lg-3'}>
                          <p>2016<small>{' / '}06</small></p>
                          <h4>{language === 'zn' ? conConfig.HomeDiv6.part1.zn : conConfig.HomeDiv6.part1.en}</h4>
                      </div>
                      <div className={styles.module8Div1Up + ' col-lg-3'}>
                          <p>2016<small>{' / '}12</small></p>
                          <h4>{language === 'zn' ? conConfig.HomeDiv6.part2.zn : conConfig.HomeDiv6.part2.en}</h4>
                      </div>
                      <div className={styles.module8Div1Up + ' col-lg-3'}>
                          <p>2017<small>{' / '}06</small></p>
                          <h4>{language === 'zn' ? conConfig.HomeDiv6.part3.zn : conConfig.HomeDiv6.part3.en}</h4>
                      </div>
                      <div className={styles.module8Div1Up + ' col-lg-3'}>
                          <p>2017<small>{' / '}09</small></p>
                          <h4>{language === 'zn' ? conConfig.HomeDiv6.part4.zn : conConfig.HomeDiv6.part4.en}</h4>
                      </div>
                      <div className={styles.module8Div1Up + ' col-lg-3'}>
                          <p>2017<small>{' / '}11</small></p>
                          <h4>{language === 'zn' ? conConfig.HomeDiv6.part5.zn : conConfig.HomeDiv6.part5.en}</h4>
                      </div>
                      <div className={styles.module8Div1Up + ' col-lg-3'}>
                          <p>2018<small>{' / '}06</small></p>
                          <h4>{language === 'zn' ? conConfig.HomeDiv6.part6.zn : conConfig.HomeDiv6.part6.en}</h4>
                      </div>
                      <div className={styles.module8Div1Up + ' col-lg-3'}>
                          <p>2018<small>{' / '}12</small></p>
                          <h4>{language === 'zn' ? conConfig.HomeDiv6.part7.zn : conConfig.HomeDiv6.part7.en}</h4>
                      </div>
                      <div className={styles.module8Div1Up + ' col-lg-3'}>
                          <p>2019</p>
                          <h4>{language === 'zn' ? conConfig.HomeDiv6.part8.zn : conConfig.HomeDiv6.part8.en}</h4>
                      </div>
                  </div>
              }
          </div>
      );
    }
}

export default Div6;
