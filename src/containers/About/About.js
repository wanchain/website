import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import Helmet from 'react-helmet';
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

      let team;
      if (language === 'zn') { team = teamData; } else {team = teamDataEn; }
      let advisory;
      if (language === 'zn') { advisory = advisoryData; } else {advisory = dataAdvisoryEn; }

      return (
            <div className={styles.aboutDiv}>
                {/* {language === 'zn' && <Helmet title="万维链(Wanchain)-资产跨链+隐私保护+智能合约 构建数字新经济基础设施"/>} */}
                {/* {language === 'en' && <Helmet title="wanchain- A Distributed 'Super Financial Market'"/>} */}
                <div className={styles.aboutHeader}>
                    <img className={styles.aboutHeaderImg1} src={blog1} />
                    <img className={styles.aboutHeaderImg2} src={blog2} />
                    <h2>{language === 'zn' ? '项目团队' : 'Wanchain'}</h2>
                </div>

                <div className={styles.aboutBody + ' container'}>
                    <div className={styles.aboutTitle}>
                        <h2>{language === 'zn' ? '核心团队' : 'Wanchain Team'}</h2>
                    </div>

                    <div className={styles.aboutTeam + ' col-lg-12'}>
                      {
                        team.map((value, index) => {
                          return (
                              <div className={styles.aboutTitleDiv + ' col-lg-4'} key={index}>
                                  {value.url ? <a href={value.url} target="_blank"><img src={value.img} /></a> : <img src={value.img} />}
                                  <h4>{value.title}<small>{value.position}</small></h4>
                                  <p>{value.describe}</p>
                              </div>
                          );
                        })
                      }
                    </div>

                    <div className={styles.aboutTitle}>
                        <h2>{language === 'zn' ? '顾问团队' : 'Advisory Group'}</h2>
                    </div>

                    <div className="col-lg-12">
                      {
                        advisory.map((value, index) => {
                          return (
                              <div className={styles.aboutTitleDiv2 + ' col-lg-4'} key={index}>
                                  {value.url ? <a href={value.url} target="_blank"><img src={value.img} /></a> : <img src={value.img} />}
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

export default About;
