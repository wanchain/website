import React, { Component, PropTypes } from 'react';

class Crowdsale extends Component {
    static propTypes = {};

    render() {
      const styles = require('./Crowdsale.scss');
      return (
            <div className={styles.crowdsaleDiv}>
              <h1>Coming soon...</h1>
            </div>
      );
    }
}

export default Crowdsale;

// <Div1En/>
// <Div2En/>
// <Div3/>
// <Div4/>
