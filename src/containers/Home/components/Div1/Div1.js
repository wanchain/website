import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

@connect(
    state => ({language: state.auth.language, clientWidth: state.auth.clientWidth, }),
    )
class Div1 extends React.Component {
    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,
      getNaminationFunc: PropTypes.func,
    };

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
      // div1
      const div1HeaderImg2 = document.getElementById('div1HeaderImg2');
      document.styleSheets[0].insertRule('@-webkit-keyframes fadeTop {0% {opacity: 0; transform: translateY(-10%);} 100% {opacity: 1; transform: translateX(0);}}');
      document.styleSheets[0].insertRule(' @-webkit-keyframes fadeRotate {0% {-webkit-transform:rotate(0deg);} 100% {-webkit-transform:rotate(360deg);}}');
      document.styleSheets[0].insertRule('@-webkit-keyframes fadeRight {0% {opacity: 0; transform: translateX(-10%);} 100% {opacity: 1; transform: translateX(0);}}');
      document.styleSheets[0].insertRule('@-webkit-keyframes fadeLeft {0% {opacity: 0; transform: translateX(10%);} 100% {opacity: 1; transform: translateX(0);}}');
      if (div1HeaderImg2) {
        const off = div1HeaderImg2.offsetTop;
        const scrollTop = document.body.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (off >= scrollTop && off < (scrollTop + clientHeight)) {
          div1HeaderImg2.style.cssText = 'opacity: 1; -webkit-animation: fadeTop 2s 1 cubic-bezier(0.77, 0, 0.175, 1); -moz-animation: fadeTop 2s 1 cubic-bezier(0.77, 0, 0.175, 1); -o-animation: fadeTop 2s 1 cubic-bezier(0.77, 0, 0.175, 1); animation: fadeTop 2s 1 cubic-bezier(0.77, 0, 0.175, 1);';
        }
      }

      // div2
      const {clientWidth} = this.props;
      const div1oimg1 = document.getElementById('div1oimg1');
      const div1oimg2 = document.getElementById('div1oimg2');
      const div1oimg3 = document.getElementById('div1oimg3');
      const div1oimg4 = document.getElementById('div1oimg4');
      if (div1oimg1 && clientWidth > 1024) {
        const off1 = div1oimg1.offsetTop + 1500;
        const off2 = div1oimg2.offsetTop + 1500;
        const off3 = div1oimg3.offsetTop + 1500;
        const off4 = div1oimg4.offsetTop + 1500;

        const scrollTop = document.body.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (off1 >= scrollTop && off1 < (scrollTop + clientHeight)) {
          div1oimg1.style.cssText = '-webkit-transform: translate3d(0,0,0); -moz-transform: translate3d(0,0,0); transform: translate3d(0,0,0); -webkit-animation: fadeRotate 2s linear; -moz-animation: fadeRotate 2s linear; animation: fadeRotate 2s linear;';
        }
        if (off2 >= scrollTop && off2 < (scrollTop + clientHeight)) {
          div1oimg2.style.cssText = '-webkit-transform: translate3d(0,0,0); -moz-transform: translate3d(0,0,0); transform: translate3d(0,0,0); -webkit-animation: fadeRotate 2s linear; -moz-animation: fadeRotate 2s linear; animation: fadeRotate 2s linear;';
        }
        if (off3 >= scrollTop && off3 < (scrollTop + clientHeight)) {
          div1oimg3.style.cssText = '-webkit-transform: translate3d(0,0,0); -moz-transform: translate3d(0,0,0); transform: translate3d(0,0,0); -webkit-animation: fadeRotate 2s linear; -moz-animation: fadeRotate 2s linear; animation: fadeRotate 2s linear;';
        }
        if (off4 >= scrollTop && off4 < (scrollTop + clientHeight)) {
          div1oimg4.style.cssText = '-webkit-transform: translate3d(0,0,0); -moz-transform: translate3d(0,0,0); transform: translate3d(0,0,0); -webkit-animation: fadeRotate 2s linear; -moz-animation: fadeRotate 2s linear; animation: fadeRotate 2s linear;';
        }
      }

      // div3
      const astroModule2Img = document.getElementById('astroModule2Img');
      if (astroModule2Img) {
        const off = astroModule2Img.offsetTop;
        const scrollTop = document.body.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (off >= scrollTop && off < (scrollTop + clientHeight)) {
          astroModule2Img.style.cssText = 'opacity: 1; -webkit-animation: fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1); -moz-animation: fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1); -o-animation: fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1); animation: fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1);';
        }
      }

      // div4
      const div3img1 = document.getElementById('div3img1');
      const div3img2 = document.getElementById('div3img2');
      const div3img3 = document.getElementById('div3img3');
      const div3img4 = document.getElementById('div3img4');

      if (div3img1) {
        const off1 = div3img1.offsetTop;
        const off2 = div3img2.offsetTop;
        const off3 = div3img3.offsetTop;
        const off4 = div3img4.offsetTop;

        const scrollTop = document.body.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (off1 >= scrollTop && off1 < (scrollTop + clientHeight)) {
          div3img1.style.cssText = 'opacity: 1; -webkit-animation: fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1); -moz-animation: fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1); -o-animation: fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1); animation: fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1);';
        }
        if (off2 >= scrollTop && off2 < (scrollTop + clientHeight)) {
          div3img2.style.cssText = 'opacity: 1; -webkit-animation: fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1); -moz-animation: fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1); -o-animation: fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1); animation: fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1);';
        }
        if (off3 >= scrollTop && off3 < (scrollTop + clientHeight)) {
          div3img3.style.cssText = 'opacity: 1; -webkit-animation: fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1); -moz-animation: fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1); -o-animation: fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1); animation: fadeRight 2s 1 cubic-bezier(0.77, 0, 0.175, 1);';
        }
        if (off4 >= scrollTop && off4 < (scrollTop + clientHeight)) {
          div3img4.style.cssText = 'opacity: 1; -webkit-animation: fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1); -moz-animation: fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1); -o-animation: fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1); animation: fadeLeft 2s 1 cubic-bezier(0.77, 0, 0.175, 1);';
        }
      }
    }

    render() {
      const {language, clientWidth} = this.props;
      const div1Img = require('../../image/div1.png');
      const div1En = require('../../image/div1EnPc.png');
      const div1EnPc = require('../../image/div1EnPc.png');
      const styles = require('./Div1.scss');
      const vision1 = require('../../image/vision1.png');
      const vision2 = require('../../image/vision2.png');
      const vision3 = require('../../image/vision3.png');
      const vision4 = require('../../image/vision4.png');
      const clear = {clear: 'both'};

      let imgEn;
      if ( Number(clientWidth) >= 320 && Number(clientWidth) <= 767) {
        imgEn = div1En;
      } else {
        imgEn = div1EnPc;
      }

      return (
          <div>
            <div className={styles.div1Header + ' container'}>
              <h2> <hr className={styles.div1HeaderImg}/>
                <span>{language === 'zn' ? '万维链是什么？' : "WANCHAIN'S VISION"}</span>
                <hr className={styles.div1HeaderImg}/>
              </h2>
              <div className={styles.div1HeaderImg2} id="div1HeaderImg2">
                <img src={language === 'zn' ? div1Img : imgEn} />
              </div>
              <div className={styles.divTextContent}>
                <ul>
                  <li>
                    <img src={vision1} />
                    <p>DIGITAL ECONOMY</p>
                    <span>Bitcoin was the first natively digital asset, tens of thousands of more have already followed. The digital economy is expanding rapidly</span>
                  </li>
                  <li>
                    <img src={vision2} />
                    <p>Digitization of Assets</p>
                    <span>Digitization of assets will fundamentally change the financial services industry. </span>
                  </li>
                  <li style={clear}>
                    <img src={vision3} />
                    <p>New Business Models</p>
                    <span>We've been here before. Old business models were destroyed and new business models were created when photographs and media were digitized.</span>
                  </li>
                  <li>
                    <img src={vision4} />
                    <p>Digital Economy</p>
                    <span>The problem is that these digital assets are currently isolated on their respective chains. Their true potential to flow quickly, for near zero cost, and minimal counterparty risk has yet to be realized.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      );
    }
}

export default Div1;
