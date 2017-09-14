import React, { Component } from 'react';
import Helmet from 'react-helmet';

class WhiteForm extends Component {
  render() {
    // const styles = require('./WhiteForm.scss');

    return (
        <div id="wufoo-zccmpzw1ve8srz" className="container">
          <Helmet script={[{src: '/whiteForm/whiteForm.js'}]} link={[{rel: 'stylesheet', href: '/css/whiteForm.css'}]}/>
        </div>
    );
  }
}

export default WhiteForm;
