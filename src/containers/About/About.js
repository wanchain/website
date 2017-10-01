import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getNavButtonFunc } from 'redux/modules/auth';

import teamDataEn from './data/dataTeamEn';
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

      let team = teamDataEn;
      let advisory = dataAdvisoryEn;

      return (
            <div className={styles.aboutDiv}>
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
