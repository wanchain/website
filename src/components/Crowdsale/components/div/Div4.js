import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from '../../../../store/lang';
import '../div.scss';
import statement from '../../data/statement';
import statementEn from '../../data/statementEn';

class Div4 extends React.Component {
    static propTypes = {
        language: PropTypes.string,
        clientWidth: PropTypes.number,
    };

    render() {
        const {language, clientWidth} = this.props;

        let statementList;
        if (language === 'zn') {
            statementList = statement.map((value, index) => {
                return (
                    <div key={index}>
                        <div className="crowd-div4Header-pot"></div>
                        <p >{value.describe}</p>
                    </div>
                )
            });
        } else if (language === 'en') {
            statementList = statementEn.map((value, index) => {
                let style;
                let style1 = {fontSize: '14px'};
                if (index === 0 && clientWidth > 767) { style = {position: 'relative', top: '18px'}; style1={marginLeft: '17px', fontSize: '14px'}}
                if (index === 3 && clientWidth > 767) { style = {position: 'relative', top: '0'}; style1={marginLeft: '17px', fontSize: '14px', marginTop: '-20px'}}
                return (
                    <div key={index}>
                        <div className="crowd-div4Header-pot" style={style}></div>
                        <p style={style1}>{value.describe}</p>
                    </div>
                )
            });
        }

        return (
            <div className="crowd-div4Header container">
                {language === 'zn' && <h2><hr className="crowd-div4HeaderImg"/>万维链申明<hr className="crowd-div4HeaderImg"/></h2>}
                {language === 'en' && <h2><hr className="crowd-div4HeaderImg"/>Statements<hr className="crowd-div4HeaderImg"/></h2>}

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
    clientWidth: state.lang.clientWidth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Div4)
