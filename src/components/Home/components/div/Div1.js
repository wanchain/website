import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from '../../../../store/lang';
import '../div.scss';

import div1Img from '../../../../image/div1.png';
import div1En from '../../../../image/div1En2.png';
import div1En2 from '../../../../image/div1En.png';

class Div1 extends React.Component {
    static propTypes = {
        language: PropTypes.string,
    };

    render() {
        const {language} = this.props;

        return (
            <div className="container div1Header">
                {language === 'zn' &&
                <h2> <hr className="div1HeaderImg"/>万维链是什么？<hr className="div1HeaderImg"/></h2>
                }
                {language === 'zn' &&
                <p>基于数字资产的分布式金融基础设施</p>
                }

                {language === 'en' &&
                <h2> <hr className="div1HeaderImg"/>What is wanchain？<hr className="div1HeaderImg"/></h2>
                }
                {language === 'en' &&
                <p>Distributed financial infrastructure based on digital assets</p>
                }

                {language === 'zn' &&
                <img src={div1Img} className="div1HeaderImg2"/>
                }
                {language === 'en' &&
                <img src={div1En} className="div1HeaderImg2"/>
                }

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: (data) => {
            dispatch(changeLanguage(data))
        },
    };
};

const mapStateToProps = (state) => ({
    language : state.lang.language,
});

export default connect(mapStateToProps, mapDispatchToProps)(Div1)


// <img src={line} className="div1HeaderImg" />