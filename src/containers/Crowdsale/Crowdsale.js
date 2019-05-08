import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getNavButtonFunc } from 'redux/modules/auth';

@connect(
    state => ({language: state.auth.language, }),
    {getNavButtonFunc}
)
class Crowdsale extends Component {
    static propTypes = {
      language: PropTypes.string,
    };

    render() {
      const styles = require('./Crowdsale.scss');
      const {language} = this.props;
      return (
            <div className={styles.crowdsaleDiv}>
              <h1>{language === 'zn' ? 'Token sale已结束' : 'The token sale has been completed.'}</h1>
            </div>
      );
    }
}

export default Crowdsale;

// <Div1En/>
// <Div2En/>
// <Div3/>
// <Div4/>
