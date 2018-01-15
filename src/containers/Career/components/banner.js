import React, {Component} from 'react';
import styles from '../Career.scss';

class BenefitItem extends Component {
  render() {
    const benefits = ['Competitive compensation', 'Great support from team members', 'Invitations to networking events', 'Self-development'];
    const items = benefits.map((item, index) => (<div key={index} className={styles['brDiv' + (
        index + 1)]}>
      <span>{item}</span>
    </div>));
    return (<div className={styles.banRight}>
      {items}
    </div>);
  }
}

class Banner extends Component {
  render() {
    const banLeftimg = require('../image/pic.png');
    return (<div className={styles.bandiv}>
      <div className={styles.w}>
        <div className={styles.banLeft}>
          <img src={banLeftimg} className={styles.carimg1}/>
        </div>
        <BenefitItem/>
      </div>
    </div>);
  }
}

export default Banner;
