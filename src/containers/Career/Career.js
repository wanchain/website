import React, {Component} from 'react';
import Helmet from 'react-helmet';
import Banner from './components/banner';
import Content from './components/content';

class Career extends Component {
  render() {
    const styles = require('./Career.scss');
    return (<div>
      {<Helmet script={[{src: '/jquery/jquery.min.js'}, {src: '/js/career/career.js'}]} link={[{rel: 'stylesheet', href: '/css/career.css'}]}/>}
      <Helmet link={[{rel: 'stylesheet', href: '/css/career.css'}]}/>
      <Banner/>
      <Content/>
      <div className={styles.footer}>
        <div className={styles.fDiv}>
          <h2>About Us</h2>
          <p>Wanchain is developing next generation cross-chain blockchain architecture with privacy protection. Our mission is to re-build the financial services industry and recently raised $35 million in an ICO. For more information please visit
          </p>
          <h3>www.wanchain.org</h3>
        </div>
      </div>
    </div>);
  }
}

export default Career;
