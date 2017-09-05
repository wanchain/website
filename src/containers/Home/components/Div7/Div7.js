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

      const team1 = require('../../image/team1.png');
      const expert = require('../../image/expert.png');
      const community = require('../../image/community.png');
      const styles = require('./Div7.scss');

      return (
          <div className={styles.div6Header}>
              <div className={styles.div6Title + ' container'}>
                  <h2><hr className={styles.div1HeaderImg}/>
                      {language === 'zn' ? '我们的优势' : 'Wanchain Advantage'}
                      <hr className={styles.div1HeaderImg}/>
                  </h2>
              </div>
              {language === 'zn' &&
              <div className={styles.div6Body + ' clearfix'}>
                  <div className={styles.div6BodyCard}>
                      <img src={team1}/>
                      <p>核心团队区块链底层技术的多年积累</p>
                      <small>区块链跨链交互的理念和模式从FACTOM起就持续积累，万维链项目从模式到技术均酝酿已久。核心成员在区块链领域的多年积累，对于共识算法、智能合约、钱包等方面均各有所长。</small>
                      <p><b>T </b>E A M</p>
                  </div>

                  <div className={styles.div6BodyCard} id={styles.div6Card2}>
                      <img src={expert}/>
                      <p>顶尖密码学专家的区块链团队</p>
                      <small>在区块链底层进行持续创业需要密码学的理论论证支撑，万维链团队中有三位应用数学博士负责进行万维链项目中涉及到的密码学应用进行创新、论证及算法编写。放眼全球的区块链项目，这样的配置也很少见。</small>
                      <p><b>E </b>X P E R T S</p>
                  </div>

                  <div className={styles.div6BodyCard}>
                      <img src={community}/>
                      <p>全球商业化及社区运营能力</p>
                      <small>运营团队在中国、美国、新加坡等多地均有丰富的商业经验和资源，在区块链社区中多年的积累，众多资深人士均支持，投资及指导万维链项目。</small>
                      <p><b>C </b>A P A C I T Y</p>
                  </div>
              </div>
              }
              { language === 'en' &&
              <div className={styles.div6BodyEn + ' clearfix'}>
                  <div className={styles.div6BodyCard}>
                      <img src={team1}/>
                      <p>Years of Accumulation of Blockchain</p>
                      <small>The concept of cross-blockchain transactions started
                          during the development of FACTOM. Wanchain project
                          has long been in development from initial concept to
                          technological implementation. The core team members'
                          accumulated experience in the the underlying blockchain
                          technologies has led to an advantage in implementing
                          smart contracts, consensus algorithms, wallets, etc.
                      </small>
                      <p><b>T </b>E A M</p>
                  </div>

                  <div className={styles.div6BodyCard} id={styles.div6Card2}>
                      <img src={expert}/>
                      <p>Top Experts in Cryptography</p>
                      <small>Top Experts in Cryptography
                          requires support from cryptographic theories. There are
                          three PhDs with applied mathematics degrees on the
                          Wanchain team who are responsible for innovation,
                          algorithm verification and cryptographic applications used
                          in the Wanchain project. Such a strong team is rare in
                          global blockchain projects.
                      </small>
                      <p><b>E </b>X P E R T S</p>
                  </div>

                  <div className={styles.div6BodyCard}>
                      <img src={community}/>
                      <p>Capacity for Global Commercialization</p>
                      <small>With years of experience in the blockchain community,
                          our development team has rich commercial expertise and
                          resources in countries such as China, the U.S. and Singapore.
                          A lot of senior members in this community support,
                          invest in and guide the Wanchain project.
                      </small>
                      <p><b>C </b>A P A C I T Y</p>
                  </div>
              </div>
              }
          </div>
      );
    }
}

export default Div7;
