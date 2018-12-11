import React, {Component} from 'react';
import Helmet from 'react-helmet';


class LabCareer extends Component {
  render() {
    const styles = require('./LabCareer.scss');
    const iframeStyle = { height: '1000px', width: '900px', margin: '0 auto' };
    const iframeBox = { width: '100%', textAlign: 'center'};

    return (<div style={iframeBox}>
      {<Helmet script={[{src: '/jquery/jquery.min.js'}]} link={[{rel: 'stylesheet'}]}/>}
      <Helmet link={[{rel: 'stylesheet'}]}/>
      <iframe src="https://survey.zohopublic.com/zs/U1BUOB" style={iframeStyle} frameBorder={'0'} marginWidth={'0'} marginHeight={'0'} scrolling={'auto'}></iframe>
    </div>);
  }
}

export default LabCareer;