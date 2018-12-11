import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

@connect(
    state => ({language: state.auth.language, clientWidth: state.auth.clientWidth, }),
)
class Div7 extends React.Component {
    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,
    };

    render() {
      const {language} = this.props;
      const styles = require('./Div7.scss');

      const icon = require('../../image/icon.png');
      const aion = require('../../image/aion.png');
      const qunat = require('../../image/qunat.png');
      const factom = require('../../image/factom.png');
      const coincart = require('../../image/coincart.png');

      return (
          <div className={styles.div6Header}>
              <div className={styles.div6Title + ' container'}>
                  <h2><hr className={styles.div1HeaderImg}/>
                      {language === 'zn' ? '合作伙伴' : 'OUR PARTNERS'}
                      <hr className={styles.div1HeaderImg}/>
                  </h2>
              </div>
              <div className={styles.iconStyle}>
                <ul>
                  <li><img src={icon} /></li>
                  <li><img src={aion} /></li>
                  <li><img src={qunat} /></li>
                  <li><img src={factom} /></li>
                  <li><img src={coincart} /></li>
                </ul>
              </div>
          </div>
      );
    }
}

export default Div7;
