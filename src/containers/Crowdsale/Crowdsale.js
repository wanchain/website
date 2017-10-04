import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getNavButtonFunc } from 'redux/modules/auth';

// import Div1En from './components/div/Div1En';
// import Div2En from './components/div/Div2En';
//
// import Div3 from './components/div/Div3';
// import Div4 from './components/div/Div4';

@connect(
    state => ({clientWidth: state.auth.clientWidth, navButton: state.auth.navButton, language: state.auth.language, }),
    {getNavButtonFunc}
    )
class Crowdsale extends Component {
    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,

      getNavButtonFunc: PropTypes.func,
    };

    componentWillMount() {
      this.props.getNavButtonFunc(false);
    }
    componentWillUnmount() {
      this.props.getNavButtonFunc(false);
    }

    render() {
      const homeHeader = require('../Home/image/homeHeader.jpg');
      const styles = require('./Crowdsale.scss');
      return (
            <div className={styles.crowdsaleDiv}>
                <div className={styles.homeHeaderDiv}>
                    <img src={homeHeader}/>
                    <h2>The token sale has successfully ended.</h2>
                    <p>Thank you for your participation!</p>
                </div>

            </div>
      );
    }
}

export default Crowdsale;

// <Div1En/>
// <Div2En/>
// <Div3/>
// <Div4/>
