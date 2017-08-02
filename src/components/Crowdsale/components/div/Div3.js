import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from '../../../../store/lang';
import '../div.scss';
import question from '../../data/question';
import questionEn from '../../data/questionEn';

class Div3 extends React.Component {
    static propTypes = {
        language: PropTypes.string,
    };

    render() {
        const {language} = this.props;

        let questionList;
        if (language === 'zn') {
            questionList = question.map((value, index) => {
                return (
                    <div className="crowd-div3HeaderFaq" key={index}>
                        <b>{value.title}</b>
                        <p>{value.describe}</p>
                    </div>
                )
            });
        } else if (language === 'en') {
            questionList = questionEn.map((value, index) => {
                return (
                    <div className="crowd-div3HeaderFaq" key={index}>
                        <b>{value.title}</b>
                        <p>{value.describe}</p>
                    </div>
                )
            });
        }

        return (
            <div className="crowd-div3Header container">
                {language === 'zn' && <h2><hr className="crowd-div1HeaderImg"/>常见问题<hr className="crowd-div1HeaderImg"/></h2>}
                {language === 'en' && <h2><hr className="crowd-div1HeaderImg"/>FAQ<hr className="crowd-div1HeaderImg"/></h2>}
                {questionList}
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

export default connect(mapStateToProps, mapDispatchToProps)(Div3)
