import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { getNavButtonFunc } from 'redux/modules/auth';

import teamData from './data/dataTeam';
import teamDataEn from './data/dataTeamEn';

import advisoryData from './data/dataAdvisory';
import dataAdvisoryEn from './data/dataAdvisoryEn';

@connect(
    state => ({language: state.auth.language, }),
    {getNavButtonFunc}
)
class About extends Component {
    static propTypes = {
      language: PropTypes.string,
      getNavButtonFunc: PropTypes.func,
    };

    componentWillUnmount() {
      this.props.getNavButtonFunc(false);
    }
    render() {
      const {language} = this.props;
      const blog1 = require('./image/blog1.png');
      const blog2 = require('./image/team.png');
      const styles = require('./About.scss');

      return (
            <div className={styles.aboutDiv}>
                {language === 'zn' && <Helmet title="万维链-资产跨链+隐私保护+智能合约 构建数字新经济基础设施"/>}
                {language === 'en' && <Helmet title="wanchain-A Distributed 'Super Financial Market'"/>}
                <div className={styles.aboutHeader}>
                    <img className={styles.aboutHeaderImg1} src={blog1} />
                    <img className={styles.aboutHeaderImg2} src={blog2} />
                    {language === 'zn' && <h2>项目团队</h2>}
                    {language === 'en' && <h2>Wanchain</h2>}
                </div>

                <div className={styles.aboutBody + ' container'}>
                    <div className={styles.aboutTitle}>
                        {language === 'zn' && <h2>核心团队</h2>}
                        {language === 'en' && <h2>Wanchain Team</h2>}
                    </div>

                    <div className="col-lg-12" style={{marginBottom: '20px'}}>
                        {language === 'zn' &&
                        teamData.map((value, index) => {
                          return (
                              <div className={styles.aboutTitleDiv + ' col-lg-4'} key={index}>
                                  <img src={value.img} />
                                  <h4>{value.title}<small>{value.position}</small></h4>
                                  <p>{value.describe}</p>
                              </div>
                          );
                        })
                        }
                        {language === 'en' &&
                        teamDataEn.map((value, index) => {
                          return (
                              <div className={styles.aboutTitleDiv + ' col-lg-4'} key={index}>
                                  <img src={value.img} />
                                  <h4>{value.title}<small>{value.position}</small></h4>
                                  <p>{value.describe}</p>
                              </div>
                          );
                        })
                        }
                    </div>

                    <div className={styles.aboutTitle}>
                        {language === 'zn' && <h2>顾问团队</h2>}
                        {language === 'en' && <h2>Advisory Group</h2>}
                    </div>

                    <div className="col-lg-12">
                        {language === 'zn' &&
                        advisoryData.map((value, index) => {
                          return (
                              <div className={styles.aboutTitleDiv2 + ' col-lg-4'} key={index}>
                                  <img src={value.img} />
                                  <h4>{value.title}</h4>
                                  <p>{value.describe}</p>
                              </div>
                          );
                        })
                        }
                        {language === 'en' &&
                        dataAdvisoryEn.map((value, index) => {
                          return (
                              <div className={styles.aboutTitleDiv2 + ' col-lg-4'} key={index}>
                                  <img src={value.img} />
                                  <h4>{value.title}</h4>
                                  <p>{value.describe}</p>
                              </div>
                          );
                        })
                        }
                    </div>
                </div>
            </div>
      );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//
//     };
// };
//
// const mapStateToProps = (state) => ({
//     language : state.lang.language,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(About)
export default About;

