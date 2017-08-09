import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

@connect(
    state => ({language: state.auth.language, clientWidth: state.auth.clientWidth, }),
)
class Div1 extends React.Component {
    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,
    };

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
      const div1HeaderImg2 = document.getElementById('div1HeaderImg2');
      if (div1HeaderImg2) {
        document.styleSheets[0].insertRule('@-webkit-keyframes fadeTop {0% {opacity: 0; transform: translateY(-10%);} 100% {opacity: 1; transform: translateX(0);}}', 0);

        const off = div1HeaderImg2.offsetTop;
        const scrollTop = document.body.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (off >= scrollTop && off < (scrollTop + clientHeight)) {
          div1HeaderImg2.style.cssText = 'opacity: 1; -webkit-animation: fadeTop 2s 1 cubic-bezier(0.77, 0, 0.175, 1); -moz-animation: fadeTop 2s 1 cubic-bezier(0.77, 0, 0.175, 1); -o-animation: fadeTop 2s 1 cubic-bezier(0.77, 0, 0.175, 1); animation: fadeTop 2s 1 cubic-bezier(0.77, 0, 0.175, 1);';
        }
      }
    }

    render() {
      const {language, clientWidth} = this.props;
      const div1Img = require('../../image/div1.png');
      const div1En = require('../../image/div1En.png');
      const div1EnPc = require('../../image/div1EnPc.png');
      const styles = require('./Div1.scss');

      let imgEn;
      if ( Number(clientWidth) >= 320 && Number(clientWidth) <= 767) {
        imgEn = div1En;
      } else {
        imgEn = div1EnPc;
      }

      return (
          <div>
              {language === 'zn' &&
              <div className={styles.div1Header + ' container'}>
                  <h2> <hr className={styles.div1HeaderImg}/>万维链是什么？<hr className={styles.div1HeaderImg}/></h2>
                  <p>基于数字资产的分布式金融基础设施</p>
                  <img src={div1Img} className={styles.div1HeaderImg2} id="div1HeaderImg2"/>
              </div>
              }
              {language === 'en' &&
              <div className={styles.div1Header + ' container'}>
                  <h2> <hr className={styles.div1HeaderImg}/>What is wanchain？<hr className={styles.div1HeaderImg}/></h2>
                  <p>Wanchain is a distributed financial infrastructure based on digital assets</p>
                  <img src={imgEn} className={styles.div1HeaderImg2} id="div1HeaderImg2"/>
              </div>
              }
          </div>
      );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeLanguage: (data) => {
//             dispatch(changeLanguage(data))
//         },
//     };
// };
//
// const mapStateToProps = (state) => ({
//     language : state.lang.language,
//     clientWidth: state.lang.clientWidth,
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(Div1)
export default Div1;
