import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from '../../../../store/lang';
import '../div.scss';

import team1 from '../../../../image/team1.png';
import expert from '../../../../image/expert.png';
import community from '../../../../image/community.png';

class Div6 extends React.Component {
    static propTypes = {
        language: PropTypes.string,
    };

    render() {
        const {language} = this.props;

        return (
            <div className="div6">
                {language === 'zn' &&
                <div className="div6Header" style={{background: `url(${'image/homeFooter.jpg'})`}}>
                    <div className="container div6Title">
                        <h2><hr className="div1HeaderImg"/>我们的优势<hr className="div1HeaderImg"/></h2>
                    </div>

                    <div className="div6Body container">
                        <div className="div6BodyCard">
                            <img src={team1}/>
                            <p>核心团队区块链底层技术的多年积累</p>
                            <span>区块链跨链交互的理念和模式从FACTOM起就<br/>
                                持续积累，万维链项目从模式到技术均酝酿已<br/>
                                久。核心成员在区块链领域的多年积累，对于<br/>
                                共识算法、智能和约、钱包等方面均各有所长。
                            </span>
                            <p><b>T </b>E A M</p>
                        </div>

                        <div className="div6BodyCard" id="div6Card2">
                            <img src={expert}/>
                            <p>顶尖密码学专家的区块链团队</p>
                            <span>在区块链底层进行持续创业需要密码学的理论<br/>
                                论证支撑，万维链团队中有三位应用数学博士<br/>
                                负责进行万维链项目中涉及到的密码学应用进<br/>
                                行创新、论证及算法编写。放眼全球的区块链<br/>
                                项目，这样的配置也很少见。
                            </span>
                            <p><b>E </b>X P E R T S</p>
                        </div>

                        <div className="div6BodyCard">
                            <img src={community}/>
                            <p>全球商业化及社区运营能力</p>
                            <span>运营团队在中国、美国、新加坡等多地均有丰富的<br/>
                                商业经验和资源，在区块链社区中多年的积累，众<br/>
                                多资深人士均支持，投资及指导万维链项目。
                            </span>
                            <p><b>C </b>A P A C I T Y</p>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Div6)
