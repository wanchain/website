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

      return (
            <div className={styles['crowd-div4Header'] + ' container'}>
                {language === 'zn' && <h2><hr className={styles['crowd-div4HeaderImg']}/>万维链申明<hr className={styles['crowd-div4HeaderImg']}/></h2>}
                {language === 'zn' &&
                statement.map((value, index) => {
                  return (
                        <div key={index}>
                            <div className={styles['crowd-div4Header-pot']}></div>
                            <p >{value.describe}</p>
                        </div>
                  );
                })
                }

                {language === 'en' && <h2><hr className={styles['crowd-div4HeaderImg']}/>Statements<hr className={styles['crowd-div4HeaderImg']}/></h2>}
                {language === 'en' &&
                statementEn.map((value, index) => {
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeLanguage: (data) => {
//             dispatch(changeLanguage(data))
//         },
//     };
// };
//
// const mapStateToProps = (state) => ({
//     language : state.lang.language,
//     clientWidth: state.lang.clientWidth,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Div4)
export default Div4;
