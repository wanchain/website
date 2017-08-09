import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import question from '../../data/question';
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

      return (
            <div className={styles['crowd-div3Header'] + ' container'}>
                {language === 'zn' && <h2><hr className={styles['crowd-div1HeaderImg']}/>常见问题<hr className={styles['crowd-div1HeaderImg']}/></h2>}
                {language === 'zn' &&
                question.map((value, index) => {
                  return (
                        <div className={styles['crowd-div3HeaderFaq']} key={index}>
                            <b>{value.title}</b>
                            <p>{value.describe}</p>
                        </div>
                  );
                })
                }

                {language === 'en' && <h2><hr className={styles['crowd-div1HeaderImg']}/>FAQ<hr className={styles['crowd-div1HeaderImg']}/></h2>}
                {language === 'en' &&
                questionEn.map((value, index) => {
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeLanguage: (data) => {
//             dispatch(changeLanguage(data))
//         },
//     };
// };

// const mapStateToProps = (state) => ({
//     language : state.lang.language,
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(Div3)
export default Div3;

