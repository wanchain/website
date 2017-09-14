import React, { Component } from 'react';

class IcoNotice extends Component {
    render() {
      const styles = require('./ico.scss');

      return (
          <div className={styles.ico + ' container'}>
              <strong>NOTICE:</strong>
              <hr/>
              <p>1.THE ICO PLANNED ON SEP 6TH WILL BE DELAYED TO A FUTURE DATE (STILL TO BE CONFIRMED WHEN).</p>
              <p>2.DO NOT VISIT ANY OTHER WEBSITES CLAIMING TO BE WANCHAIN.<br/>
                 {'   '}THE OFFICIAL WANCHAIN WEBSITE IS**WANCHAIN.ORG** NOT .INFO, .COM .IO .NET -- ONLY .ORG IS REAL</p>
              <p>3.WANCHAIN.CO IS A FAKE WEBSITE, DO NOT VISIT THIS SITE</p>
              <p>4.DO NOT CLICK ON ANY LINK SENT FROM SLACKBOT</p>
              <p>5.CURRENTLY THERE IS NO ONGOING ICO. WE WILL NOT DEMAND YOU SEND ETH TO US.</p>
          </div>
      );
    }
}

export default IcoNotice;

