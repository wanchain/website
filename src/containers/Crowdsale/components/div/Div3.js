import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import questionEn from '../../data/questionEn';

@connect(
    state => ({clientWidth: state.auth.clientWidth, navButton: state.auth.navButton, language: state.auth.language, }),
    )
class Div3 extends React.Component {
    static propTypes = {
      language: PropTypes.string,
    };

    render() {
      const {language} = this.props;
      const styles = require('../div.scss');

      const ques = questionEn;
      return (
            <div className={styles['crowd-div3Header'] + ' container'}>
                <h2><hr className={styles['crowd-div1HeaderImg']}/>{language === 'zn' ? '常见问题' : 'FAQ'}
                    <hr className={styles['crowd-div1HeaderImg']}/>
                </h2>
                {
                ques.map((value, index) => {
                  return (
                        <div className={styles['crowd-div3HeaderFaq']} key={index}>
                            <b>{value.title}</b>
                            <p>{value.describe}</p>
                        </div>
                  );
                })
                }
            </div>
        );
    }
}

export default Div3;

