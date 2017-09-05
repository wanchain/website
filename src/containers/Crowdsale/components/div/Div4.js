import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import statement from '../../data/statement';
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

      let stat;
      if (language === 'zn') { stat = statement; } else { stat = statementEn; }
      return (
        <div className={styles['crowd-div4Header'] + ' container'}>
            <h2><hr className={styles['crowd-div4HeaderImg']}/>
                {language === 'zn' ? '万维链申明' : 'Statements'}
                <hr className={styles['crowd-div4HeaderImg']}/></h2>
            {stat.map((value, index) => {
              return (
                    <div key={index}>
                        <div className={styles['crowd-div4Header-pot']}></div>
                        <p >{value.describe}</p>
                    </div>
              );
            })
            }
        </div>
      );
    }
}

export default Div4;
