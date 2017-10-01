import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import statementEn from '../../data/statementEn';

@connect(
    state => ({clientWidth: state.auth.clientWidth, navButton: state.auth.navButton, language: state.auth.language, }),
)
class Div4 extends React.Component {
    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,
    };

    render() {
      const {language} = this.props;
      const styles = require('../div.scss');

      const stat = statementEn;

      return (
        <div className={styles['crowd-div4Header'] + ' container'}>
            <h2><hr className={styles['crowd-div4HeaderImg']}/>
                {language === 'zn' ? '万维链申明' : 'Statements'}
                <hr className={styles['crowd-div4HeaderImg']}/></h2>
            {stat.map((value, index) => {
              return (
                    <div key={index} className={styles['crowd-diveHeader-div']}>
                        <div className={styles['crowd-div4Header-pot']}></div>
                        <p className={styles['crowd-diveHeader-p']}>{value.describe}</p>
                    </div>
              );
            })
            }
        </div>
      );
    }
}

export default Div4;
