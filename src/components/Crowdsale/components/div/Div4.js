import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from '../../../../store/lang';
import '../div.scss';
import statement from '../../data/statement';

class Div4 extends React.Component {
    static propTypes = {
        language: PropTypes.string,
    };

    render() {
        const {language} = this.props;

        let statementList;
        if (language === 'zn') {
            statementList = statement.map((value, index) => {
                return (
                    <div key={index}>
                        <div className="crowd-div4Header-pot"></div>
                        <p>{value.describe}</p>
                    </div>
                )
            });
        } else if (language === 'en') {
            statementList = statement.map((value, index) => {
                return (
                    <div key={index}>
                        <div className="crowd-div4Header-pot"></div>
                        <p>{value.describe}</p>
                    </div>
                )
            });
        }

        return (
            <div className="crowd-div4Header container">
                {language === 'zn' && <h2><hr className="crowd-div4HeaderImg"/>万维链申明<hr className="crowd-div4HeaderImg"/></h2>}
                {language === 'en' && <h2><hr className="crowd-div4HeaderImg"/>万维链申明<hr className="crowd-div4HeaderImg"/></h2>}

                {statementList}
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

export default connect(mapStateToProps, mapDispatchToProps)(Div4)
