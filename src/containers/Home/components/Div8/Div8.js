import React, {PropTypes} from 'react';

class Div8 extends React.Component {

    render() {
      const part1 = require('../../image/bg1.jpg');

      const styles = require('./Div8.scss');
      return (
          <div className={styles.mainbg}>
            <div className={styles.main}>
              <p className={styles.title}>WANCHAIN - REBUILDING FINANCE</p>
              <p className={styles.content}>At Wanchain, we're passionate about rebuilding finance by connecting the world's digital assets onto a single blockchain</p>
            </div>
          </div>
        );
    }
}

export default Div8;
